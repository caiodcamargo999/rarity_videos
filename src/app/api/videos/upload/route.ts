import { NextRequest, NextResponse } from "next/server";

export async function POST(_request: NextRequest) {
  try {
    // This endpoint is not currently implemented
    // Videos are now served directly from Cloudflare R2
    return NextResponse.json({ 
      message: "Video upload not implemented. Videos are served directly from Cloudflare R2 storage.",
      status: "not_implemented"
    }, { status: 501 });
  } catch (error) {
    console.error("Error in upload route:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
