const Hero = () => {
  return (
    <section className="w-full py-12 md:py-20 lg:py-24 px-6 lg:px-10 flex justify-center">
      <div className="max-w-[1280px] w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">
            <small className="text-primary uppercase tracking-wider font-bold text-sm">
              Welcome to CoffeeCo
            </small>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">
              Your Daily Ritual Starts Here,{" "}
              <span className="text-primary">Perfected.</span>
            </h1>

            <p className="text-lg text-[#5c4533] dark:text-[#bfb0a3] max-w-[540px]">
              Discover the finest coffee blends and cozy atmosphere.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a className="h-12 px-8 rounded-lg bg-primary text-white font-bold flex items-center gap-2">
                View Menu
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>

              <a className="h-12 px-8 rounded-lg border-2 border-[#e7dbcf] dark:border-[#3e2d1e] font-bold flex items-center gap-2">
                Our Story
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-[#ff9e42] rounded-2xl blur opacity-25"></div>

            <img
              src="/images/hero-coffee.jpg"
              alt="Coffee"
              className="relative w-full aspect-[4/3] rounded-xl shadow-2xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero
