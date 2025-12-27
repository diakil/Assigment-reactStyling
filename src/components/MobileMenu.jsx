export default function MobileMenu({ open, setOpen }) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="md:hidden text-[#1b140d] dark:text-[#fcfaf8]"
      aria-label="Toggle menu"
      
    >
      <span className="material-symbols-outlined text-3xl">
        menu
      </span>
    </button>
  )
}
