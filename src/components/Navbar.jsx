import { useState } from "react"
import MobileMenu from "./MobileMenu"

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="w-full border-b border-[#e7dbcf] dark:border-[#3e2d1e] bg-background-light dark:bg-background-dark">
      <div className="mx-auto flex h-20 max-w-[1280px] items-center justify-between px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-3xl text-primary">
            coffee
          </span>
          <h2 className="text-xl font-bold text-[#1b140d] dark:text-[#fcfaf8]">
            CoffeeCo
          </h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex items-center gap-8 text-sm font-medium">
            <li><a href="Hero.jsx" className="hover:text-primary">Home</a></li>
            <li><a href="Story.jsx" className="hover:text-primary">Our Story</a></li>
            <li><a href="Menu.jsx"  className="hover:text-primary">Menu</Link></li>
            <li><a href="/contact.jsx"  className="hover:text-primary">Contact</Link></li>
          </ul>
        </nav>

        {/* Desktop Button */}
        <button className="hidden md:flex h-10 items-center rounded-lg bg-primary px-5 text-white font-bold">
          Order Now
        </button>

        {/* Mobile Menu Button */}
        <MobileMenu open={open} setOpen={setOpen} />
      </div>
    </div>
  )
}

export default Navbar
