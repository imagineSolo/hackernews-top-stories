import { fetchStoryById } from '@/utils/api'
import { Story } from '@/utils/sharedInterfaces'
import { notFound } from 'next/navigation'
import StoryDetails from '@/components/story-details'

export default async function StoryPage({ params }: { params: { id: string } }) {
  const story: Story | null = await fetchStoryById(parseInt(params.id))

  if (!story) {
    return notFound()
  }

  return <StoryDetails story={story} />
}
