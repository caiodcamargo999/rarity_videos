"use client";

import { BioProfile } from "@/components/bio-profile";
import { BioMission } from "@/components/bio-mission";
import { BioLinks } from "@/components/bio-links";
import { BioFooter } from "@/components/bio-footer";
import { Box, VStack } from "@chakra-ui/react";
import { LanguageSwitcher } from "@/components/language-switcher";

export default function BioPage() {
  return (
    <Box
      className="min-h-screen w-full bg-background text-foreground"
      p={{ base: 4, md: 6 }}
      position="relative"
      overflowX="hidden"
    >
      {/* Background with Logo Symbol */}
      <Box
        position="fixed"
        inset={0}
        bg="linear-gradient(135deg, #1c1511 0%, #2a211c 50%, #1c1511 100%)"
        opacity={1}
        zIndex={0}
      />
      
      {/* Logo Symbol Background - Single Central Symbol */}
      <Box
        position="fixed"
        inset={0}
        display="flex"
        alignItems="center"
        justifyContent="center"
        pointerEvents="none"
        zIndex={1}
      >
        <Box
          as="img"
          src="/logo_symbol_nobackground.png"
          alt="Carolina de Abreu Logo Symbol"
          w="full"
          h="full"
          objectFit="cover"
          opacity={0.85}
          filter="brightness(0.8) contrast(1.2)"
          mixBlendMode="multiply"
        />
      </Box>
      
      {/* Enhanced Glassmorphism Overlay */}
      <Box
        position="fixed"
        inset={0}
        bg="linear-gradient(135deg, rgba(28, 21, 17, 0.9) 0%, rgba(42, 33, 28, 0.7) 50%, rgba(28, 21, 17, 0.9) 100%)"
        backdropFilter="blur(2px)"
        zIndex={2}
      />
      <Box
        position="fixed"
        inset={0}
        bg="linear-gradient(135deg, rgba(28, 21, 17, 0.6) 0%, rgba(42, 33, 28, 0.4) 50%, rgba(28, 21, 17, 0.6) 100%)"
        backdropFilter="blur(1px)"
        zIndex={3}
      />
      
      <Box position="absolute" top={{ base: 4, md: 6 }} right={{ base: 4, md: 6 }} zIndex="docked">
        <LanguageSwitcher />
      </Box>

      <VStack
        spacing={{ base: 6, md: 8 }}
        w="full"
        maxW="2xl"
        mx="auto"
        py={{ base: 8, md: 12 }}
        position="relative"
        zIndex={4}
      >
        {/* 1. PROFILE SECTION - Avatar, Name, Motto */}
        <BioProfile />
        
        {/* 2. LINKS SECTION - Service Cards */}
        <BioLinks />
        
        {/* 3. MISSION SECTION - Purpose Statement */}
        <BioMission />
        
        {/* 4. FOOTER SECTION - Copyright & Socials */}
        <BioFooter />
      </VStack>
    </Box>
  );
}