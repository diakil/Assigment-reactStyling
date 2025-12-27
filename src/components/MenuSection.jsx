import MenuCard from "./MenuCard"

const MenuSection = ({ title, items }) => {
  return (
    <section>
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold">{title}</h2>
        <span className="flex-1 h-px bg-[#e7dbcf] ml-4"></span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <MenuCard key={index} {...item} />
        ))}
      </div>
    </section>
  )
}

export default MenuSection
