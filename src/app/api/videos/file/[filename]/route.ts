import { NextRequest, NextResponse } from "next/server";
import { readFileSync } from "fs";
import { join } from "path";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> }
) {
  try {
    const { filename } = await params;
    const decodedFilename = decodeURIComponent(filename);
    const videoPath = join(process.cwd(), "videos", decodedFilename);
    
    // Read the video file
    const videoBuffer = readFileSync(videoPath);
    
    // Determine content type based on file extension
    const ext = decodedFilename.split('.').pop()?.toLowerCase();
    let contentType = 'video/mp4'; // default
    
    switch (ext) {
      case 'webm':
        contentType = 'video/webm';
        break;
      case 'ogg':
        contentType = 'video/ogg';
        break;
      case 'mov':
        contentType = 'video/quicktime';
        break;
      case 'mp4':
      default:
        contentType = 'video/mp4';
        break;
    }
    
    // Return the video with proper headers
    return new NextResponse(videoBuffer, {
      headers: {
        'Content-Type': contentType,
        'Content-Length': videoBuffer.length.toString(),
        'Accept-Ranges': 'bytes',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving video file:', error);
    return new NextResponse('Video not found', { status: 404 });
  }
}
