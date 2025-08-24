// SEO Copywriting Guide for Carolina de Abreu Portfolio
// Optimized for search engines and user engagement

export const SEOCopy = {
  // Hero Section - Primary Keywords
  hero: {
    title: "Carolina de Abreu - Social Media Strategist & Content Creator",
    subtitle: "Professional Video Editor, Copywriter & Brand Storyteller",
    description: "Transform your brand with strategic social media content, compelling video storytelling, and engaging copywriting. Expert in luxury brands, real estate, and hospitality marketing across Brazil and Indonesia.",
    cta: "Explore My Portfolio",
    keywords: ["social media strategist", "video editor", "copywriter", "brand storyteller", "content creator"]
  },

  // About Section - Professional Background
  about: {
    title: "About Carolina de Abreu",
    subtitle: "Your Strategic Partner in Digital Content Creation",
    description: "With over 5 years of experience in social media strategy and content creation, I specialize in helping luxury brands, real estate companies, and hospitality businesses connect with their audiences through compelling storytelling and engaging visual content.",
    expertise: [
      "Social Media Strategy & Management",
      "Video Content Production & Editing",
      "Copywriting & Brand Storytelling",
      "Luxury Brand Marketing",
      "Real Estate Marketing",
      "Hospitality & Tourism Marketing",
      "Surf School & Adventure Marketing"
    ],
    locations: {
      primary: "Bali, Indonesia & Florianópolis, Brazil",
      description: "Serving clients globally with expertise in emerging markets and luxury destinations"
    }
  },

  // Portfolio Section - Video Showcase
  portfolio: {
    title: "Instagram Reels and Native Video Ads Portfolio",
    subtitle: "Professional Video Content That Drives Engagement",
    description: "Discover 13+ portfolio videos showcasing my expertise in social media content creation, video editing, and brand storytelling. From luxury real estate showcases to surf school adventures, each video demonstrates strategic content planning and professional production quality.",
    keywords: ["video portfolio", "social media content", "brand videos", "marketing videos", "content creation examples"],
    categories: {
      jamburae: {
        title: "Jamburae Surf School Marketing",
        description: "Professional surf coaching content and island adventure videos showcasing the beauty of Nias Island, Indonesia",
        keywords: ["surf school marketing", "surf videos", "Nias Island", "Indonesia tourism", "adventure content"]
      },
      realEstate: {
        title: "Real Estate Marketing Videos",
        description: "Premium property showcases and investment opportunity videos for Smart Imob in Florianópolis, Brazil",
        keywords: ["real estate marketing", "property videos", "Brazil real estate", "investment videos", "luxury properties"]
      },
      rarity: {
        title: "Rarity Agency Brand Content",
        description: "Innovative marketing solutions and brand storytelling for luxury brands and agencies",
        keywords: ["luxury brand marketing", "agency videos", "brand storytelling", "marketing solutions", "creative content"]
      }
    }
  },

  // Services Section - What I Offer
  services: {
    title: "Professional Services",
    subtitle: "Comprehensive Digital Marketing Solutions",
    description: "From strategic content planning to video production and copywriting, I provide end-to-end digital marketing solutions that help brands connect with their audiences and achieve their marketing goals.",
    offerings: [
      {
        title: "Social Media Strategy",
        description: "Comprehensive social media planning, content calendars, and audience engagement strategies",
        keywords: ["social media strategy", "content planning", "audience engagement", "social media management"]
      },
      {
        title: "Video Content Production",
        description: "Professional video editing, Instagram Reels creation, and brand video production",
        keywords: ["video production", "video editing", "Instagram Reels", "brand videos", "content creation"]
      },
      {
        title: "Copywriting & Storytelling",
        description: "Compelling copy that tells your brand story and drives customer engagement",
        keywords: ["copywriting", "brand storytelling", "content writing", "marketing copy", "brand messaging"]
      },
      {
        title: "Brand Marketing",
        description: "Strategic marketing solutions for luxury brands, real estate, and hospitality industries",
        keywords: ["brand marketing", "luxury marketing", "real estate marketing", "hospitality marketing", "strategic marketing"]
      }
    ]
  },

  // Testimonials & Social Proof
  testimonials: {
    title: "Client Success Stories",
    subtitle: "Real Results from Real Clients",
    description: "See how my strategic content creation and video production have helped clients increase engagement, build brand awareness, and achieve their marketing objectives.",
    keywords: ["client testimonials", "success stories", "marketing results", "client feedback", "case studies"]
  },

  // Contact Section - Call to Action
  contact: {
    title: "Ready to Transform Your Brand?",
    subtitle: "Let's Create Compelling Content Together",
    description: "Whether you're looking to enhance your social media presence, create engaging video content, or develop compelling brand messaging, I'm here to help you achieve your marketing goals.",
    cta: "Start Your Project",
    keywords: ["contact", "get quote", "start project", "marketing consultation", "content creation services"]
  },

  // SEO Meta Descriptions
  metaDescriptions: {
    home: "Professional Social Media Strategist, Video Editor, Copywriter & Storyteller. Expert in content planning, video production, and brand storytelling for luxury brands, real estate, and hospitality industries.",
    portfolio: "Explore Carolina de Abreu's professional portfolio showcasing social media strategy, video content creation, and brand storytelling. View 13+ portfolio videos from luxury brands, real estate, and hospitality industries.",
    about: "Learn about Carolina de Abreu's professional journey as a Social Media Strategist, Video Editor, and Copywriter. Discover her expertise in luxury brands, real estate, and hospitality marketing across Brazil and Indonesia.",
    services: "Comprehensive digital marketing services including social media strategy, video content production, copywriting, and brand storytelling. Specialized in luxury brands, real estate, and hospitality marketing."
  },

  // Long-tail Keywords for Content
  longTailKeywords: [
    "social media strategist Bali Indonesia",
    "video editor for luxury brands",
    "copywriter for real estate marketing",
    "brand storyteller for hospitality industry",
    "social media content creator Brazil",
    "Instagram Reels production services",
    "video marketing for real estate",
    "content strategy for surf schools",
    "luxury brand video production",
    "hospitality marketing content creation",
    "Brazil real estate video marketing",
    "Indonesia tourism content creation",
    "surf school marketing videos",
    "brand storytelling for agencies",
    "social media management for luxury brands"
  ],

  // Content Optimization Tips
  optimizationTips: {
    headings: "Use H1, H2, H3 hierarchy with target keywords",
    content: "Include primary and long-tail keywords naturally throughout content",
    images: "Optimize alt text with descriptive keywords",
    videos: "Use descriptive titles and descriptions with target keywords",
    internal: "Link between related content for better SEO structure",
    external: "Build quality backlinks from relevant industry websites"
  }
};

// SEO-friendly content templates
export const ContentTemplates = {
  // Video Description Template
  videoDescription: (title: string, client: string, description: string) => {
    return `${title} - Professional ${client} marketing video. ${description}. Created by Carolina de Abreu, expert social media strategist and video content creator. Perfect for luxury brands, real estate marketing, and hospitality content.`;
  },

  // Portfolio Item Template
  portfolioItem: (title: string, category: string, description: string) => {
    return `${title} - ${category} content showcase. ${description}. Professional video production and social media content creation by Carolina de Abreu. Expert in brand storytelling and strategic content planning.`;
  },

  // Service Description Template
  serviceDescription: (service: string, industry: string, benefit: string) => {
    return `${service} services for ${industry}. ${benefit}. Professional content creation and strategic marketing solutions by Carolina de Abreu. Transform your brand with compelling storytelling and engaging visual content.`;
  }
};

// Local SEO Content
export const LocalSEO = {
  bali: {
    title: "Social Media Strategist in Bali, Indonesia",
    description: "Professional social media strategy and content creation services in Bali, Indonesia. Expert in tourism marketing, surf school content, and luxury brand storytelling.",
    keywords: ["Bali social media strategist", "Indonesia content creator", "Bali marketing services", "tourism content creation"]
  },
  brazil: {
    title: "Digital Marketing Expert in Florianópolis, Brazil",
    description: "Professional digital marketing and content creation services in Florianópolis, Brazil. Specialized in real estate marketing, luxury brand content, and strategic social media management.",
    keywords: ["Florianópolis digital marketing", "Brazil content creator", "Brazil real estate marketing", "luxury brand marketing Brazil"]
  }
};
