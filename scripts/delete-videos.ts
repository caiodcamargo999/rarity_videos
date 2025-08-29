import { BlobService } from '../src/lib/blob-service';
import { config } from 'dotenv';

// Load environment variables from .env.local
config({ path: '.env.local' });

async function deleteVideos() {
  const blobService = BlobService.getInstance();
  
  // Videos to delete (matching the filenames in blob storage)
  const videosToDelete = [
    '2 - Fun In Nias.mp4',
    '3 - Real Estate.mp4',
    '10 - Smart Imob.mp4',
    '13 - Smart Imob.mp4'
  ];
  
  try {
    console.log('Starting video deletion from Vercel Blob storage...');
    console.log(`Videos to delete: ${videosToDelete.join(', ')}`);
    
    for (const filename of videosToDelete) {
      console.log(`\n🗑️  Deleting ${filename}...`);
      
      try {
        await blobService.deleteVideo(filename);
        console.log(`✅ Successfully deleted ${filename}`);
      } catch (error) {
        console.error(`❌ Failed to delete ${filename}:`, error);
      }
    }
    
    console.log('\n🎉 Video deletion completed!');
    console.log('\nNext steps:');
    console.log('1. Run `npm run dev` and verify only 9 videos are displayed');
    console.log('2. Check that videos 2, 3, 10, and 13 are no longer visible');
    
  } catch (error) {
    console.error('Deletion failed:', error);
  }
}

// Run deletion
deleteVideos().catch(console.error);
