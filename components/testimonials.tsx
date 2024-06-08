import Image, { type StaticImageData } from 'next/image'
import Kim from '~/assets/kim.png'
import Mercer from '~/assets/mercer.png'
import Pagination from '~/components/pagination'
import Patel from '~/assets/patel.png'

const testimonials: {
  company: string
  description: string
  image: StaticImageData
  name: string
}[] = [
  {
    company: 'OptiChain',
    description:
      "Implementing Synergia's Holistic Disruption Paradigm Mesh™ has revolutionized our supply chain operations.  We now have real-time data insights that empower us to make smarter, faster decisions.",
    image: Mercer,
    name: 'John Mercer',
  },
  {
    company: 'Meditech',
    description:
      'Synergia has been instrumental in driving our mission to deliver superior healthcare solutions. Their solutions are not just cutting-edge but also seamlessly adaptable to our existing infrastructure.',
    image: Patel,
    name: 'Raj Patel',
  },
  {
    company: 'FinEdge',
    description:
      'Synergia has transformed the way we approach financial modeling and risk management. The Holistic Disruption Paradigm Mesh™ has enabled us to stay ahead of market trends and optimize our investment strategies.',
    image: Kim,
    name: 'Laura Kim',
  },
]

function Testimonials() {
  return (
    <div className="grid w-full grid-cols-1 gap-y-3 py-6 px-3 lg:gap-y-6 lg:py-9 lg:px-6">
      <div className="w-full text-center">
        <h2 className="pb-1.5 text-3xl font-medium uppercase lg:pb-3 lg:text-6xl">Real Companies, Real Results</h2>
        <p className="text-lg lg:text-2xl">Synergia is helping industry leaders disrupt traditional business models.</p>
      </div>
      <div
        className="scrollbar-none flex h-full w-full snap-x snap-mandatory gap-3 overflow-x-scroll overscroll-x-none lg:grid lg:grid-cols-3 lg:gap-6"
        id="testimonials-outer"
      >
        {testimonials.map((testimonial, index) => {
          return (
            <div
              className="grid w-full shrink-0 grow snap-start grid-cols-1 gap-y-3 rounded-lg bg-[black] p-3 text-xl outline outline-offset-[-1px] outline-[white] lg:gap-y-6 lg:p-6"
              key={index}
              id={`testimonials-item-${index}`}
            >
              <div className="text-center">{testimonial.description}</div>
              <div className="flex gap-3">
                <div className="bg-brand aspect-square h-14 overflow-hidden rounded-full">
                  <Image className="h-14 w-14" alt={testimonial.name} src={testimonial.image} />
                </div>
                <ul>
                  <li>{testimonial.name}</li>
                  <li className="text-brand uppercase">{testimonial.company}</li>
                </ul>
              </div>
            </div>
          )
        })}
      </div>
      <div className="lg:hidden">
        <Pagination id="testimonials" items={testimonials} />
      </div>
    </div>
  )
}

export default Testimonials
