# Video Compression Script for Carolina Portfolio
# This script compresses videos to fit within GitHub's 100MB limit

Write-Host "🎬 Carolina Portfolio - Video Compression Script" -ForegroundColor Green
Write-Host "===============================================" -ForegroundColor Green

# Check if FFmpeg is installed
try {
    $ffmpegVersion = ffmpeg -version 2>$null
    if ($ffmpegVersion) {
        Write-Host "✅ FFmpeg is installed" -ForegroundColor Green
    } else {
        Write-Host "❌ FFmpeg not found. Please install FFmpeg first." -ForegroundColor Red
        Write-Host "Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
        exit 1
    }
} catch {
    Write-Host "❌ FFmpeg not found. Please install FFmpeg first." -ForegroundColor Red
    Write-Host "Download from: https://ffmpeg.org/download.html" -ForegroundColor Yellow
    exit 1
}

# Create videos directory if it doesn't exist
if (!(Test-Path "videos")) {
    New-Item -ItemType Directory -Name "videos"
    Write-Host "📁 Created videos directory" -ForegroundColor Blue
}

Write-Host ""
Write-Host "📋 Instructions:" -ForegroundColor Cyan
Write-Host "1. Place your original video files in the 'videos' directory"
Write-Host "2. Run this script to compress them"
Write-Host "3. The compressed videos will be ready for GitHub upload"
Write-Host ""

Write-Host "🎯 Compression Settings:" -ForegroundColor Yellow
Write-Host "- Video Codec: H.264 (libx264)"
Write-Host "- Quality: CRF 40 (good compression)"
Write-Host "- Audio: AAC 64k"
Write-Host "- Target: Under 100MB per file"
Write-Host ""

Write-Host "📁 Current videos directory contents:" -ForegroundColor Blue
if (Test-Path "videos") {
    Get-ChildItem "videos" | ForEach-Object {
        $size = [math]::Round($_.Length / 1MB, 2)
        Write-Host "  📹 $($_.Name) - $size MB" -ForegroundColor White
    }
} else {
    Write-Host "  📁 Directory is empty" -ForegroundColor Gray
}

Write-Host ""
Write-Host "🚀 Ready to compress videos!" -ForegroundColor Green
Write-Host "Place your original videos in the 'videos' directory and run this script again." -ForegroundColor Cyan
