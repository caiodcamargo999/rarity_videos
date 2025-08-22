"use client";

import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n";
import { Box, VStack, Heading, SimpleGrid, Text, useColorModeValue, Spinner } from "@chakra-ui/react";
import { Play, Camera } from "lucide-react";

type VideoItem = { src: string; title?: string };

export function Videos() {
  const { t } = useI18n();
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.darkBrown", "brand.darkBrown");

  useEffect(() => {
    // Fetch videos from API route
    setLoading(true);
    console.log("Fetching videos from API..."); // Debug log
    
    fetch("/api/videos")
      .then((res) => {
        console.log("API response status:", res.status); // Debug log
        if (!res.ok) throw new Error(`Failed to fetch videos: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        console.log("API response data:", data); // Debug log
        // Ensure data is an array
        if (Array.isArray(data)) {
          setVideos(data);
        } else if (data && Array.isArray(data.videos)) {
          setVideos(data.videos);
        } else {
          console.log("Unexpected data format:", data); // Debug log
          setVideos([]);
        }
        setError(null);
      })
      .catch((err) => {
        console.error("Failed to fetch videos:", err);
        setError(`Failed to load videos: ${err.message}`);
        setVideos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Box
      as="section"
      id="videos"
      px={{ base: "6", sm: "8", lg: "8" }}
      py={{ base: "20", sm: "24", lg: "28" }} // More prominent spacing
      bg={bgColor}
    >
      <VStack
        spacing={{ base: "10", sm: "12", lg: "14" }} // Increased spacing
        align={{ base: "center", lg: "flex-start" }}
        maxW="6xl"
        mx="auto"
      >
        <Heading
          as="h2"
          size={{ base: "lg", sm: "xl", lg: "2xl" }}
          fontWeight="200"
          letterSpacing="wide"
          color={textColor}
          textAlign={{ base: "center", lg: "left" }}
          mb={{ base: "4", sm: "6" }} // Reduced margin for subtitle
          px={{ base: "4", sm: "0" }}
        >
          {t("videosTitle")}
        </Heading>
        
        {/* Subtitle emphasizing importance */}
        <Text
          fontSize={{ base: "base", sm: "lg" }}
          color={textColor}
          opacity="0.8"
          textAlign={{ base: "center", lg: "left" }}
          maxW="2xl"
          lineHeight="1.6"
          mb={{ base: "6", sm: "8" }}
        >
                          {t("videosDescription")}
        </Text>

        {loading && (
          <Box textAlign="center" py="12">
            <Spinner size="lg" color={textColor} />
            <Text color={textColor} opacity="0.7" mt="4">
                              {t("loadingVideos")}
            </Text>
          </Box>
        )}

        {error && (
          <Text color="red.400" textAlign="center" py="8">
            {error}
          </Text>
        )}

        {!loading && !error && videos.length === 0 && (
          <Box textAlign="center" py="12">
            <Text color={textColor} opacity="0.7" mb="4">
                              {t("noVideosFound")}
            </Text>
            <Text color={textColor} opacity="0.5" fontSize="sm">
                              {t("noVideosMessage")}
            </Text>
          </Box>
        )}

        {videos.length > 0 && (
          <SimpleGrid
            columns={{ base: 1, sm: 2, lg: 3 }}
            spacing={{ base: "8", sm: "10", lg: "12" }}
            w="full"
            pt={{ base: "4", sm: "6" }}
          >
            {videos.map((video, i) => (
              <Box
                key={i}
                borderRadius="xl"
                overflow="hidden"
                bg="brand.accent"
                border="1px solid"
                borderColor="whiteAlpha.200"
                _hover={{
                  transform: "translateY(-4px)",
                  boxShadow: "xl",
                  borderColor: "whiteAlpha.400",
                }}
                transition="all 0.3s ease"
                position="relative"
                cursor="pointer"
                onClick={() => {
                  // Create a modal or fullscreen video player
                  const videoElement = document.createElement('video');
                  videoElement.src = video.src;
                  videoElement.controls = true;
                  videoElement.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    max-width: 90vw;
                    max-height: 90vh;
                    z-index: 9999;
                    background: #000;
                    border-radius: 8px;
                  `;
                  videoElement.onclick = (e) => e.stopPropagation();
                  document.body.appendChild(videoElement);
                  
                  // Close modal when clicking outside
                  const overlay = document.createElement('div');
                  overlay.style.cssText = `
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.8);
                    z-index: 9998;
                  `;
                  overlay.onclick = () => {
                    document.body.removeChild(videoElement);
                    document.body.removeChild(overlay);
                  };
                  document.body.appendChild(overlay);
                }}
              >
                {/* Video Thumbnail Container */}
                <Box
                  position="relative"
                  bg="brand.card"
                  height="200px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  overflow="hidden"
                >
                  {/* Actual Video Thumbnail */}
                  <video
                    src={video.src}
                    className="w-full h-full object-cover"
                    muted
                    preload="metadata"
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      maxHeight: "300px",
                      objectFit: "cover"
                    }}
                  />
                  
                  {/* Camera Icon Overlay */}
                  <Box
                    position="absolute"
                    top="3"
                    left="3"
                    bg="whiteAlpha.100"
                    borderRadius="full"
                    p="2"
                    zIndex="2"
                  >
                    <Camera size={16} color="#d7c5b6" />
                  </Box>
                  
                  {/* Play Button Overlay */}
                  <Box
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    bg="whiteAlpha.200"
                    borderRadius="full"
                    p="4"
                    backdropFilter="blur(10px)"
                    border="2px solid"
                    borderColor="whiteAlpha.300"
                    zIndex="2"
                  >
                    <Play size={32} color="#d7c5b6" fill="#d7c5b6" />
                  </Box>
                  
                  {/* Click to Play Text */}
                  <Text
                    position="absolute"
                    bottom="3"
                    left="50%"
                    transform="translateX(-50%)"
                    fontSize="xs"
                    color={textColor}
                    opacity="0.8"
                    fontWeight="medium"
                    zIndex="2"
                  >
                    {t("clickToPlay")}
                  </Text>
                </Box>
                
                {/* Video Title */}
                {video.title && (
                  <Box px={{ base: "4", sm: "6" }} py={{ base: "4", sm: "5" }}>
                    <Text
                      fontSize={{ base: "sm", sm: "md" }}
                      color={textColor}
                      opacity="0.9"
                      textAlign="center"
                      fontWeight="medium"
                      lineHeight="1.4"
                    >
                      {video.title}
                    </Text>
                  </Box>
                )}
              </Box>
            ))}
          </SimpleGrid>
        )}
      </VStack>
    </Box>
  );
}


