import { NextResponse } from "next/server";
import { readdirSync } from "fs";
import { join } from "path";

export async function GET() {
  try {
    // Use a more reliable path resolution
    const videosDir = join(process.cwd(), "videos");
    console.log("Looking for videos in:", videosDir); // Debug log
    
    let videos: { src: string; title?: string }[] = [];
    
    try {
      const files = readdirSync(videosDir);
      console.log("Found files:", files); // Debug log
      
      videos = files
        .filter((f) => /\.(mp4|webm|ogg|mov)$/i.test(f)) // Only actual video files
        .map((f) => ({ 
          src: `/api/videos/file/${encodeURIComponent(f)}`,
          title: f
            .replace(/\.(mp4|webm|ogg|mov)$/i, "") // Remove file extension
            .replace(/_/g, " ") // Replace underscores with spaces
            .replace(/-/g, " ") // Replace hyphens with spaces
            .replace(/\s+/g, " ") // Replace multiple spaces with single space
            .trim() // Remove leading/trailing spaces
        }));
    } catch (error) {
      console.error("Error reading videos directory:", error);
      videos = [];
    }
    
    console.log("Processed videos:", videos); // Debug log
    return NextResponse.json(videos);
  } catch (e) {
    console.error("API error:", e);
    return NextResponse.json([]);
  }
}


