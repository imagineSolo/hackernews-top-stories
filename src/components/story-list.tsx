import { fetchStoryById, fetchTopStories } from '@/utils/api'

interface Story {
  stories: {
    id: number
    title: string
  }[]
}

const StoryList = ({ stories }: Story) => (
  <div className="mx-4">
    <h1 className="mb-5 font-bold text-md md:text-xl xl:text-2xl">Top Hacker News Stories</h1>
    <ol className="flex flex-col gap-3">
      {stories?.map((story) => (
        <li className="text-xl" key={story.id}>
          <a href={`/stories/${story.id}`}>{story.title}</a>
        </li>
      ))}
    </ol>
  </div>
)

export async function getServerSideProps() {
  const storyIds = await fetchTopStories()
  const stories = await Promise.all(storyIds.slice(0, 10).map((id: number) => fetchStoryById(id)))

  return {
    props: { stories },
  }
}

export default StoryList
