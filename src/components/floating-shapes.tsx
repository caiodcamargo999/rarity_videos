"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function FloatingShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Triangle 1 - More Visible */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 opacity-40"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(45deg, #d7c5b6, #a09080)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: "drop-shadow(0 0 20px rgba(215, 197, 182, 0.3))",
        }}
      />

      {/* Floating Circle - More Visible */}
      <motion.div
        className="absolute top-40 right-20 w-16 h-16 opacity-35"
        animate={{
          x: [0, -20, 0],
          y: [0, 20, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "radial-gradient(circle, #d7c5b6, #8b7355)",
          borderRadius: "50%",
          filter: "drop-shadow(0 0 25px rgba(215, 197, 182, 0.4))",
        }}
      />

      {/* Floating Triangle 2 - More Visible */}
      <motion.div
        className="absolute bottom-40 left-20 w-24 h-24 opacity-45"
        animate={{
          x: [0, 35, 0],
          y: [0, -25, 0],
          rotate: [0, -180, -360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(135deg, #a09080, #6b5b47)",
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
          filter: "drop-shadow(0 0 30px rgba(160, 144, 128, 0.5))",
        }}
      />

      {/* Interactive Mouse Follower */}
      <motion.div
        className="absolute w-4 h-4 opacity-30"
        animate={{
          x: mousePosition.x - 8,
          y: mousePosition.y - 8,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
        style={{
          background: "radial-gradient(circle, #d7c5b6, transparent)",
          borderRadius: "50%",
        }}
      />

      {/* Floating Lines */}
      <motion.div
        className="absolute top-1/2 left-0 w-32 h-px opacity-20"
        animate={{
          x: [0, 100, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, #d7c5b6, transparent)",
        }}
      />

      <motion.div
        className="absolute top-1/3 right-0 w-24 h-px opacity-20"
        animate={{
          x: [0, -80, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(90deg, transparent, #a09080, transparent)",
        }}
      />

      {/* Additional Floating Elements for More Impact */}
      {/* Floating Diamond */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-14 h-14 opacity-30"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.4, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(45deg, #fbbf24, #f59e0b)",
          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
          filter: "drop-shadow(0 0 20px rgba(251, 191, 36, 0.4))",
        }}
      />

      {/* Floating Hexagon */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-16 h-16 opacity-35"
        animate={{
          y: [0, -20, 0],
          rotate: [0, -180],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(135deg, #d7c5b6, #8b7355)",
          clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
          filter: "drop-shadow(0 0 25px rgba(215, 197, 182, 0.4))",
        }}
      />

      {/* Floating Particles */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-2 h-2 opacity-60"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "#fbbf24",
          borderRadius: "50%",
          filter: "drop-shadow(0 0 10px rgba(251, 191, 36, 0.8))",
        }}
      />

      <motion.div
        className="absolute top-3/4 right-1/3 w-3 h-3 opacity-50"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "#a09080",
          borderRadius: "50%",
          filter: "drop-shadow(0 0 15px rgba(160, 144, 128, 0.6))",
        }}
      />
    </div>
  );
}
