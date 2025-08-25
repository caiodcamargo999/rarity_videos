import { NextResponse } from "next/server";
import { BlobService } from "@/lib/blob-service";

export async function GET() {
  try {
    const blobService = BlobService.getInstance();
    const videos = await blobService.listVideos();
    
    // Transform blob videos to match your existing interface
    const transformedVideos = videos.map(video => ({
      src: video.url, // Direct blob URL instead of local API endpoint
      title: video.title,
      filename: video.filename,
      size: video.size,
      uploadedAt: video.uploadedAt
    }));
    
    console.log("Videos from blob storage:", transformedVideos);
    return NextResponse.json(transformedVideos);
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json([]);
  }
}


