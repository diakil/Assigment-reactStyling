import { timeline } from "../../data/storyTimeline"

const StoryTimeline = () => {
  return (
    <section className="max-w-[960px] px-4 py-16">
      <div className="grid md:grid-cols-3 gap-8">
        {timeline.map((item, i) => (
          <div key={i} className="group">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <div
                className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform"
                style={{ backgroundImage: `url(${item.image})` }}
              />
            </div>
            <h4 className="mt-4 text-xl font-bold">{item.title}</h4>
            <p className="text-sm text-[#1b140d]/70 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StoryTimeline
