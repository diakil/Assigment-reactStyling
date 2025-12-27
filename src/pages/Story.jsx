import StoryHero from "../components/story/StoryHero"
import StoryTimeline from "../components/story/StoryTimeline"
import StoryValues from "../components/story/StoryValues"

const Story = () => {
  return (
    <main className="flex flex-col items-center">
      <StoryHero />
      <StoryTimeline />
      <StoryValues />
    </main>
  )
}

export default Story
