const MenuCard = ({ title, price, desc, image, badge }) => {
  return (
    <div className="group flex flex-col rounded-xl bg-white dark:bg-[#2c2219] border overflow-hidden shadow-sm hover:shadow-lg transition-all">
      <div className="relative h-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform"
          style={{ backgroundImage: `url(${image})` }}
        />
        {badge && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-2 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex justify-between mb-2">
          <h3 className="font-bold group-hover:text-primary">{title}</h3>
          <span className="text-primary font-bold">{price}</span>
        </div>

        <p className="text-sm text-[#9a734c] flex-1">{desc}</p>

        <button className="mt-4 h-9 rounded-lg bg-primary/10 text-primary font-bold hover:bg-primary hover:text-white transition-all">
          Add to Order
        </button>
      </div>
    </div>
  )
}

export default MenuCard
