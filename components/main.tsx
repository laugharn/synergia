import Form from '~/components/form'
import Hero from './hero'
import Testimonials from '~/components/testimonials'
import Values from '~/components/values'

function Main() {
  return (
    <main className="mx-auto grid w-full max-w-7xl grid-cols-1">
      <Hero />
      <Values />
      <Testimonials />
      <Form />
    </main>
  )
}

export default Main
