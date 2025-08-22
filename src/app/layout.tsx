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
  title: "Carolina de Abreu — Social Media Strategist",
  description:
    "Portfolio of Carolina de Abreu: Social Media Content Planner, Video Editor, Copywriting & Storytelling.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Carolina de Abreu — Social Media Strategist",
    description:
      "Social Media Content Planner, Video Editor, Copywriting & Storytelling Expert.",
    type: "website",
    url: "https://carolina.example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased font-[200]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
