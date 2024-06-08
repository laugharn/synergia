'use client'

import { action } from '~/lib/server'
import Submit from './submit'
import { useState } from 'react'

function Form() {
  const [status, setStatus] = useState<'ACCEPTED' | 'REJECTED'>()

  return (
    <div className="grid w-full grid-cols-1 gap-y-6 py-9 px-3 lg:px-6" id="contact">
      <div className="w-full text-center">
        <h2 className="pb-1.5 text-3xl font-medium uppercase lg:pb-3 lg:text-6xl">Get Started Today</h2>
        <p className="text-lg lg:text-2xl">
          Contact our sales team today to request a demo of the Holistic Disruption Paradigm Mesh™.
        </p>
      </div>
      {status === 'ACCEPTED' && (
        <div className="text-brand text-center text-lg leading-10 lg:text-2xl lg:leading-[48px]">
          Thank you for your interest in Synergia.
        </div>
      )}
      {status !== 'ACCEPTED' && (
        <form
          action={async (formData) => {
            await action(formData)

            setStatus('ACCEPTED')
          }}
          className="group/form mx-auto flex w-full max-w-3xl overflow-hidden rounded-lg bg-[black] text-lg leading-10 outline outline-[white] lg:text-2xl lg:leading-[48px]"
        >
          <label htmlFor="email" className="sr-only">
            Company Email
          </label>
          <input
            className="h-10 flex-1 border-none px-3 placeholder:uppercase placeholder:text-[white]/50 lg:h-12 lg:px-6"
            id="email"
            name="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            placeholder="Company Email"
            required
            type="email"
          />
          <Submit />
        </form>
      )}
    </div>
  )
}

export default Form
