"use client";

import { useI18n } from "@/lib/i18n";
import { Box, VStack, SimpleGrid, Text, Badge, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Alert, AlertIcon } from "@chakra-ui/react";
import { Play, Instagram } from "lucide-react";
import { useState, useEffect } from "react";
import { InteractiveCard } from "./interactive-card";
import { GradientText } from "./gradient-text";

type Reel = { 
  url: string; 
  title: string; 
  client: string;
  thumbnail?: string; // Add thumbnail support
};

const carolinaReels: Reel[] = [
  {
    url: "https://www.instagram.com/reel/C_N407eS65T/?igsh=d3V6eWZkNWNoZWNz",
    title: "Smart Imob",
    client: "Smart Imob"
  },
  {
    url: "https://www.instagram.com/reel/C-o2cAoSRRf/?igsh=MWJzNmtzaWdqbm9uMA==",
    title: "Jamburae Boat",
    client: "Jamburae"
  },
  {
    url: "https://www.instagram.com/reel/C-o2cAoSRRf/?igsh=MWJzNmtzaWdqbm9uMA==",
    title: "Jamburae Surf",
    client: "Jamburae"
  },
  {
    url: "https://www.instagram.com/reel/C-e5-xUy13-/?igsh=MTIyN3dicmM3N3FhYg==",
    title: "Jamburae Hotel",
    client: "Jamburae"
  },
  {
    url: "https://www.instagram.com/reel/DAGbGaASmHc/?igsh=MWxzb3NxODRuaGIxeA==",
    title: "Smart Imob House",
    client: "Smart Imob"
  },
  {
    url: "https://www.instagram.com/reel/C_yNYmoRXv6/?igsh=czdiMjJoMzltN2g2",
    title: "Rarity",
    client: "Rarity"
  }
];

export function Reels({ reels = carolinaReels }: { reels?: Reel[] }) {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.accent", "brand.accent");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedReel, setSelectedReel] = useState<Reel | null>(null);

  // Function to convert Instagram URL to embed URL with autoplay support
  const getEmbedUrl = (url: string) => {
    const reelId = url.match(/\/reel\/([^\/\?]+)/)?.[1];
    if (reelId) {
      // Use the embed URL format that supports autoplay
      return `https://www.instagram.com/reel/${reelId}/embed/`;
    }
    return url;
  };

  const handlePlayReel = (reel: Reel) => {
    setSelectedReel(reel);
    onOpen();
  };

  // Force iframe reload when modal opens to ensure autoplay works
  useEffect(() => {
    if (isOpen && selectedReel) {
      // Multiple reload attempts to ensure autoplay works
      const reloadIframe = () => {
        const iframe = document.querySelector('iframe[title="' + selectedReel.title + '"]') as HTMLIFrameElement;
        if (iframe) {
          const currentSrc = iframe.src;
          iframe.src = '';
          setTimeout(() => {
            iframe.src = currentSrc;
          }, 50);
        }
      };
      
      // First reload after modal is fully rendered
      const timer1 = setTimeout(reloadIframe, 100);
      
      // Second reload attempt for better autoplay success
      const timer2 = setTimeout(reloadIframe, 300);
      
      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [isOpen, selectedReel]);

  return (
    <>
      <Box
        as="section"
        px={{ base: "6", sm: "8", lg: "8" }} // Increased mobile padding
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

          {/* Note about Instagram reels */}
          <Alert status="info" borderRadius="lg" bg="whiteAlpha.100" border="1px solid" borderColor="whiteAlpha.200" w="full">
            <AlertIcon color={textColor} />
            <Text color={textColor} fontSize="sm">
                              {t("reelsDescription")}
            </Text>
          </Alert>

          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: "6", sm: "8", lg: "10" }}
            w="full"
            pt={{ base: "4", sm: "6" }}
          >
            {reels.map((r, i) => (
              <InteractiveCard
                key={i}
                hoverEffect="glow"
                delay={i * 0.1}
              >
                <Box
                  bg="brand.darkBrown"
                  borderRadius="lg"
                  overflow="hidden"
                  border="1px solid"
                  borderColor="whiteAlpha.200"
                  transition="all 0.3s ease"
                >
                                {/* Instagram Reel Card */}
                <Box
                  aspectRatio="9/16"
                  position="relative"
                  bg="brand.darkBrown"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  cursor="pointer"
                  onClick={() => handlePlayReel(r)}
                  overflow="hidden"
                  backgroundImage="linear-gradient(45deg, rgba(215, 197, 182, 0.1), rgba(160, 144, 128, 0.1))"
                >
                  {/* Instagram Icon */}
                  <Box
                    position="absolute"
                    top="4"
                    left="4"
                    bg="whiteAlpha.100"
                    borderRadius="full"
                    p="2"
                    zIndex="2"
                  >
                    <Instagram size={20} color="#d7c5b6" />
                  </Box>
                  
                  {/* Main Content */}
                  <Instagram size={64} color="#d7c5b6" opacity="0.6" />
                  <Text 
                    color={textColor} 
                    mt="6" 
                    textAlign="center" 
                    fontSize="lg"
                    fontWeight="500"
                    mb="2"
                  >
                    {r.title}
                  </Text>
                  <Text 
                    color={textColor} 
                    fontSize="sm" 
                    opacity="0.7" 
                    textAlign="center"
                    mb="6"
                  >
                    {r.client}
                  </Text>
                  
                  {/* Play Button */}
                  <Box
                    bg="brand.lightBrown"
                    borderRadius="full"
                    p="4"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    _hover={{
                      transform: "scale(1.1)",
                      bg: "brand.lightBrown",
                    }}
                    transition="all 0.2s ease"
                    boxShadow="0 4px 12px rgba(0,0,0,0.3)"
                  >
                    <Play size={28} color="#2a211c" fill="#2a211c" />
                  </Box>
                   
                  {/* Click to Play Text */}
                  <Text 
                    color={textColor} 
                    mt="4" 
                    fontSize="xs" 
                    opacity="0.6" 
                    textAlign="center"
                    fontStyle="italic"
                  >
                    {t("clickToWatchOnInstagram")}
                  </Text>
                </Box>
              </Box>
            </InteractiveCard>
          ))}
        </SimpleGrid>
        </VStack>
      </Box>

      {/* Modal for playing reels */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl" isCentered key={selectedReel?.url}>
        <ModalOverlay />
        <ModalContent bg="brand.darkBrown" border="1px solid" borderColor="whiteAlpha.200">
          <ModalHeader color={textColor} display="flex" alignItems="center" justifyContent="space-between">
            <Text>{selectedReel?.title}</Text>
            <ModalCloseButton color={textColor} />
          </ModalHeader>
          <ModalBody pb="6">
            {selectedReel && (
              <Box
                aspectRatio="9/16"
                w="full"
                bg="black"
                borderRadius="lg"
                overflow="hidden"
              >
                                 <iframe
                   key={`${selectedReel.url}-${Date.now()}`}
                   title={selectedReel.title}
                   src={`${getEmbedUrl(selectedReel.url)}?autoplay=1&mute=0&loop=1&controls=1`}
                   style={{ width: "100%", height: "100%" }}
                   allow="autoplay; encrypted-media; picture-in-picture; web-share"
                   frameBorder="0"
                   scrolling="no"
                   allowFullScreen
                 />
              </Box>
            )}
            
            {/* Additional info below video */}
            {selectedReel && (
              <Box mt="4" textAlign="center">
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
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}


