import type { Metadata } from "next";
import { Outfit } from "next/font/google"; // Using Outfit as BentonSans proxy
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { BookingProvider } from "@/context/booking-context";
import { Navbar } from "@/components/layout/navbar";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Rarity Agency | Vídeos que Convertem",
  description: "Especialistas em edição de vídeo de alta performance, VSLs e estratégias de conversão. Transforme visualizações em vendas.",
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
