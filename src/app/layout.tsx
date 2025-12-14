import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BookingProvider } from "@/context/booking-context";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://rarityagency.com.br'),
  title: {
    default: "Rarity Agency | Vídeos que Convertem",
    template: "%s | Rarity Agency"
  },
  description: "Especialistas em edição de vídeo de alta performance, VSLs e estratégias de conversão. Somos a agência que transforma visualizações em vendas.",
  keywords: [
    "Edição de vídeo",
    "VSL",
    "Vídeos de vendas",
    "Marketing Digital",
    "Rarity Agency",
    "Produção audiovisual",
    "Vídeos para anúncios",
    "Alta conversão",
    "Agência de vídeo"
  ],
  authors: [{ name: "Rarity Agency", url: "https://rarityagency.com.br" }],
  creator: "Rarity Agency",
  publisher: "Rarity Agency",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://rarityagency.com.br",
    title: "Rarity Agency | Vídeos que Convertem",
    description: "Transforme visualizações em vendas com nossa metodologia proprietária de edição de vídeo de alta performance.",
    siteName: "Rarity Agency",
    images: [
      {
        url: "/marketing_machine_mockup.png",
        width: 1200,
        height: 630,
        alt: "Rarity Videos Marketing Machine",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rarity Agency | Vídeos que Convertem",
    description: "Especialistas em VSLs e vídeos de alta performance.",
    images: ["/marketing_machine_mockup.png"],
    creator: "@rarityagency",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://rarityagency.com.br",
  },
  verification: {
    google: "s4Hp2KB7S8cnXuUvw3-oBAXhTf-8twGOjvrYsuHgG5s",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${outfit.variable} font-sans antialiased bg-background text-foreground selection:bg-rarity-pink/30 selection:text-white`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Rarity Agency",
              "url": "https://rarityagency.com.br",
              "logo": "https://rarityagency.com.br/logo/logo_rarity_branco_sem_fundo_zoom_in.png",
              "image": "https://rarityagency.com.br/marketing_machine_mockup.png",
              "description": "Agência especializada em edição de vídeo de alta performance e VSLs.",
              "sameAs": [
                "https://www.instagram.com/rarity.agency/",
                "https://www.tiktok.com/@rarity.agency?lang=pt-BR"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "BR"
              },
            })
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <BookingProvider>
            {children}
          </BookingProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
