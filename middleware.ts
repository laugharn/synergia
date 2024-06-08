import { decrypt, type FlagOverridesType } from '@vercel/flags'
import { type NextRequest, NextResponse } from 'next/server'
import { experiments } from './lib'
import { unstable_flag as flag } from '@vercel/flags/next'
import { userAgent } from 'next/server'

function random(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const config = {
  matcher: ['/'],
}

export async function middleware(req: NextRequest) {
  const { isBot } = userAgent(req)
  const overridesCookie = req.cookies.get('vercel-flag-overrides')?.value
  const overrides = overridesCookie ? await decrypt<FlagOverridesType>(overridesCookie) : {}

  const flags = isBot
    ? experiments.map(() => false)
    : await Promise.all(
        experiments
          .map((experiment) => {
            return flag({
              decide: () => {
                const cookie = req.cookies.get(`exp${experiment.id}`)?.value
                const override = overrides![`exp${experiment.id}`]

                if (override) {
                  return override
                }

                if (cookie) {
                  return cookie
                }

                const bool = String(random(0, 1))

                return bool
              },
              key: `exp${experiment.id}`,
            })
          })
          .map((func) => func()),
      )

  const res = NextResponse.rewrite(`${req.nextUrl.origin}/${flags.toString()}/`)

  experiments.forEach((experiment, index) => {
    res.cookies.set(`exp${experiment.id}`, String(flags[index]), {
      domain: req.nextUrl.hostname,
      maxAge: 60 * 60 * 24 * 365,
    })
  })

  return res
}
