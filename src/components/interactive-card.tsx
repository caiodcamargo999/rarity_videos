"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: "lift" | "glow" | "scale" | "tilt";
  delay?: number;
}

export function InteractiveCard({ 
  children, 
  className = "", 
  hoverEffect = "lift",
  delay = 0
}: InteractiveCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const hoverVariants = {
    lift: {
      y: -8,
      boxShadow: "0 20px 40px rgba(215, 197, 182, 0.3)",
      transition: { duration: 0.3, ease: "easeOut" }
    },
    glow: {
      boxShadow: [
        "0 0 20px rgba(215, 197, 182, 0.2)",
        "0 0 40px rgba(215, 197, 182, 0.4)",
        "0 0 60px rgba(215, 197, 182, 0.6)"
      ],
      transition: { duration: 0.3, ease: "easeOut" }
    },
    scale: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    tilt: {
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  const initialVariants = {
    lift: { y: 0, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" },
    glow: { boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" },
    scale: { scale: 1 },
    tilt: { rotateX: 0, rotateY: 0 }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      initial={initialVariants[hoverEffect]}
      whileHover={hoverVariants[hoverEffect]}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px"
      }}
    >
      {/* Glow effect on hover */}
      {hoverEffect === "glow" && (
        <motion.div
          className="absolute inset-0 rounded-xl opacity-0"
          animate={{
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{
            background: "radial-gradient(circle at center, rgba(215, 197, 182, 0.2) 0%, transparent 70%)",
            filter: "blur(20px)",
          }}
        />
      )}
      
      {children}
    </motion.div>
  );
}
