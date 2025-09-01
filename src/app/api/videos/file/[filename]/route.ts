import { NextRequest, NextResponse } from "next/server";
import { R2Service } from "@/lib/r2-service";

export async function GET(
  request: NextRequest,
  { params }: { params: { filename: string } }
) {
  try {
    const { filename } = params;
    
    if (!filename) {
      return NextResponse.json({ error: "Filename is required" }, { status: 400 });
    }

    const r2Service = R2Service.getInstance();
    const videoInfo = await r2Service.getVideoInfo(filename);
    
    if (!videoInfo) {
      return NextResponse.json({ error: "Video not found" }, { status: 404 });
    }

    // Redirect to the R2 public URL for direct video access
    return NextResponse.redirect(videoInfo.url);
    
  } catch (error) {
    console.error("Error serving video file:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
