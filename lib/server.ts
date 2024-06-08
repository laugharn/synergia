'use server'

import { track } from '@vercel/analytics/server'
import { unstable_after } from 'next/server'

export async function action(formData: FormData) {
  unstable_after(async () => {
    await sleep(2000)

    track('Email Conversion', {
      email: formData.get('email') as string,
    })
  })

  return true
}

async function sleep(ms: number) {
  return await new Promise((r) => setTimeout(r, ms))
}
