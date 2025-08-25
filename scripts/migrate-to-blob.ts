import { BlobService } from '../src/lib/blob-service';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: '.env.local' });

async function migrateVideos() {
  const blobService = BlobService.getInstance();
  const videosDir = join(process.cwd(), 'public', 'videos');
  const forceOverwrite = process.env.FORCE_OVERWRITE === 'true';
  
  try {
    console.log('Starting video migration to Vercel Blob storage...');
    console.log(`Looking for videos in: ${videosDir}`);
    
    const files = readdirSync(videosDir);
    const videoFiles = files.filter(f => /\.(mp4|webm|ogg|mov)$/i.test(f));
    
    console.log(`Found ${videoFiles.length} videos to migrate`);

    // Simple sequential upload with skip-if-exists to avoid re-uploads
    for (const filename of videoFiles) {
      const filePath = join(videosDir, filename);
      const { size } = statSync(filePath);
      const sizeMb = (size / 1024 / 1024).toFixed(2);

      // Warn on very large files
      if (size > 300 * 1024 * 1024) {
        console.log(`⚠️  ${filename} is large (${sizeMb} MB). Upload may take a while depending on your connection.`);
      }

      console.log(`\nProcessing ${filename} (${sizeMb} MB)...`);

      try {
        if (!forceOverwrite) {
          const existing = await blobService.getVideoInfo(filename);
          if (existing) {
            console.log(`⏭️  Skipping ${filename} (already exists at ${existing.url})`);
            continue;
          }
        }

        console.log(`⬆️  Uploading ${filename}...`);
        const videoBuffer = readFileSync(filePath);
        const video = await blobService.uploadVideo(videoBuffer, filename);
        console.log(`✅ Uploaded ${filename}`);
        console.log(`   URL: ${video.url}`);
        console.log(`   Size: ${(video.size / 1024 / 1024).toFixed(2)} MB`);
      } catch (error) {
        console.error(`❌ Failed to migrate ${filename}:`, error);
      }
    }
    
    console.log('\n🎉 Migration completed!');
    console.log('\nNext steps:');
    console.log('1. Run `npm run dev` and verify the gallery loads from blob URLs');
    console.log('2. Set FORCE_OVERWRITE=true in .env.local if you need to re-upload any file');
    console.log('3. After verification, consider removing large local videos to save space');
    
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

// Run migration
migrateVideos().catch(console.error);
