# 🏗️ RARITY AGENCY - ARQUITETURA DO PROJETO

## 📁 ESTRUTURA DE PASTAS COMPLETA

```
rarity_videos_daniel_e_caio/
│
├── src/
│   ├── app/
│   │   ├── rarity/                    # 🎯 Landing Page Principal
│   │   │   ├── page.tsx              # Página principal da Rarity
│   │   │   └── layout.tsx            # Layout específico da Rarity
│   │   │
│   │   ├── layout.tsx                # Root layout
│   │   ├── page.tsx                  # Redirect para /rarity
│   │   └── globals.css               # Estilos globais
│   │
│   ├── components/
│   │   ├── rarity/                   # 🎬 Componentes da Rarity Agency
│   │   │   ├── sections/
│   │   │   │   ├── hero-section.tsx
│   │   │   │   ├── authority-section.tsx
│   │   │   │   ├── video-showcase.tsx
│   │   │   │   ├── benefits-section.tsx
│   │   │   │   ├── testimonials-section.tsx
│   │   │   │   ├── offer-section.tsx
│   │   │   │   ├── faq-section.tsx
│   │   │   │   └── final-cta-section.tsx
│   │   │   │
│   │   │   ├── ui/
│   │   │   │   ├── video-card.tsx
│   │   │   │   ├── video-modal.tsx
│   │   │   │   ├── testimonial-card.tsx
│   │   │   │   ├── benefit-card.tsx
│   │   │   │   ├── stat-card.tsx
│   │   │   │   └── cta-button.tsx
│   │   │   │
│   │   │   └── animations/
│   │   │       ├── floating-shapes.tsx
│   │   │       ├── gradient-background.tsx
│   │   │       ├── scroll-reveal.tsx
│   │   │       └── parallax-container.tsx
│   │   │
│   │   └── ui/                       # 🎨 Componentes UI Base (Shadcn)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── accordion.tsx
│   │       ├── carousel.tsx
│   │       ├── modal.tsx
│   │       └── badge.tsx
│   │
│   ├── lib/
│   │   ├── rarity/
│   │   │   ├── theme.ts              # Tokens de design da Rarity
│   │   │   ├── animations.ts         # Configurações Framer Motion
│   │   │   ├── constants.ts          # Constantes (textos, URLs)
│   │   │   └── utils.ts              # Funções utilitárias
│   │   │
│   │   └── utils.ts                  # Utils gerais
│   │
│   └── types/
│       └── rarity.ts                 # TypeScript types
│
├── public/
│   └── rarity/
│       ├── videos/                   # Vídeos da Rarity
│       ├── images/                   # Imagens e assets
│       │   ├── logos/
│       │   ├── clients/
│       │   └── backgrounds/
│       └── fonts/                    # BentonSans fonts
│           ├── BentonSans-Thin.woff2
│           ├── BentonSans-Regular.woff2
│           └── BentonSans-Bold.woff2
│
├── tailwind.config.ts                # Configuração Tailwind + Tokens
├── next.config.ts                    # Configuração Next.js
├── tsconfig.json                     # TypeScript config
└── package.json                      # Dependencies
```

---

## 🎨 DESIGN TOKENS (Tailwind Config)

### tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Rarity Agency Color Palette
        rarity: {
          // Purple Shades (Primary)
          purple: {
            50: "#f5f3ff",
            100: "#ede9fe",
            200: "#ddd6fe",
            300: "#c4b5fd",
            400: "#a78bfa",
            500: "#8b5cf6",  // Primary Purple
            600: "#7c3aed",
            700: "#6d28d9",
            800: "#5b21b6",
            900: "#4c1d95",
          },
          // Blue Shades (Accent)
          blue: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",  // Accent Blue
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
          },
          // Gray Shades (Neutral)
          gray: {
            50: "#f9fafb",
            100: "#f3f4f6",
            200: "#e5e7eb",
            300: "#d1d5db",
            400: "#9ca3af",
            500: "#6b7280",
            600: "#4b5563",
            700: "#374151",
            800: "#1f2937",
            900: "#111827",
          },
        },
        
        // Gradient Colors
        gradient: {
          start: "#8b5cf6",  // Purple
          middle: "#6366f1", // Indigo
          end: "#3b82f6",    // Blue
        },
      },
      
      fontFamily: {
        benton: ["BentonSans", "Inter", "system-ui", "sans-serif"],
      },
      
      fontSize: {
        // Custom Font Sizes
        "hero-mobile": ["3rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "hero-tablet": ["5rem", { lineHeight: "1", letterSpacing: "-0.02em" }],
        "hero-desktop": ["8rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
        "hero-xl": ["10rem", { lineHeight: "0.9", letterSpacing: "-0.03em" }],
      },
      
      spacing: {
        // Custom Spacing
        "section": "6rem",
        "section-lg": "8rem",
        "section-xl": "10rem",
      },
      
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      
      boxShadow: {
        "glow-purple": "0 0 40px rgba(139, 92, 246, 0.4)",
        "glow-blue": "0 0 40px rgba(59, 130, 246, 0.4)",
        "card-hover": "0 20px 60px rgba(0, 0, 0, 0.3)",
      },
      
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
        "gradient-cta": "linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%)",
      },
      
      animation: {
        // Custom Animations
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-in-up": "fadeInUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "slide-in-right": "slideInRight 0.6s ease-out forwards",
        "scale-in": "scaleIn 0.4s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 3s ease infinite",
      },
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(40px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)" },
          "50%": { boxShadow: "0 0 40px rgba(139, 92, 246, 0.8)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
```

---

## 🎯 THEME CONFIGURATION

### src/lib/rarity/theme.ts
```typescript
/**
 * Rarity Agency Design System
 * Tokens de design, cores, tipografia e espaçamentos
 */

export const rarityTheme = {
  colors: {
    primary: {
      purple: "#8b5cf6",
      purpleLight: "#a78bfa",
      purpleDark: "#7c3aed",
    },
    accent: {
      blue: "#3b82f6",
      blueLight: "#60a5fa",
      blueDark: "#2563eb",
    },
    neutral: {
      gray50: "#f9fafb",
      gray100: "#f3f4f6",
      gray200: "#e5e7eb",
      gray300: "#d1d5db",
      gray400: "#9ca3af",
      gray500: "#6b7280",
      gray600: "#4b5563",
      gray700: "#374151",
      gray800: "#1f2937",
      gray900: "#111827",
    },
    gradients: {
      hero: "linear-gradient(135deg, #8b5cf6 0%, #6366f1 50%, #3b82f6 100%)",
      cta: "linear-gradient(90deg, #8b5cf6 0%, #a78bfa 100%)",
      overlay: "linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.8) 100%)",
    },
  },
  
  typography: {
    fontFamily: {
      primary: "BentonSans, Inter, system-ui, sans-serif",
    },
    fontWeight: {
      thin: 100,
      light: 300,
      regular: 400,
      bold: 700,
    },
    fontSize: {
      hero: {
        mobile: "3rem",
        tablet: "5rem",
        desktop: "8rem",
        xl: "10rem",
      },
      h1: "3rem",
      h2: "2.5rem",
      h3: "2rem",
      h4: "1.5rem",
      body: "1rem",
      small: "0.875rem",
    },
    lineHeight: {
      tight: 0.9,
      normal: 1.4,
      relaxed: 1.6,
    },
  },
  
  spacing: {
    section: {
      mobile: "4rem",
      tablet: "6rem",
      desktop: "8rem",
      xl: "10rem",
    },
    card: {
      padding: "1.5rem",
      gap: "1rem",
    },
  },
  
  borderRadius: {
    sm: "0.5rem",
    md: "1rem",
    lg: "1.5rem",
    xl: "2rem",
  },
  
  shadows: {
    card: "0 4px 20px rgba(0, 0, 0, 0.1)",
    cardHover: "0 20px 60px rgba(0, 0, 0, 0.3)",
    glowPurple: "0 0 40px rgba(139, 92, 246, 0.4)",
    glowBlue: "0 0 40px rgba(59, 130, 246, 0.4)",
  },
  
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
} as const;

export type RarityTheme = typeof rarityTheme;
```

---

## 🎬 ANIMATION CONFIGURATION

### src/lib/rarity/animations.ts
```typescript
import { Variants } from "framer-motion";

/**
 * Framer Motion Animation Variants
 * Configurações reutilizáveis para animações
 */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.6 }
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

export const hoverLift = {
  rest: { y: 0, scale: 1 },
  hover: { 
    y: -8, 
    scale: 1.02,
    transition: { duration: 0.3, ease: "easeOut" }
  },
};

export const pulseGlow = {
  animate: {
    boxShadow: [
      "0 0 20px rgba(139, 92, 246, 0.4)",
      "0 0 40px rgba(139, 92, 246, 0.8)",
      "0 0 20px rgba(139, 92, 246, 0.4)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const floatingAnimation = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export const gradientShift = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};
```

---

## 📦 CONSTANTS

### src/lib/rarity/constants.ts
```typescript
/**
 * Rarity Agency Constants
 * URLs, textos fixos, configurações
 */

export const RARITY_CONSTANTS = {
  // Contact Information
  contact: {
    whatsapp: "+5548991660364",
    whatsappLink: "https://wa.me/5548991660364",
    email: "contato@rarityagency.com",
    instagram: "@rarityagency",
    instagramLink: "https://instagram.com/rarityagency",
  },
  
  // CTA Links
  cta: {
    consultation: "https://calendly.com/rarityagency/consultoria",
    whatsappMessage: "Olá! Gostaria de saber mais sobre os serviços da Rarity Agency.",
  },
  
  // Stats
  stats: {
    videosProduced: "500+",
    clients: "50+",
    views: "10M+",
    satisfaction: "95%",
  },
  
  // Video Categories
  videoCategories: [
    { id: "all", label: "Todos" },
    { id: "storymaker", label: "Storymaker" },
    { id: "videomaker", label: "Videomaker" },
    { id: "edited", label: "Edição Premium" },
    { id: "reels", label: "Reels" },
  ],
  
  // Pricing
  pricing: {
    startingPrice: 1997,
    installments: 3,
    installmentPrice: 699,
  },
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: "João Silva",
      role: "CEO",
      company: "TechStart Innovations",
      avatar: "/rarity/images/testimonials/joao.jpg",
      rating: 5,
      text: "A Rarity transformou completamente nossa estratégia de conteúdo. Os vídeos que criaram geraram 300% mais engajamento em apenas 2 meses. O ROI foi impressionante!",
    },
    // ... mais depoimentos
  ],
  
  // FAQ
  faq: [
    {
      question: "Quanto tempo leva para produzir um vídeo?",
      answer: "Nosso prazo padrão é de 7 dias úteis do briefing à entrega final...",
    },
    // ... mais perguntas
  ],
} as const;
```

---

## 🔧 TYPESCRIPT TYPES

### src/types/rarity.ts
```typescript
/**
 * TypeScript Types for Rarity Agency
 */

export interface VideoItem {
  id: string;
  title: string;
  subtitle?: string;
  category: VideoCategory;
  client: string;
  thumbnailUrl: string;
  videoUrl: string;
  duration?: string;
  likes?: number;
  views?: number;
}

export type VideoCategory = 
  | "all" 
  | "storymaker" 
  | "videomaker" 
  | "edited" 
  | "reels";

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface Benefit {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface StatCard {
  value: string;
  label: string;
  description?: string;
}

export interface CTAButton {
  text: string;
  href: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}
```

---

## 📱 RESPONSIVE BREAKPOINTS

```typescript
// Mobile First Approach
const breakpoints = {
  // Mobile: 320px - 639px (base styles)
  sm: "640px",   // Small tablets
  md: "768px",   // Tablets
  lg: "1024px",  // Laptops
  xl: "1280px",  // Desktops
  "2xl": "1536px", // Large desktops
};

// Usage Example:
// Mobile: 1 column
// sm: 2 columns
// md: 2 columns
// lg: 3 columns
// xl: 4 columns
```

---

## 🚀 PERFORMANCE OPTIMIZATIONS

### Next.js Configuration
```typescript
// next.config.ts
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  experimental: {
    optimizeCss: true,
  },
  
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};
```

### Font Loading Strategy
```typescript
// app/layout.tsx
import localFont from "next/font/local";

const bentonSans = localFont({
  src: [
    {
      path: "../public/rarity/fonts/BentonSans-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/rarity/fonts/BentonSans-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/rarity/fonts/BentonSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-benton",
  display: "swap",
});
```

---

## 📊 COMPONENT ARCHITECTURE

### Component Hierarchy
```
RarityLandingPage
├── HeroSection
│   ├── GradientBackground
│   ├── FloatingShapes
│   ├── HeroContent
│   │   ├── Headline
│   │   ├── Subheadline
│   │   └── CTAButton
│   └── VideoCarousel
│
├── AuthoritySection
│   ├── StoryContent
│   └── StatsGrid
│       └── StatCard (x4)
│
├── VideoShowcase
│   ├── FilterTabs
│   ├── VideoGrid
│   │   └── VideoCard (multiple)
│   └── VideoModal
│
├── BenefitsSection
│   └── BenefitCard (x6)
│
├── TestimonialsSection
│   └── TestimonialCarousel
│       └── TestimonialCard (multiple)
│
├── OfferSection
│   ├── OfferContent
│   ├── InclusionsList
│   └── CTAButton
│
├── FAQSection
│   └── Accordion (multiple)
│
└── FinalCTASection
    ├── CTAContent
    └── ContactOptions
```

---

**Status:** Arquitetura completa definida e pronta para implementação 🏗️
