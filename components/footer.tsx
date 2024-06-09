/**
 * A very, very rudimentary footer with a dynamic timestamp. The year being correct is one of my big website bugaboos.
 */
function Footer() {
  return (
    <footer className="p-3 text-center text-lg uppercase text-[white]/50 lg:p-6 lg:text-2xl">
      &copy;{new Date().getFullYear()}, all rights reserved.
    </footer>
  )
}

export default Footer
