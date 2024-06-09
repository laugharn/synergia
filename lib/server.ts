'use server'

import { track } from '@vercel/analytics/server'
import { unstable_after } from 'next/server'

/**
 * The action for our form component.
 * @param formData
 * @returns
 */
export async function action(formData: FormData) {
  // Use Next 15's after functionality to handle the hypothetically complex
  // round trip to the CRM or marketing platform.
  unstable_after(async () => {
    await sleep(2000)

    // Fire off a server-side Vercel analytics event.
    track('Email Conversion', {
      email: formData.get('email') as string,
    })
  })

  // The actual result here is not relevant to the front end, so we can just return.
  return true
}

/**
 * A helper for waiting a given amount of time.
 * @param ms
 * @returns
 */
async function sleep(ms: number) {
  return await new Promise((r) => setTimeout(r, ms))
}
