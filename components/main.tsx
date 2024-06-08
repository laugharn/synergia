import type { CSSProperties } from 'react'
import Footer from './footer'
import Form from '~/components/form'
import Header from './header'
import Hero from './hero'
import Testimonials from '~/components/testimonials'
import Values from '~/components/values'

function Main({
  isBrandExperiment = false,
  isTaglineExperiment = false,
}: {
  isBrandExperiment?: boolean
  isTaglineExperiment?: boolean
}) {
  return (
    <main
      className="mx-auto grid w-full max-w-7xl grid-cols-1"
      style={
        {
          '--color-brand': isBrandExperiment ? 'lightpink' : 'aquamarine',
        } as CSSProperties
      }
    >
      <Header />
      <Hero isTaglineExperiment={isTaglineExperiment} />
      <Values />
      <Testimonials />
      <Form />
      <Footer />
    </main>
  )
}

export default Main
