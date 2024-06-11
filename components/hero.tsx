import Link from 'next/link'

/**
 * A no-frills hero component. The only prop is a boolean of the user's tagline experiment enrollment status, which updates the h1 copy.
 */
function Hero({
  isButtonExperiment = false,
  isTaglineExperiment = false,
}: {
  isButtonExperiment?: boolean
  isTaglineExperiment?: boolean
}) {
  return (
    <div className="w-full py-6 px-3 text-center lg:py-9 lg:px-6">
      <h1 className="pb-3 text-4xl font-medium uppercase lg:pb-6 lg:text-7xl">
        {isTaglineExperiment
          ? 'Disrupt Conventional Computing Paradigms'
          : 'Connecting Innovation, Empowering Transformation'}
      </h1>
      <p className="pb-3 text-lg lg:pb-6 lg:text-2xl">
        By leveraging big data and machine learning, we aim to create a paradigm shift in operational efficiencies and
        business intelligence, offering a comprehensive mesh of interconnected solutions.
      </p>
      <div className="flex justify-center gap-6 text-2xl text-lg leading-10 lg:leading-[3rem]">
        <Link
          className="bg-brand h-10 rounded-lg px-3 uppercase text-[black] transition-colors duration-300 hover:bg-[color-mix(in_srgb,_var(--color-brand,_aquamarine)_50%,_white)] lg:h-12 lg:px-6"
          href="#contact"
        >
          {isButtonExperiment ? 'Start Your Demo' : 'Contact Sales'}
        </Link>
      </div>
    </div>
  )
}

export default Hero
