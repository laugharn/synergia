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
  // Check if the visitor is a bot. We should always serve a bot the control and bail.
  const { isBot } = userAgent(req)

  // If overrides from Vercel Flags exist, use those to serve up the appropriate experiment values.
  const overridesCookie = req.cookies.get('vercel-flag-overrides')?.value
  const overrides = overridesCookie ? await decrypt<FlagOverridesType>(overridesCookie) : {}

  // Map all of the experiments with flag enrollments. This both sets up the rewrite and enriches our Vercel Analytics.
  const flags = isBot
    ? experiments.map(() => false)
    : await Promise.all(
        experiments
          .map((experiment) => {
            return flag({
              decide: () => {
                const cookie = req.cookies.get(`exp${experiment.id}`)?.value
                const override = overrides![`exp${experiment.id}`]

                // If an override exists, return it.
                if (override) {
                  return override
                }

                // If a cookie exists, return it.
                if (cookie) {
                  return cookie
                }

                // Otherwise, enroll the user in the experiment.
                return String(random(0, 1))
              },
              key: `exp${experiment.id}`,
            })
          })
          .map((func) => func()),
      )

  // Rewrite to a URL with the experiments as params, so they are available during rendering.
  const res = NextResponse.rewrite(`${req.nextUrl.origin}/${flags.toString()}/`)

  // Cookie each experiment enrollment result.
  experiments.forEach((experiment, index) => {
    res.cookies.set(`exp${experiment.id}`, String(flags[index]), {
      domain: req.nextUrl.hostname,
      maxAge: 60 * 60 * 24 * 365,
    })
  })

  // Return the rewritten response.
  return res
}
