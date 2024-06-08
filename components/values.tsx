import Pagination from '~/components/pagination'

const values: {
  description: string
  title: string
}[] = [
  { description: 'Effortlessly unify diverse technologies into a cohesive ecosystem.', title: 'Seamless Integration' },
  { description: 'Gain instant access to actionable data for smarter decision-making.', title: 'Real-Time Insights' },
  { description: 'Optimize operations and reduce costs with advanced automation tools.', title: 'Enhanced Efficiency' },
  { description: 'Easily adapt and grow with flexible, future-proof technology.', title: 'Scalable Solutions' },
  { description: 'Achieve comprehensive oversight with interconnected IoT devices.', title: 'Increased Visibility' },
  {
    description: 'Drive transformative change with cutting-edge AI and quantum computing.',
    title: 'Innovation Acceleration',
  },
]

function Values() {
  return (
    <div className="grid w-full grid-cols-1 gap-y-3 py-6 px-3 lg:gap-y-6 lg:py-9 lg:px-6">
      <div className="w-full text-center">
        <h2 className="pb-1.5 text-3xl font-medium uppercase lg:pb-3 lg:text-6xl">
          Holistic Disruption Paradigm Mesh™
        </h2>
        <p className="text-lg lg:text-2xl">
          The values of a suite of services that integrate seamlessly into existing infrastructures and delivers
          unprecedented performance and innovation.
        </p>
      </div>
      <div
        className="scrollbar-none flex h-full w-full snap-x snap-mandatory gap-x-3 overflow-x-scroll overscroll-x-none lg:gap-x-6"
        id="value-outer"
      >
        {values.map((value, index) => {
          return (
            <div
              className="text-brand flex aspect-16/9 w-full shrink-0 grow snap-start flex-wrap items-center justify-center rounded-lg bg-[black] px-3 text-center outline outline-offset-[-1px] outline-[white] lg:aspect-3/1 lg:px-6"
              id={`value-item-${index}`}
              key={index}
            >
              <ul>
                <li className="lg:pb-3">
                  <h3 className="text-3xl font-medium uppercase lg:text-6xl">{value.title}</h3>
                </li>
                <li className="text-lg lg:text-2xl">{value.description}</li>
              </ul>
            </div>
          )
        })}
      </div>
      <Pagination id="value" items={values} />
    </div>
  )
}

export default Values
