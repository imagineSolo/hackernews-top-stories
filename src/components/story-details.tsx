import { Story } from '@/utils/sharedInterfaces'

interface StoryDetailsProps {
  story: Story
}

export default function StoryDetails({ story }: StoryDetailsProps) {
  return (
    <div className="flex flex-col gap-2 px-4">
      <h1 className="text-xl font-bold">{story.title}</h1>
      <p>By: {story.by}</p>
      <p>Score: {story.score}</p>
      <a href={story.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
        Read full story
      </a>
    </div>
  )
}
