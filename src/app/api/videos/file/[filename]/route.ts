import { NextRequest, NextResponse } from "next/server";
import { BlobService } from "@/lib/blob-service";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    const decodedFilename = decodeURIComponent(filename);
    
    const blobService = BlobService.getInstance();
    const videoInfo = await blobService.getVideoInfo(decodedFilename);
    
    if (!videoInfo) {
      return new NextResponse('Video not found', { status: 404 });
    }
    
    // Redirect to the blob URL for better performance
    return NextResponse.redirect(videoInfo.url);
  } catch (error) {
    console.error('Error serving video file:', error);
    return new NextResponse('Video not found', { status: 404 });
  }
}
