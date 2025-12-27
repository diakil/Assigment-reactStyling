const FeatureCard = ({ icon, title, desc }) => {
  return (
    <div className="group flex flex-col gap-4 rounded-xl border p-6">
      <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="text-sm">{desc}</p>
    </div>
  )
}

const Features = () => {
  return (
    <section className="py-16 px-6 lg:px-10 flex justify-center">
      <div className="max-w-[1280px] w-full">
        <h2 className="text-3xl font-bold mb-8">Why CoffeeCo?</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            icon="eco"
            title="Ethically Sourced"
            desc="We partner directly with sustainable farms."
          />
          <FeatureCard
            icon="sentiment_satisfied"
            title="Beginner Friendly"
            desc="Safe space for coffee beginners."
          />
          <FeatureCard
            icon="timer"
            title="Ready for Pickup"
            desc="Order ahead and skip the line."
          />
        </div>
      </div>
    </section>
  )
}

export default Features
