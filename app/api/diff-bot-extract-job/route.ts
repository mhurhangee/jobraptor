import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { url } = await request.json()

  console.log('===== url =====\n\n', url)

  const token = process.env.DIFFBOT_TOKEN

  if (!token) {
    return NextResponse.json({
      success: false,
      message: 'Diffbot token not found',
    })
  }

  const apiUrl = new URL('https://api.diffbot.com/v3/job')
  apiUrl.searchParams.append('token', token)
  apiUrl.searchParams.append('url', url)

  const response = await fetch(apiUrl.toString(), {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  })

  const data = await response.json()

  return NextResponse.json({
    success: true,
    content: data.objects[0].text,
  })
}
