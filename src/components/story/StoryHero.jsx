const StoryHero = () => {
  return (
    <section className="w-full max-w-[1200px] px-4 py-8">
      <div
        className="relative min-h-[500px] rounded-xl bg-cover bg-center flex items-center justify-center text-center p-8"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,.3), rgba(0,0,0,.6)), url(https://lh3.googleusercontent.com/aida-public/AB6AXuBlL6x96ujjMdDyLMKgvK-FIfLONul9WkxSSw4sku8NnoDuixZctFnJMxLSccCHKzK_DEjbd48ajXUR_3wt3nmTnDd6cluS29d1po3EgOysDBXoAM2e9SNZ567HfdAt8xPucrFkwjA91Vc_j-JfBUSy4nmBHHBT4Iz3TMxnSoUcp6SFVw0ID3_8gI-Ab5vsKlZIUgJXR4pVunrZASBAU-bL1wga6M9TLJlUWPId9kppf61uwpxiSy8w_NNXD-ZqUZbitdpo03JeOQ)"
        }}
      >
        <div className="max-w-[700px] text-white">
          <h1 className="text-4xl md:text-6xl font-black">
            More Than Just a Cup
          </h1>
          <p className="mt-4 text-lg text-white/90">
            A coffee shop built for the curious—without the snobbery.
          </p>
        </div>
      </div>
    </section>
  )
}

export default StoryHero
