// One of the first things I look at on a website is if they have hardcoded the date in their footer.
function Footer() {
  return (
    <footer className="p-3 text-center text-lg uppercase text-[white]/50 lg:p-6 lg:text-2xl">
      &copy;{new Date().getFullYear()}, all rights reserved.
    </footer>
  )
}

export default Footer
