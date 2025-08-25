# Portfolio Videos Directory

This directory contains the compressed portfolio videos for the Carolina de Abreu portfolio website.

## Video Requirements:
- **Format**: MP4 (preferred) or MOV
- **Size**: Under 100MB per file (GitHub limit)
- **Quality**: Compressed for web delivery
- **Aspect Ratio**: 9:16 (Instagram Reels style)

## Current Videos Needed:
1. `1 - Jamburae Surf_.mp4` - Surf coaching video
2. `2 Fun in Nias Island_.mp4` - Island adventure
3. `3 - Real Estate_.mp4` - Real estate showcase
4. `4 - Jamburae Surf.mov` - Advanced surf techniques
5. `5 - Jamburae - Owner part 1_github_ready.mp4` - Owner interview part 1
6. `6 - Jamburae - Onwer part 2_github_ready.mp4` - Owner interview part 2
7. `7 - Guest Review.mp4` - Guest experience review
8. `8- Rarity Agency_github_ready.mp4` - Agency showcase
9. `9 - Jamburae BOAT_github_ready.mp4` - Boat experience
10. `10 - Real Estate Floripa_.mp4` - Florianópolis properties
11. `11 - Surf island_.mp4` - Surf island experience
12. `12 - Rarity Owner.mp4` - Owner interview
13. `13 - Real Estate Florianópolis.mp4` - Investment opportunities

## How to Add Videos:
1. Place your compressed video files in this directory
2. Ensure filenames match exactly (including spaces and special characters)
3. Run `git add videos/` to add them to Git LFS
4. Commit and push to GitHub

## Compression Settings (if using FFmpeg):
```bash
ffmpeg -i "original_video.mov" -c:v libx264 -crf 40 -preset slow -c:a aac -b:a 64k "compressed_video.mp4"
```

## Notes:
- All videos are tracked by Git LFS for efficient storage
- Thumbnails are stored in `/public/thumbnails/`
- Video gallery component automatically detects and displays these videos
