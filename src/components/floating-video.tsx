"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";

interface FloatingVideoProps {
  videoSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}

export function FloatingVideo({ 
  videoSrc = "/video.mp4", 
  className = "",
  width = 400,
  height = 300
}: FloatingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });
  
  // Motion values for drag
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  // Transform for smooth drag
  const dragX = useTransform(x, [-100, 100], [-10, 10]);
  const dragY = useTransform(y, [-100, 100], [-10, 10]);

  // Get window dimensions safely
  useEffect(() => {
    const updateDimensions = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const handleDragEnd = (event: any, info: PanInfo) => {
    // Optional: Add boundaries or snap behavior
    const { offset } = info;
    x.set(offset.x);
    y.set(offset.y);
  };

  const handleVideoLoad = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  };

  // Don't render until we have window dimensions
  if (windowDimensions.width === 0) {
    return null;
  }

  return (
    <motion.div
      ref={containerRef}
      className={`floating-video-container relative ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
        zIndex: 50,
        x: dragX,
        y: dragY,
      }}
      drag
      dragMomentum={false}
      dragElastic={0.1}
      dragConstraints={{
        left: -windowDimensions.width / 2 + width / 2,
        right: windowDimensions.width / 2 - width / 2,
        top: -windowDimensions.height / 2 + height / 2,
        bottom: windowDimensions.height / 2 - height / 2,
      }}
      onDragEnd={handleDragEnd}
      whileHover={{ 
        scale: 1.05,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Enhanced Neon Glow Border Effect - Inspired by Roobinium.io */}
      <div className="absolute inset-0 rounded-2xl p-1">
        {/* Primary glow border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-80 animate-pulse"></div>
        
        {/* Secondary glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-300/60 via-orange-400/40 to-amber-500/60 blur-sm"></div>
        
        {/* Inner glow ring */}
        <div className="absolute inset-1 rounded-2xl bg-gradient-to-r from-amber-200/30 via-orange-300/20 to-amber-400/30 blur-md"></div>
      </div>
      
      {/* Main Container with Glass Effect */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden bg-black/80 backdrop-blur-sm border border-amber-400/30">
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoad}
          style={{
            filter: "brightness(1.1) contrast(1.1) saturate(1.2)",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Subtle Overlay for Better Glow Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-amber-900/10 to-black/40 pointer-events-none"></div>
        
        {/* Drag Handle Indicator */}
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-amber-400/20 backdrop-blur-sm border border-amber-400/40 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-amber-400"></div>
        </div>
        
        {/* Enhanced Box Shadow Glow */}
        <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-amber-400/20 pointer-events-none"></div>
      </div>
      
      {/* Additional Glow Effects */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-400/20 via-orange-500/15 to-amber-400/20 blur-xl opacity-60 pointer-events-none animate-pulse"></div>
      
      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-amber-400 rounded-full animate-pulse shadow-lg shadow-amber-400/50"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-500 rounded-full animate-pulse shadow-lg shadow-orange-500/50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-amber-300 rounded-full animate-pulse shadow-lg shadow-amber-300/50" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Corner Glow Accents */}
      <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-amber-400 to-transparent rounded-tl-2xl opacity-60"></div>
      <div className="absolute top-0 right-0 w-4 h-4 bg-gradient-to-bl from-orange-500 to-transparent rounded-tr-2xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-4 h-4 bg-gradient-to-tr from-amber-300 to-transparent rounded-bl-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-gradient-to-tl from-orange-400 to-transparent rounded-br-2xl opacity-60"></div>
    </motion.div>
  );
}

// Responsive wrapper component
export function ResponsiveFloatingVideo({ videoSrc }: { videoSrc?: string }) {
  return (
    <div className="relative w-full h-full min-h-[300px] flex items-center justify-center">
      {/* Desktop Version */}
      <div className="hidden md:block">
        <FloatingVideo 
          videoSrc={videoSrc} 
          width={400} 
          height={300}
        />
      </div>
      
      {/* Mobile Version */}
      <div className="md:hidden">
        <FloatingVideo 
          videoSrc={videoSrc} 
          width={300} 
          height={225}
        />
      </div>
    </div>
  );
}
