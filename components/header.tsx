import Link from 'next/link'

/**
 * A very, very rudimentary header. Contained in the page level component to make the brand color experiment easier.
 */
function Header() {
  return (
    <header className="w-full p-3 text-center text-2xl uppercase leading-none lg:p-6 lg:text-4xl">
      <Link href="/">
        <span className="block text-transparent [-webkit-transform:translateZ(0)] [text-shadow:0_0_0_var(--color-brand)]">
          🤝
        </span>
        <span className="text-brand font-medium">Synergia</span>
      </Link>
    </header>
  )
}

export default Header
