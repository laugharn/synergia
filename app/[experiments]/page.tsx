import Main from '~/components/main'

async function Page({ params }: { params: { experiments: string } }) {
  const experiments = params.experiments.split('%2C').map((value) => value === '1')

  return <Main isBrandExperiment={experiments[0]} isTaglineExperiment={experiments[1]} />
}

export default Page
