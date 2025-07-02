import { NextRequest, NextResponse } from 'next/server'

import { Exa } from 'exa-js'

export async function POST(request: NextRequest) {
  const { url } = await request.json()

  const exa = new Exa(process.env.EXA_API_KEY)

  const result = await exa.getContents([url], {
    context: true,
  })

  if (result.statuses?.[0].status !== 'success') {
    return NextResponse.json({
      success: false,
    })
  }

  return NextResponse.json({
    success: true,
    content: result.context,
    url: result.results?.[0].url,
    title: result.results?.[0].title,
  })
}
