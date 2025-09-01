import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  return NextResponse.json({ 
    message: "Upload endpoint disabled - videos are managed directly through Cloudflare R2 dashboard" 
  }, { status: 501 });
}
