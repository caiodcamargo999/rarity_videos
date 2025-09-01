import { NextResponse } from "next/server";
import { R2Service } from "@/lib/r2-service";

export async function GET() {
  try {
    console.log("API /api/videos called");
    
    const r2Service = R2Service.getInstance();
    const videos = await r2Service.listVideos();
    
    console.log("API: Raw videos from R2 service:", videos);
    console.log("API: Videos count:", videos.length);
    
    // Transform R2 videos to match your existing interface
    const transformedVideos = videos.map(video => ({
      src: video.url, // Direct R2 URL instead of local API endpoint
      title: video.title,
      filename: video.filename,
      size: video.size,
      uploadedAt: video.uploadedAt
    }));
    
    console.log("API: Transformed videos:", transformedVideos);
    console.log("API: Transformed videos src URLs:", transformedVideos.map(v => v.src));
    console.log("API: Transformed videos filenames:", transformedVideos.map(v => v.filename));
    
    return NextResponse.json(transformedVideos);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json([]);
  }
}


