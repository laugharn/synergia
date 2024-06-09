import Link from 'next/link'
import Logo from './logo'

/**
 * A very, very rudimentary header. Contained in the page level component to make the brand color experiment easier.
 */
function Header() {
  return (
    <header className="flex w-full justify-center p-3 text-2xl uppercase leading-none lg:p-6 lg:text-4xl">
      <Link
        className="text-brand flex items-center gap-x-1 transition-all duration-300 hover:text-[color-mix(in_srgb,_var(--color-brand,_aquamarine)_50%,_white)]"
        href="/"
      >
        <Logo className="h-10 w-10" />
        <span className="text-4xl font-medium uppercase">Synergia</span>
      </Link>
    </header>
  )
}

export default Header
