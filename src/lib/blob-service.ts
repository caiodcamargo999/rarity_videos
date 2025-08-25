import { put, del, list, head } from '@vercel/blob';

export interface BlobVideo {
  url: string;
  filename: string;
  title: string;
  size: number;
  uploadedAt: Date;
}

export class BlobService {
  private static instance: BlobService;
  
  private constructor() {}
  
  static getInstance(): BlobService {
    if (!BlobService.instance) {
      BlobService.instance = new BlobService();
    }
    return BlobService.instance;
  }

  async uploadVideo(fileBuffer: Buffer, filename: string): Promise<BlobVideo> {
    try {
      const blob = await put(filename, fileBuffer, {
        access: 'public',
        contentType: this.getContentType(filename),
        addRandomSuffix: false,
        token: process.env.BLOB_READ_WRITE_TOKEN,
        // Overwrite if it already exists
        allowOverwrite: true,
      } as any);

      return {
        url: blob.url,
        filename: blob.pathname,
        title: this.cleanTitle(filename),
        size: blob.size,
        uploadedAt: new Date(blob.uploadedAt),
      };
    } catch (error) {
      console.error('Error uploading video to blob:', error);
      throw new Error(`Failed to upload video: ${error}`);
    }
  }

  async listVideos(): Promise<BlobVideo[]> {
    try {
      const { blobs } = await list({ token: process.env.BLOB_READ_WRITE_TOKEN } as any);
      
      return blobs
        .filter(blob => this.isVideoFile(blob.pathname))
        .map(blob => ({
          url: blob.url,
          filename: blob.pathname,
          title: this.cleanTitle(blob.pathname),
          size: blob.size,
          uploadedAt: new Date(blob.uploadedAt),
        }))
        .sort((a, b) => this.extractOrderNumber(a.filename) - this.extractOrderNumber(b.filename));
    } catch (error) {
      console.error('Error listing videos from blob:', error);
      return [];
    }
  }

  async deleteVideo(filename: string): Promise<void> {
    try {
      await del(filename, { token: process.env.BLOB_READ_WRITE_TOKEN } as any);
    } catch (error) {
      console.error('Error deleting video from blob:', error);
      throw new Error(`Failed to delete video: ${error}`);
    }
  }

  async getVideoInfo(filename: string): Promise<BlobVideo | null> {
    try {
      const blob = await head(filename, { token: process.env.BLOB_READ_WRITE_TOKEN } as any);
      if (!blob) return null;

      return {
        url: blob.url,
        filename: blob.pathname,
        title: this.cleanTitle(blob.pathname),
        size: blob.size,
        uploadedAt: new Date(blob.uploadedAt),
      };
    } catch (error) {
      console.error('Error getting video info from blob:', error);
      return null;
    }
  }

  private isVideoFile(filename: string): boolean {
    return /\.(mp4|webm|ogg|mov)$/i.test(filename);
  }

  private getContentType(filename: string): string {
    const ext = filename.split('.').pop()?.toLowerCase();
    switch (ext) {
      case 'webm': return 'video/webm';
      case 'ogg': return 'video/ogg';
      case 'mov': return 'video/quicktime';
      case 'mp4':
      default: return 'video/mp4';
    }
  }

  private cleanTitle(filename: string): string {
    return filename
      .replace(/\.(mp4|webm|ogg|mov)$/i, '')
      .replace(/_/g, ' ')
      .replace(/-/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
  }

  private extractOrderNumber(filename: string): number {
    const match = filename.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 999;
  }
}
