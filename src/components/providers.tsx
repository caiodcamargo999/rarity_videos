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
    },
  },
  fonts: {
    heading: "var(--font-skinny), system-ui, sans-serif",
    body: "var(--font-skinny), system-ui, sans-serif",
  },
});

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <I18nProvider>{children}</I18nProvider>
    </ChakraProvider>
  );
}


