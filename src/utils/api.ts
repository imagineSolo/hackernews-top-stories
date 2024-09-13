import { Story } from './sharedInterfaces'

const fetchWithTimeout = (url: string, options = {}, timeout = 10000): Promise<Response> => {
  return Promise.race([
    fetch(url, options),
    new Promise<Response>((_, reject) => setTimeout(() => reject(new Error('Request timed out')), timeout)),
  ])
}

export async function fetchTopStories(): Promise<number[]> {
  try {
    const res: Response = await fetchWithTimeout('https://hacker-news.firebaseio.com/v0/topstories.json')
    if (!res.ok) throw new Error('Failed to fetch top stories')
    const data: number[] = await res.json()
    return data
  } catch (error) {
    console.error(error)
    return []
  }
}

export async function fetchStoryById(id: number): Promise<Story | null> {
  try {
    const res: Response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    if (!res.ok) throw new Error(`Failed to fetch story with id: ${id}`)
    const story = await res.json()
    return story || null
  } catch (error) {
    console.error(error)
    return null
  }
}
