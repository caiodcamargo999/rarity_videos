"use client";

import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Header } from "@/components/header";

// Dynamic imports to prevent hydration issues (all use client-side only features)
const Hero = dynamic(() => import("@/components/hero").then(mod => ({ default: mod.Hero })), {
  ssr: false,
  loading: () => null
});

const About = dynamic(() => import("@/components/about").then(mod => ({ default: mod.About })), {
  ssr: false,
  loading: () => null
});

const Videos = dynamic(() => import("@/components/videos").then(mod => ({ default: mod.Videos })), {
  ssr: false,
  loading: () => null
});

const Reels = dynamic(() => import("@/components/reels").then(mod => ({ default: mod.Reels })), {
  ssr: false,
  loading: () => null
});

const Contact = dynamic(() => import("@/components/contact").then(mod => ({ default: mod.Contact })), {
  ssr: false,
  loading: () => null
});

// Dynamic import for FloatingShapes to prevent hydration issues
const FloatingShapes = dynamic(() => import("@/components/floating-shapes").then(mod => ({ default: mod.FloatingShapes })), {
  ssr: false,
  loading: () => null
});

// Dynamic import for ParallaxSection to prevent hydration issues
const ParallaxSection = dynamic(() => import("@/components/parallax-section").then(mod => ({ default: mod.ParallaxSection })), {
  ssr: false,
  loading: () => null
});

export default function SocialMediaPage() {
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
