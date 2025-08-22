"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface FloatingVideoProps {
  videoSrc?: string;
  className?: string;
  width?: number;
  height?: number;
}

export default function FloatingVideo({ 
  videoSrc = "/video.mp4",
  className = "",
  width = 400,
  height = 300
}: FloatingVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [windowDimensions, setWindowDimensions] = useState({ width: 0, height: 0 });

  // Get window dimensions safely for drag constraints
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

  // Don't render until we have window dimensions
  if (windowDimensions.width === 0) {
    return null;
  }

  return (
    <motion.div
      drag
      dragConstraints={{ 
        left: -windowDimensions.width / 2 + width / 2, 
        right: windowDimensions.width / 2 - width / 2, 
        top: -windowDimensions.height / 2 + height / 2, 
        bottom: windowDimensions.height / 2 - height / 2 
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`absolute z-50 w-64 rounded-2xl overflow-hidden shadow-lg border border-amber-400 bg-black/40 backdrop-blur-lg ${className}`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      {/* Neon Glow Border Effect */}
      <div className="absolute inset-0 rounded-2xl p-1">
        {/* Primary glow border */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-400 via-orange-500 to-amber-400 opacity-80 animate-pulse"></div>
        
        {/* Secondary glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-300/60 via-orange-400/40 to-amber-500/60 blur-sm"></div>
        
        {/* Inner glow ring */}
        <div className="absolute inset-1 rounded-2xl bg-gradient-to-r from-amber-200/30 via-orange-300/20 to-amber-400/30 blur-md"></div>
      </div>

      {/* Video Container */}
      <div className="relative w-full h-full rounded-2xl overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        
        {/* Subtle overlay for better glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-amber-900/10 to-black/20 pointer-events-none"></div>
      </div>

      {/* Enhanced Box Shadow Glow */}
      <div className="absolute inset-0 rounded-2xl shadow-2xl shadow-amber-400/30 pointer-events-none"></div>
      
      {/* Corner Glow Accents */}
      <div className="absolute top-0 left-0 w-3 h-3 bg-gradient-to-br from-amber-400 to-transparent rounded-tl-2xl opacity-60"></div>
      <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-bl from-orange-500 to-transparent rounded-tr-2xl opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-3 h-3 bg-gradient-to-tr from-amber-300 to-transparent rounded-bl-2xl opacity-60"></div>
      <div className="absolute bottom-0 right-0 w-3 h-3 bg-gradient-to-tl from-orange-400 to-transparent rounded-br-2xl opacity-60"></div>
    </motion.div>
  );
}
