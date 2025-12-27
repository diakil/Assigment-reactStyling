const values = [
  {
    icon: "sentiment_satisfied",
    title: "Approachability",
    desc: "No coffee snobs here. Just friendly conversations."
  },
  {
    icon: "handshake",
    title: "Ethical Sourcing",
    desc: "We pay farmers fairly and sustainably."
  },
  {
    icon: "school",
    title: "Education First",
    desc: "Weekly workshops for brewing mastery."
  }
]

const StoryValues = () => {
  return (
    <section className="bg-[#fcfaf8] dark:bg-[#2a2018] py-20">
      <div className="max-w-[960px] mx-auto grid md:grid-cols-3 gap-6 px-4">
        {values.map((v, i) => (
          <div key={i} className="p-8 bg-white dark:bg-[#221910] border rounded-xl">
            <span className="material-symbols-outlined text-primary text-3xl">
              {v.icon}
            </span>
            <h3 className="mt-4 font-bold text-xl">{v.title}</h3>
            <p className="mt-2 text-sm text-[#1b140d]/70">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StoryValues
