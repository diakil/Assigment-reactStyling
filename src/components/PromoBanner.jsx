const PromoBanner = () => {
  return (
    <section className="py-16 px-6 lg:px-10 flex justify-center">
      <div className="max-w-[1280px] w-full">
        <div className="relative overflow-hidden rounded-2xl bg-background-dark text-white p-12 text-center">
          <h2 className="text-3xl md:text-5xl font-black">
            First Cup is On Us
          </h2>
          <p className="mt-4 max-w-xl mx-auto">
            Join our rewards program and enjoy your first drink for free.
          </p>
          <button className="mt-6 h-12 px-8 rounded-lg bg-primary font-bold">
            Join Rewards
          </button>
        </div>
      </div>
    </section>
  )
}

export default PromoBanner
