"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Use MotionValues for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Add spring physics for smooth delay/trail effect
    const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    // State to track if hovering over clickable element
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Only show custom cursor on non-touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice) return;

        setIsVisible(true);

        const moveCursor = (e: MouseEvent) => {
            mouseX.set(e.clientX - 16); // Center the 32px cursor
            mouseY.set(e.clientY - 16);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            // Check if hovering over interactive elements
            if (target.matches('a, button, [role="button"], input, select, textarea, .group, .group *')) {
                setIsHovering(true);
            } else {
                const parent = target.closest('a, button, [role="button"], .group');
                if (parent) {
                    setIsHovering(true);
                } else {
                    setIsHovering(false);
                }
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999]"
            style={{
                x: cursorX,
                y: cursorY,
                backgroundColor: isHovering ? "rgba(176, 68, 255, 0.6)" : "rgba(124, 58, 237, 0.5)",
                filter: isHovering ? "blur(8px)" : "blur(12px)",
                scale: isHovering ? 1.5 : 1,
                mixBlendMode: "plus-lighter"
            }}
            transition={{
                scale: { duration: 0.2 },
                backgroundColor: { duration: 0.2 },
                filter: { duration: 0.2 }
            }}
        />
    );
}
