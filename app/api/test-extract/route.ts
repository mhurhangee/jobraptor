"use server"

import { NextRequest, NextResponse } from "next/server"
import { extractContentFromUrl, extractJobInfo } from "@/lib/actions/extract-job"

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const url = searchParams.get("url")
    
    if (!url) {
      return NextResponse.json({ error: "URL parameter is required" }, { status: 400 })
    }
    
    // This is just a test endpoint to verify our implementation
    return NextResponse.json({ 
      message: "This is a test endpoint. In production, use the server actions directly.",
      url
    })
  } catch (error) {
    console.error("Error in test-extract route:", error)
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 })
  }
}
