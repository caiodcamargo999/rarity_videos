export interface R2Video {
  url: string;
  filename: string;
  title: string;
  size: number;
  uploadedAt: Date;
}

export class R2Service {
  private static instance: R2Service;
  
  private constructor() {
    // No need for endpoint/bucket since we're using direct public URLs
  }
  
  static getInstance(): R2Service {
    if (!R2Service.instance) {
      R2Service.instance = new R2Service();
    }
    return R2Service.instance;
  }

  async listVideos(): Promise<R2Video[]> {
    try {
      console.log("R2Service.listVideos() called");
      
      // Videos with actual filenames and direct Cloudflare R2 public development URLs
      const videoList = [
        {
          filename: "1 - Jamburae Surf.mp4",
          title: "Jamburae Surf",
          size: 65 * 1024 * 1024, // 65.43 MB
          uploadedAt: new Date()
        },
        {
          filename: "2 - Jamburae Surf.mp4",
          title: "Jamburae Surf", 
          size: 11 * 1024 * 1024, // 10.92 MB
          uploadedAt: new Date()
        },
        {
          filename: "3 - Jamburae - Owner part 1.mp4",
          title: "Jamburae - Owner part 1",
          size: 82 * 1024 * 1024, // 82.22 MB
          uploadedAt: new Date()
        },
        {
          filename: "4 - Jamburae - Onwer part 2.mp4",
          title: "Jamburae - Owner part 2",
          size: 82 * 1024 * 1024, // 82.13 MB
          uploadedAt: new Date()
        },
        {
          filename: "5 - Guest Review.mp4",
          title: "Guest Review",
          size: 64 * 1024 * 1024, // 63.87 MB
          uploadedAt: new Date()
        },
        {
          filename: "6- Rarity Agency.mp4",
          title: "Rarity Agency",
          size: 56 * 1024 * 1024, // 55.9 MB
          uploadedAt: new Date()
        },
        {
          filename: "7 - Jamburae BOAT.mp4",
          title: "Jamburae BOAT",
          size: 95 * 1024 * 1024, // 95.08 MB
          uploadedAt: new Date()
        },
        {
          filename: "8 - Surf Nias.mp4",
          title: "Surf Nias",
          size: 22 * 1024 * 1024, // 21.53 MB
          uploadedAt: new Date()
        },
        {
          filename: "9 - Rarity Owner.mp4",
          title: "Rarity Owner",
          size: 25 * 1024 * 1024, // 24.95 MB
          uploadedAt: new Date()
        }
      ];

      // Use the actual Cloudflare R2 public development URLs
      const r2PublicUrls = [
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/1%20-%20Jamburae%20Surf.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/2%20-%20Jamburae%20Surf.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/3%20-%20Jamburae%20-%20Owner%20part%201.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/4%20-%20Jamburae%20-%20Onwer%20part%202.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/5%20-%20Guest%20Review.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/6-%20Rarity%20Agency.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/7%20-%20Jamburae%20BOAT.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/8%20-%20Surf%20Nias.mp4",
        "https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/9%20-%20Rarity%20Owner.mp4"
      ];

      console.log("R2Service: videoList filenames:", videoList.map(v => v.filename));
      console.log("R2Service: r2PublicUrls:", r2PublicUrls);

      // Map videos to their corresponding R2 public URLs
      const result = videoList.map((video, index) => ({
        ...video,
        url: r2PublicUrls[index] || `https://pub-e576ba791df5410fa6889b10bedf4821.r2.dev/${encodeURIComponent(video.filename)}`
      })).sort((a, b) => this.extractOrderNumber(a.filename) - this.extractOrderNumber(b.filename));
      
      console.log("R2Service: final result URLs:", result.map(v => v.url));
      console.log("R2Service: final result filenames:", result.map(v => v.filename));
      
      return result;
      
    } catch (error) {
      console.error('Error listing videos from R2:', error);
      return [];
    }
  }

  async getVideoInfo(filename: string): Promise<R2Video | null> {
    try {
      const videos = await this.listVideos();
      return videos.find(video => video.filename === filename) || null;
    } catch (error) {
      console.error('Error getting video info from R2:', error);
      return null;
    }
  }

  private extractOrderNumber(filename: string): number {
    const match = filename.match(/^(\d+)/);
    return match ? parseInt(match[1], 10) : 999;
  }
}
