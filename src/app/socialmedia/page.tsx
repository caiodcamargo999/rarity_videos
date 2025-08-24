"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { VideoGallery } from "@/components/video-gallery";
import { Contact } from "@/components/contact";
import dynamic from 'next/dynamic';

const FloatingShapes = dynamic(
  () => import('@/components/floating-shapes').then(mod => mod.FloatingShapes),
  { ssr: false }
);

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Enhanced Background with Symbol-based Design and Glassmorphism */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1c1511] via-[#2a211c] to-[#1c1511] opacity-100" />
      
      {/* Enhanced Glassmorphism Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1c1511]/90 via-[#2a211c]/70 to-[#1c1511]/90 backdrop-blur-[2px]" />
      <div className="fixed inset-0 bg-gradient-to-br from-[#1c1511]/60 via-[#2a211c]/40 to-[#1c1511]/60 backdrop-blur-[1px]" />
      
      {/* Floating Shapes Background */}
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header with Language Switcher */}
        <Header />
        
        {/* 1. HERO SECTION - Most Important Info */}
        <Hero />
        
        {/* 2. ABOUT SECTION - Professional Background */}
        <About />
        
        {/* 3. VIDEO GALLERY SECTION - Instagram Reels and Native Video Ads */}
        <VideoGallery />
        
        {/* 4. CONTACT SECTION - Call to Action */}
        <Contact />
      </div>
    </div>
  );
}
