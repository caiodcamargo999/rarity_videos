"use client";

import { Suspense } from "react";
import { useI18n } from "@/lib/i18n";
import { Box, Container, Flex, VStack, Skeleton } from "@chakra-ui/react";
import { BioProfile } from "@/components/bio-profile";
import { BioLinks } from "@/components/bio-links";
import { BioMission } from "@/components/bio-mission";
import { BioFooter } from "@/components/bio-footer";
import { LanguageDropdown } from "@/components/language-dropdown";

export default function BioPage() {
  const { dir } = useI18n();

  return (
    <Box minH="100vh" bg="brand.darkBrown" position="relative" overflow="hidden" dir={dir}>
      <Box
        position="fixed"
        top="0"
        left="0"
        right="0"
        bottom="0"
        bgGradient="linear(to-br, #1c1511, #2a211c, #1c1511)"
        opacity={1}
      />
      
      <Container maxW="6xl" centerContent position="relative" zIndex="1" py={{ base: 12, md: 16 }}>
        <Flex justifyContent="flex-end" w="full" px={{ base: 4, md: 6 }} pb={{ base: 8, md: 10 }}>
          <LanguageDropdown />
        </Flex>
        
        <VStack spacing={{ base: 10, md: 12 }} w="full" maxW="container.md">
          <Suspense fallback={<Skeleton h="250px" w="full" rounded="xl" />}>
            <BioProfile />
          </Suspense>
          
          <Suspense fallback={<Skeleton h="400px" w="full" rounded="xl" />}>
            <BioLinks />
          </Suspense>
          
          <Suspense fallback={<Skeleton h="150px" w="full" rounded="xl" />}>
            <BioMission />
          </Suspense>
          
          <Suspense fallback={<Skeleton h="100px" w="full" rounded="xl" />}>
            <BioFooter />
          </Suspense>
        </VStack>
      </Container>
    </Box>
  );
}
