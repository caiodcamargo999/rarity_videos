"use client";

import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: false,
  },
  colors: {
    brand: {
      darkBrown: "#1c1511",
      lightBrown: "#d7c5b6",
      accent: "#2a211c",
      secondary: "#3a2f29",
      muted: "#a09080",
      border: "#4a3e37",
      input: "#4a3e37",
      ring: "#d7c5b6",
    },
    background: "#1c1511",
    foreground: "#d7c5b6",
    card: "#2a211c",
    cardForeground: "#d7c5b6",
    popover: "#2a211c",
    popoverForeground: "#d7c5b6",
    primary: "#d7c5b6",
    primaryForeground: "#1c1511",
    secondary: "#3a2f29",
    secondaryForeground: "#d7c5b6",
    muted: "#3a2f29",
    mutedForeground: "#a09080",
    accent: "#3a2f29",
    accentForeground: "#d7c5b6",
    destructive: "#ef4444",
    border: "#4a3e37",
    input: "#4a3e37",
    ring: "#d7c5b6",
  },
  fonts: {
    heading: "var(--font-skinny), system-ui, sans-serif",
    body: "var(--font-skinny), system-ui, sans-serif",
  },
  fontWeights: {
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  space: {
    // Enhanced spacing scale following design system (multiples of 4px/8px)
    1: "0.25rem",    // 4px
    2: "0.5rem",     // 8px
    3: "0.75rem",    // 12px
    4: "1rem",       // 16px
    5: "1.25rem",    // 20px
    6: "1.5rem",     // 24px
    7: "1.75rem",    // 28px
    8: "2rem",       // 32px
    10: "2.5rem",    // 40px
    12: "3rem",      // 48px
    14: "3.5rem",    // 56px
    16: "4rem",      // 64px
    18: "4.5rem",    // 72px
    20: "5rem",      // 80px
    24: "6rem",      // 96px
    28: "7rem",      // 112px
    32: "8rem",      // 128px
  },
  radii: {
    none: "0",
    sm: "0.125rem",    // 2px
    base: "0.25rem",   // 4px
    md: "0.375rem",    // 6px
    lg: "0.5rem",      // 8px
    xl: "0.75rem",     // 12px
    "2xl": "1rem",     // 16px
    "3xl": "1.5rem",   // 24px
    full: "9999px",
  },
  shadows: {
    xs: "0 1px 2px rgba(0, 0, 0, 0.05)",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    base: "0 1px 3px rgba(0, 0, 0, 0.1)",
    md: "0 4px 6px rgba(0, 0, 0, 0.1)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.15)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
    // Custom brown glow shadows
    "brown-glow": "0 0 20px rgba(215, 197, 182, 0.3), 0 0 40px rgba(215, 197, 182, 0.2), 0 0 60px rgba(215, 197, 182, 0.1)",
    "brown-glow-lg": "0 0 30px rgba(215, 197, 182, 0.4), 0 0 60px rgba(215, 197, 182, 0.3), 0 0 90px rgba(215, 197, 182, 0.2)",
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: "medium",
        borderRadius: "lg",
        transition: "all 0.3s ease",
      },
      variants: {
        primary: {
          bg: "brand.lightBrown",
          color: "brand.darkBrown",
          _hover: {
            transform: "translateY(-2px)",
            boxShadow: "brown-glow",
          },
        },
        secondary: {
          bg: "transparent",
          color: "brand.lightBrown",
          border: "2px solid",
          borderColor: "brand.lightBrown",
          _hover: {
            bg: "brand.lightBrown",
            color: "brand.darkBrown",
          },
        },
      },
    },
    Card: {
      baseStyle: {
        bg: "card",
        border: "1px solid",
        borderColor: "border",
        borderRadius: "xl",
        transition: "all 0.3s ease",
        _hover: {
          transform: "translateY(-4px)",
          boxShadow: "brown-glow",
          borderColor: "brand.lightBrown",
        },
      },
    },
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nProvider>{children}</I18nProvider>
    </ChakraProvider>
  );
}


