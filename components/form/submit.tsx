import { useFormStatus } from 'react-dom'

/**
 * The submit button for our very, very rudimentary form component. Uses the pending status, which is not super necessary given our use of `after()` in the action, but is useful for styling/guard rail-ing in longer running actions.
 */
function Submit() {
  // For the purposes of this demo we are using unstable_after, which means we don't really have much visible pending state.
  const { pending } = useFormStatus()

  return (
    <button
      className="bg-brand group-invalid/form:bg-brand/25 disabled:bg-brand/50 h-10 cursor-pointer px-3 uppercase text-[black] transition-colors duration-300 group-invalid/form:cursor-not-allowed group-valid/form:hover:bg-[color-mix(in_srgb,_var(--color-brand,_aquamarine)_50%,_white)] lg:h-12 lg:px-6"
      disabled={pending}
      type="submit"
    >
      Submit
    </button>
  )
}

export default Submit
