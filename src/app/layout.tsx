import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const interTight = Inter_Tight({
  variable: "--font-skinny",
  weight: ["200", "300", "400"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://carolina-de-abreu-portfolio.vercel.app'),
  title: {
    default: "Carolina de Abreu — Social Media Strategist & Content Creator",
    template: "%s | Carolina de Abreu Portfolio"
  },
  description: "Professional Social Media Strategist, Video Editor, Copywriter & Storyteller. Expert in content planning, video production, and brand storytelling for luxury brands, real estate, and hospitality industries.",
  keywords: [
    "social media strategist",
    "video editor",
    "copywriter",
    "content creator",
    "brand storytelling",
    "social media management",
    "video production",
    "content planning",
    "luxury brand marketing",
    "real estate marketing",
    "hospitality marketing",
    "surf school marketing",
    "Bali marketing",
    "Brazil marketing",
    "Indonesia marketing"
  ],
  authors: [{ name: "Carolina de Abreu" }],
  creator: "Carolina de Abreu",
  publisher: "Carolina de Abreu",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'pt': '/?lang=pt',
      'es': '/?lang=es',
      'ar': '/?lang=ar',
    },
  },
  icons: { 
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon_carolldeabreu.jpeg", sizes: "32x32", type: "image/jpeg" },
      { url: "/favicon_carolldeabreu.jpeg", sizes: "16x16", type: "image/jpeg" },
      { url: "/favicon_carolldeabreu.jpeg", sizes: "48x48", type: "image/jpeg" }
    ],
    apple: [
      { url: "/favicon_carolldeabreu.jpeg", sizes: "180x180", type: "image/jpeg" }
    ]
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://carolina-de-abreu-portfolio.vercel.app",
    siteName: "Carolina de Abreu Portfolio",
    title: "Carolina de Abreu — Social Media Strategist & Content Creator",
    description: "Professional Social Media Strategist, Video Editor, Copywriter & Storyteller. Expert in content planning, video production, and brand storytelling.",
    images: [
      {
        url: "/profile_picture_carolldeabreu.jpeg",
        width: 1200,
        height: 630,
        alt: "Carolina de Abreu - Social Media Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carolina de Abreu — Social Media Strategist & Content Creator",
    description: "Professional Social Media Strategist, Video Editor, Copywriter & Storyteller. Expert in content planning, video production, and brand storytelling.",
    images: ["/profile_picture_carolldeabreu.jpeg"],
    creator: "@carolina_de_abreu",
  },
  category: "Portfolio",
  classification: "Business",
  other: {
    "theme-color": "#1c1511",
    "msapplication-TileColor": "#1c1511",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Carolina Portfolio",
    "application-name": "Carolina Portfolio",
    "mobile-web-app-capable": "yes",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Primary favicon - ICO format for maximum compatibility */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        
        {/* Alternative favicon formats */}
        <link rel="icon" type="image/jpeg" href="/favicon_carolldeabreu.jpeg" />
        <link rel="icon" type="image/png" href="/favicon_carolldeabreu.jpeg" />
        
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/favicon_carolldeabreu.jpeg" />
        
        {/* Windows Tile Icon */}
        <meta name="msapplication-TileImage" content="/favicon_carolldeabreu.jpeg" />
        <meta name="msapplication-TileColor" content="#1c1511" />
        
        {/* Force favicon refresh */}
        <link rel="icon" href="/favicon.ico?v=2" />
      </head>
      <body className={`${interTight.variable} antialiased font-[200]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
