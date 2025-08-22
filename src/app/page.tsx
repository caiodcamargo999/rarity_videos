"use client";

import { Suspense } from "react";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Videos } from "@/components/videos";
import { Reels } from "@/components/reels";
import { Contact } from "@/components/contact";
import { FloatingShapes } from "@/components/floating-shapes";
import { ParallaxSection } from "@/components/parallax-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#1c1511] via-[#2a211c] to-[#1c1511] opacity-100" />
      
      {/* Floating Shapes Background */}
      <FloatingShapes />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <Header />
        
        {/* 1. HERO SECTION - Most Important Info */}
        <Suspense fallback={<div>Loading...</div>}>
          <Hero />
        </Suspense>
        
        {/* 2. ABOUT SECTION - Professional Background */}
        <ParallaxSection speed={0.5}>
          <div className="mt-16 lg:mt-20">
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          </div>
        </ParallaxSection>
        
        {/* 3. VIDEOS SECTION - Uploaded Videos (Primary Content) */}
        <ParallaxSection speed={0.7}>
          <div className="mt-16 lg:mt-20">
            <Suspense fallback={<div>Loading...</div>}>
              <Videos />
            </Suspense>
          </div>
        </ParallaxSection>
        
        {/* 4. INSTAGRAM REELS SECTION - Social Media Showcase */}
        <ParallaxSection speed={0.8}>
          <div className="mt-16 lg:mt-20">
            <Suspense fallback={<div>Loading...</div>}>
              <Reels />
            </Suspense>
          </div>
        </ParallaxSection>
        
        {/* 5. CONTACT SECTION - Call to Action */}
        <ParallaxSection speed={0.4}>
          <div className="mt-16 lg:mt-20">
            <Suspense fallback={<div>Loading...</div>}>
              <Contact />
            </Suspense>
          </div>
        </ParallaxSection>
      </div>
    </div>
  );
}
