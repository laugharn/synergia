'use server'

import { unstable_after } from 'next/server'

export async function action(formData: FormData) {
  unstable_after(async () => {
    await sleep(2000)

    console.log('This will log in the server console two seconds after we get the success message on the front end.')
  })

  return true
}

async function sleep(ms: number) {
  return await new Promise((r) => setTimeout(r, ms))
}
