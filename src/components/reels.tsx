"use client";

import { useI18n } from "@/lib/i18n";
import { Box, VStack, SimpleGrid, Text, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Center, Badge, HStack, Button } from "@chakra-ui/react";
import { Play, Instagram, ExternalLink } from "lucide-react";
import { useState, useEffect } from "react";
import { InteractiveCard } from "./interactive-card";
import { GradientText } from "./gradient-text";

type Reel = { 
  title: string; 
  client: string;
  instagramUrl: string; // Instagram reel URL
  thumbnail?: string; // Optional custom thumbnail
};

// Instagram reels with real URLs and proper titles
const carolinaReels: Reel[] = [
  {
    title: "Smart Imob",
    client: "Smart Imob",
    instagramUrl: "https://www.instagram.com/reel/C_N407eS65T/?igsh=d3V6eWZkNWNoZWNz"
  },
  {
    title: "Jamburae Boat",
    client: "Jamburae",
    instagramUrl: "https://www.instagram.com/reel/C_FuMm0SX2x/?igsh=dGIxdXl0bDltaGF0"
  },
  {
    title: "Jamburae Surf",
    client: "Jamburae",
    instagramUrl: "https://www.instagram.com/reel/C-o2cAoSRRf/?igsh=MWJzNmtzaWdqbm9uMA=="
  },
  {
    title: "Jamburae Hotel",
    client: "Jamburae",
    instagramUrl: "https://www.instagram.com/reel/C-e5-xUy13-/?igsh=MTIyN3dicmM3N3FhYg=="
  },
  {
    title: "Smart Imob House",
    client: "Smart Imob",
    instagramUrl: "https://www.instagram.com/reel/DAGbGaASmHc/?igsh=MWxzb3NxODRuaGIxeA=="
  },
  {
    title: "Rarity",
    client: "Rarity",
    instagramUrl: "https://www.instagram.com/reel/C_yNYmoRXv6/?igsh=czdiMjJoMzltN2g2"
  },
  {
    title: "Sit Interview - part 1",
    client: "Sit Interview",
    instagramUrl: "https://www.instagram.com/reel/C_3vBgzpmNX/?igsh=YWlsdzVxOXUwazV6"
  },
  {
    title: "Sit Interview - part 2",
    client: "Sit Interview",
    instagramUrl: "https://www.instagram.com/reel/C_6YGbHhlSZ/?igsh=anVqaWZkYTFtYmIx"
  },
  {
    title: "Guest review",
    client: "Guest Review",
    instagramUrl: "https://www.instagram.com/reel/C_tgcwvhPfw/?igsh=MTVpMnZjamhmMDFjbQ=="
  },
  {
    title: "Fun in Jamburae",
    client: "Jamburae",
    instagramUrl: "https://www.instagram.com/reel/C-2NvXwS9oY/?igsh=d3U0ejc3eTV4MjJj"
  }
];

export function Reels({ reels = carolinaReels }: { reels?: Reel[] }) {
  const { t, locale } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.accent", "brand.accent");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);

  // Function to get Instagram embed URL with language-specific parameters
  const getInstagramEmbedUrl = (url: string, title: string) => {
    const reelId = url.match(/\/reel\/([^\/\?]+)/)?.[1];
    if (reelId) {
      // Add language parameter to force Instagram to use the user's language
      const langParam = locale === 'pt' ? 'pt_BR' : 
                       locale === 'es' ? 'es_LA' : 
                       locale === 'ar' ? 'ar' : 'en_US';
      
      if (title === "Jamburae Boat") {
        // Special handling for Jamburae Boat to match Smart Imob style
        return `https://www.instagram.com/reel/${reelId}/embed/?hl=${langParam}&autoplay=1&hidecaption=1`;
      } else {
        // Standard embed for other videos
        return `https://www.instagram.com/reel/${reelId}/embed/?hl=${langParam}`;
      }
    }
    return url;
  };



  const handlePlayReel = (reel: Reel) => {
    setSelectedReel(reel);
    setIsVideoLoading(true);
    onOpen();
  };

  const handleOpenInstagram = () => {
    if (selectedReel) {
      window.open(selectedReel.instagramUrl, '_blank', 'noopener,noreferrer');
    }
  };

  // Reset loading state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setIsVideoLoading(false);
    }
  }, [isOpen]);

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsVideoLoading(false);
  };

  return (
    <>
      <Box
        as="section"
        px={{ base: "6", sm: "8", lg: "8" }}
        py={{ base: "16", sm: "20", lg: "24" }}
        bg={bgColor}
        borderRadius={{ base: "none", lg: "xl" }}
        mx={{ base: "0", lg: "4" }}
      >
        <VStack
          spacing={{ base: "8", sm: "10", lg: "12" }}
          align={{ base: "center", lg: "flex-start" }}
          maxW="6xl"
          mx="auto"
        >
          <GradientText
            gradient="amber"
            className="text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-wide text-center lg:text-left mb-6 sm:mb-8 px-4 sm:px-0"
          >
            {t("reelsTitle")}
          </GradientText>



          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: "6", sm: "8", lg: "10" }}
            w="full"
            pt={{ base: "4", sm: "6" }}
          >
            {reels.map((reel, i) => (
              <InteractiveCard
                key={i}
                hoverEffect="glow"
              >
                <Box
                  aspectRatio="9/16"
                  position="relative"
                  bg="brand.darkBrown"
                  borderRadius="lg"
                  overflow="hidden"
                  cursor="pointer"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  transition="all 0.3s ease"
                  onClick={() => handlePlayReel(reel)}
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
                    borderColor: "brand.lightBrown"
                  }}
                >
                  {/* Instagram Reel Preview */}
                  <Box
                    w="full"
                    h="full"
                    bg="linear-gradient(135deg, #2a211c 0%, #3a2f29 50%, #4a3e37 100%)"
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Instagram Icon Badge */}
                    <Box
                      position="absolute"
                      top="4"
                      left="4"
                      bg="blackAlpha.700"
                      borderRadius="full"
                      p="2"
                      zIndex="2"
                      backdropFilter="blur(10px)"
                    >
                      <Instagram size={20} color="#d7c5b6" />
                    </Box>
                    
                    {/* Instagram-style Content Preview */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="linear-gradient(45deg, rgba(215, 197, 182, 0.1), rgba(160, 144, 128, 0.1))"
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      justifyContent="center"
                    >
                      {/* Instagram Camera Icon */}
                      <Box
                        bg="whiteAlpha.100"
                        borderRadius="full"
                        p="4"
                        mb="4"
                        backdropFilter="blur(10px)"
                      >
                        <Instagram size={48} color="#d7c5b6" opacity="0.8" />
                      </Box>
                      
                      {/* Reel Title */}
                      <Text 
                        color={textColor} 
                        fontSize="lg"
                        fontWeight="600"
                        textAlign="center"
                        mb="2"
                        maxW="80%"
                        lineHeight="1.2"
                      >
                        {reel.title}
                      </Text>
                      
                      {/* Client Badge */}
                      <Badge
                        colorScheme="brand"
                        variant="subtle"
                        borderRadius="full"
                        px="3"
                        py="1"
                        fontSize="xs"
                        textTransform="uppercase"
                        letterSpacing="wide"
                        mb="6"
                        bg="whiteAlpha.200"
                        color={textColor}
                      >
                        {reel.client}
                      </Badge>
                      
                      {/* Play Button */}
                      <Box
                        bg="brand.lightBrown"
                        borderRadius="full"
                        p="5"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transform="scale(0.8)"
                        transition="all 0.3s ease"
                        _hover={{ transform: "scale(1)" }}
                        boxShadow="0 8px 25px rgba(0, 0, 0, 0.3)"
                        cursor="pointer"
                      >
                        <Play size={28} color="#1c1511" fill="#1c1511" />
                      </Box>
                      
                      {/* Click to Play Text */}
                      <Text 
                        color={textColor} 
                        mt="4" 
                        fontSize="xs" 
                        opacity="0.7" 
                        textAlign="center"
                        fontStyle="italic"
                        maxW="90%"
                      >
                        {t("clickToPlayReel")}
                      </Text>
                    </Box>
                    
                    {/* Instagram-style Border Effect */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      border="2px solid"
                      borderColor="whiteAlpha.200"
                      borderRadius="lg"
                      opacity="0.3"
                    />
                  </Box>
                </Box>
              </InteractiveCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Instagram Reel Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
        <ModalContent 
          bg="transparent" 
          shadow="none" 
          maxW="500px"
          maxH="90vh"
        >
          <ModalCloseButton 
            color="white" 
            bg="blackAlpha.600" 
            _hover={{ bg: "blackAlpha.800" }}
            zIndex="10"
            position="absolute"
            top="2"
            right="2"
          />
          <ModalBody p={0}>
            {selectedReel && (
              <VStack spacing={0}>
                {/* Instagram Embed */}
                <Box
                  w="full"
                  borderRadius="xl"
                  overflow="hidden"
                  position="relative"
                  bg="black"
                >
                  <Box position="relative" w="full">
                    {isVideoLoading && (
                      <Center
                        position="relative"
                        h="700px"
                        bg="blackAlpha.700"
                        borderRadius="0.75rem"
                        zIndex="5"
                      >
                        <VStack spacing={3}>
                          <Box
                            w="8"
                            h="8"
                            border="3px solid"
                            borderColor="brand.lightBrown"
                            borderTopColor="transparent"
                            borderRadius="full"
                            sx={{
                              '@keyframes spin': {
                                '0%': { transform: 'rotate(0deg)' },
                                '100%': { transform: 'rotate(360deg)' }
                              },
                              animation: 'spin 1s linear infinite'
                            }}
                          />
                          <Text color="white" fontSize="sm">
                            {t("loadingInstagramReel")}
                          </Text>
                        </VStack>
                      </Center>
                    )}
                    
                    <iframe
                      key={`${selectedReel.instagramUrl}-${Date.now()}`}
                      title={selectedReel.title}
                      src={getInstagramEmbedUrl(selectedReel.instagramUrl, selectedReel.title)}
                      style={{ 
                        width: "100%", 
                        height: "700px",
                        border: "none",
                        borderRadius: '0.75rem'
                      }}
                      allow="autoplay; encrypted-media; picture-in-picture; web-share"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      onLoad={handleIframeLoad}
                      loading="lazy"
                    />
                  </Box>
                </Box>

                {/* Video Info */}
                <Box
                  bg="brand.darkBrown"
                  w="full"
                  p="6"
                  borderRadius="0 0 xl xl"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  borderTop="none"
                >
                  <VStack spacing={4} align="stretch">
                    {/* Title and Client */}
                    <Box>
                      <Text color={textColor} fontSize="2xl" fontWeight="600" mb="2">
                        {selectedReel.title}
                      </Text>
                      <Badge
                        colorScheme="brand"
                        variant="subtle"
                        borderRadius="full"
                        px="4"
                        py="2"
                        fontSize="sm"
                        textTransform="uppercase"
                        letterSpacing="wide"
                      >
                        {selectedReel.client}
                      </Badge>
                    </Box>

                    {/* Action Buttons */}
                    <HStack spacing={4} justify="space-between">
                      
                      
                      <Button
                        leftIcon={<ExternalLink size={16} />}
                        onClick={handleOpenInstagram}
                        size="sm"
                        variant="outline"
                        color={textColor}
                        borderColor={textColor}
                        _hover={{
                          bg: textColor,
                          color: "brand.darkBrown"
                        }}
                      >
                        {t("viewOnInstagram")}
                      </Button>
                    </HStack>
                  </VStack>
                </Box>
              </VStack>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}