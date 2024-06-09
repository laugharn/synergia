import Main from '~/components/main'

/**
 * Effectively the root level page, because all home page requests are routed here via middleware based on experiment enrollments.
 */
async function Page({ params }: { params: { experiments: string } }) {
  // Split out the experiments param, which is URL encoded so "," is "%2C".
  // Then map the experiments to boolean for easier delivery.
  const experiments = params.experiments.split('%2C').map((value) => value === '1')

  return <Main isBrandExperiment={experiments[0]} isTaglineExperiment={experiments[1]} />
}

export default Page
