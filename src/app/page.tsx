import StoryList from '@/components/story-list'
import { fetchTopStories, fetchStoryById } from '@/utils/api'
import { Story } from '@/utils/sharedInterfaces'

export default async function Home() {
  const storyIds = await fetchTopStories()
  const stories = await Promise.all(storyIds.slice(0, 10).map((id: number) => fetchStoryById(id)))
  const filteredStories = stories.filter((story): story is Story => story !== null)

  return (
    <div>
      <StoryList stories={filteredStories} />
    </div>
  )
}
