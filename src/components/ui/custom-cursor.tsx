"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);

    // Use MotionValues for performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor
    const springConfig = { damping: 25, stiffness: 300, mass: 0.2 };
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
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
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

        // Hide default cursor
        document.body.style.cursor = 'none';

        window.addEventListener("mousemove", moveCursor);
        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
            document.body.style.cursor = 'auto';
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-[9999]"
            style={{
                x: cursorX,
                y: cursorY,
            }}
        >
            <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`transition-transform duration-200 ${isHovering ? "scale-125" : "scale-100"}`}
            >
                <path
                    d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z"
                    fill="url(#cursor-gradient)"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                />
                <defs>
                    <linearGradient id="cursor-gradient" x1="3" y1="3" x2="19.97" y2="19.97" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#6366f1" /> {/* Indigo */}
                        <stop offset="1" stopColor="#a855f7" /> {/* Purple */}
                    </linearGradient>
                </defs>
            </svg>
        </motion.div>
    );
}
