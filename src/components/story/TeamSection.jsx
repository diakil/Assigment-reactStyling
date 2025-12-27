import { teamData } from "../../data/teamData"

const TeamSection = () => {
  return (
    <section className="max-w-[960px] px-4 py-20">
      <h2 className="text-3xl font-bold mb-10 text-center">
        Meet the Team
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {teamData.map((member, i) => (
          <div
            key={i}
            className="bg-white dark:bg-[#221910] rounded-xl p-6 text-center"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-32 h-32 mx-auto rounded-full object-cover"
            />
            <h4 className="mt-4 font-bold">{member.name}</h4>
            <p className="text-sm text-primary">{member.role}</p>
            <p className="text-sm text-[#1b140d]/70 mt-2">
              {member.bio}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TeamSection
