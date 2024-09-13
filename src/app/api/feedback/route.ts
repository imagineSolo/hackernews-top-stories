import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()

  console.log('Feedback data:', body)

  return NextResponse.json({ message: 'Feedback received successfully' })
}
