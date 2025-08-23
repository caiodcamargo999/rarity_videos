import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { videoId: string } }
) {
  try {
    const { videoId } = params;
    
    if (!videoId) {
      return NextResponse.json(
        { error: 'Video ID is required' },
        { status: 400 }
      );
    }

    // Instagram video URL construction
    const instagramUrl = `https://www.instagram.com/reel/${videoId}/`;
    
    // For now, we'll return a response that indicates the video should play on site
    // In a production environment, you would:
    // 1. Fetch the actual video content from Instagram
    // 2. Process and optimize the video
    // 3. Serve it from your CDN or storage
    // 4. Handle authentication and rate limiting
    
    // This is a placeholder response - in reality, you'd stream the actual video
    return NextResponse.json({
      success: true,
      videoId,
      message: 'Video content would be served here',
      instagramUrl,
      // In production, you'd return the actual video stream
      // or redirect to your video storage/CDN
    });

  } catch (error) {
    console.error('Error fetching Instagram video:', error);
    return NextResponse.json(
      { error: 'Failed to fetch video content' },
      { status: 500 }
    );
  }
}

// Handle HEAD requests for video metadata
export async function HEAD(
  request: NextRequest,
  { params }: { params: { videoId: string } }
) {
  try {
    const { videoId } = params;
    
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
