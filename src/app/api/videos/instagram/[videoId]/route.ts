import { NextRequest, NextResponse } from "next/server";
import { R2Service } from "@/lib/r2-service";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ videoId: string }> }
) {
  try {
    const { videoId } = await params;
    
    if (!videoId) {
      return NextResponse.json({ error: "Video ID is required" }, { status: 400 });
    }

    const r2Service = R2Service.getInstance();
    const videoInfo = await r2Service.getVideoInfo(videoId);
    
    if (!videoInfo) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    // Return video information for Instagram integration
    return NextResponse.json({
      success: true,
      video: {
        id: videoInfo.filename,
        title: videoInfo.title,
        url: videoInfo.url,
        size: videoInfo.size,
        uploadedAt: videoInfo.uploadedAt
      }
    });
    
  } catch (error) {
    console.error("Error getting video info:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

// Handle HEAD requests for video metadata
export async function HEAD(
  request: NextRequest,
  { params }: { params: Promise<{ videoId: string }> }
) {
  try {
    const { videoId } = await params;
    
    if (!videoId) {
      return new NextResponse(null, { status: 400 });
    }

    // Return headers indicating this is a video endpoint
    return new NextResponse(null, {
      status: 200,
      headers: {
        'Content-Type': 'video/mp4',
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=3600',
      },
    });

  } catch (error) {
    console.error('Error in HEAD request:', error);
    return new NextResponse(null, { status: 500 });
  }
}
