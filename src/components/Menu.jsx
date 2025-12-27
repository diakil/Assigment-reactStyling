import MenuHero from "../components/MenuHero"
import MenuSection from "../components/MenuSection"
import { signatures } from "../data/menuData"

const Menu = () => {
  return (
    <main className="flex flex-col items-center gap-12 py-10">
      <MenuHero />

      <div className="w-full max-w-[960px] px-4">
        <MenuSection title="Signatures" items={signatures} />
      </div>
    </main>
  )
}

export default Menu
