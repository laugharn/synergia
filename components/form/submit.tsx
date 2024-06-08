import { useFormStatus } from 'react-dom'

function Submit() {
  // For the purposes of this demo we are using unstable_after, which means we don't really have much visible pending state.
  const { pending } = useFormStatus()

  return (
    <button
      className="bg-brand group-valid/form:hover:bg-brand/75 group-valid/form:hover:bg-brand/50 group-invalid/form:bg-brand/25 disabled:bg-brand/50 h-10 cursor-pointer px-3 uppercase text-[black] transition-colors duration-300 group-invalid/form:cursor-not-allowed lg:h-12 lg:px-6"
      disabled={pending}
      type="submit"
    >
      Submit
    </button>
  )
}

export default Submit
