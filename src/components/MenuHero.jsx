const MenuHero = () => {
  return (
    <div
      className="w-full min-h-[420px] rounded-xl flex items-center justify-center text-center bg-cover bg-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuDaZmpe7X12MrKY_IjjP31KEynK5WPI6y7mmub5DS_oni95u1MI_IH-8uRvQFN_FUiL_ZE1ow3c_atBpNcKqs8JQ5OUxs8LWfbOUgg5UFGdl8X-QR7ZO-3FHr8YG07H7efx0a4UeAhZVxCRON_PSawgCV2sJkllanGA3lhW3gXghnl1mLB-AaTDZUb7AcirP7KWTwZUeoss2SHNBSxggnLOlUlpWm2d2ozWZEmdNiqNStoY_HgXpQ7UY8Xiyqd6Y9V5mjqv97zYHg)",
      }}
    >
      <div className="text-white max-w-xl">
        <h1 className="text-4xl md:text-6xl font-black">Our Menu</h1>
        <p className="mt-4 text-white/90">
          Choose your favorite drink and customize it your way.
        </p>
      </div>
    </div>
  )
}

export default MenuHero
