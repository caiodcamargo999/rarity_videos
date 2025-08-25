"use client";

import { useI18n } from "@/lib/i18n";
import { Box, VStack, SimpleGrid, Text, useColorModeValue, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, useDisclosure, Center, Badge, HStack, Button, Input, Textarea, Avatar, Divider, useToast } from "@chakra-ui/react";
import { Play, Camera, Heart, MessageCircle, Share2, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { InteractiveCard } from "./interactive-card";
import { GradientText } from "./gradient-text";

type VideoItem = { 
  src: string; 
  title: string;
  subtitle?: string;
  client: string;
  filename: string;
  thumbnail?: string;
};

type Comment = {
  id: string;
  text: string;
  author: string;
  timestamp: number;
  isModerated: boolean;
};

type VideoStats = {
  likes: number;
  comments: Comment[];
};

// Video data with subtitles - ordered by filename numbers
const portfolioVideos: VideoItem[] = [
  {
    title: "Jamburae Surf",
    subtitle: "Professional surf coaching and island adventures",
    client: "Jamburae",
    src: "/videos/1 - Jamburae Surf _compressed.mp4",
    filename: "1 - Jamburae Surf _compressed.mp4",
    thumbnail: "/thumbnails/1 - Surf Nias.jpg"
  },
  {
    title: "Nias Island Adventure",
    subtitle: "Exploring the beauty of Indonesian surf paradise",
    client: "Jamburae",
    src: "/videos/2 - Fun In Nias.mp4",
    filename: "2 - Fun In Nias.mp4",
    thumbnail: "/thumbnails/2 - Fun in Indonesia.jpg"
  },
  {
    title: "Real Estate Showcase",
    subtitle: "Premium properties in Florianópolis",
    client: "Smart Imob",
    src: "/videos/3 - Real Estate_.mp4",
    filename: "3 - Real Estate_.mp4",
    thumbnail: "/thumbnails/3 - Smart Imob Florianopolis.jpg"
  },
  {
    title: "Jamburae Surf",
    subtitle: "Advanced surf techniques and island lifestyle",
    client: "Jamburae",
    src: "/videos/4 - Jamburae Surf.mp4",
    filename: "4 - Jamburae Surf.mp4",
    thumbnail: "/thumbnails/4 - Surf Nias_.jpg"
  },
  {
    title: "Jamburae Owner Interview - Part 1",
    subtitle: "Behind the scenes with the founder",
    client: "Jamburae",
    src: "/videos/5 - Jamburae - Owner part 1_github_ready.mp4",
    filename: "5 - Jamburae - Owner part 1_github_ready.mp4",
    thumbnail: "/thumbnails/5 - Sit part 1.jpg"
  },
  {
    title: "Jamburae Owner Interview - Part 2",
    subtitle: "Continuing the conversation about surf culture",
    client: "Jamburae",
    src: "/videos/6 - Jamburae - Onwer part 2_github_ready.mp4",
    filename: "6 - Jamburae - Onwer part 2_github_ready.mp4",
    thumbnail: "/thumbnails/6 - Sit part 2_.jpg"
  },
  {
    title: "Guest Experience Review",
    subtitle: "Real stories from our surf school guests",
    client: "Jamburae",
    src: "/videos/7 - Guest Review_compressed.mp4",
    filename: "7 - Guest Review_compressed.mp4",
    thumbnail: "/thumbnails/7 - Guest Review.jpg"
  },
  {
    title: "Rarity Agency Showcase",
    subtitle: "Innovative marketing solutions for luxury brands",
    client: "Rarity",
    src: "/videos/8- Rarity Agency_compressed.mp4",
    filename: "8- Rarity Agency_compressed.mp4",
    thumbnail: "/thumbnails/8 - Rarity Agency.jpg"
  },
  {
    title: "Jamburae Boat Experience",
    subtitle: "Ocean adventures and marine exploration",
    client: "Jamburae",
    src: "/videos/9 - Jamburae  BOAT_compressed.mp4",
    filename: "9 - Jamburae  BOAT_compressed.mp4",
    thumbnail: "/thumbnails/9 - Jamburae Boat.jpeg"
  },
  {
    title: "Real Estate Florianópolis",
    subtitle: "Exclusive properties in Brazil's surf capital",
    client: "Smart Imob",
    src: "/videos/10 - Smart Imob.mp4",
    filename: "10 - Smart Imob.mp4",
    thumbnail: "/thumbnails/10 - Smart Imob Centro Floripa.jpg"
  },
  {
    title: "Surf Island Experience",
    subtitle: "Complete surf immersion on Nias Island",
    client: "Jamburae",
    src: "/videos/11 - Surf Nias.mp4",
    filename: "11 - Surf Nias.mp4",
    thumbnail: "/thumbnails/11 - Surf Nias.jpg"
  },
  {
    title: "Rarity Owner Interview",
    subtitle: "Insights into modern marketing strategies",
    client: "Rarity",
    src: "/videos/12 - Rarity Owner.mp4",
    filename: "12 - Rarity Owner.mp4",
    thumbnail: "/thumbnails/12 - Rarity Owner.jpg"
  },
  {
    title: "Real Estate Florianópolis",
    subtitle: "Premium investment opportunities in Brazil",
    client: "Smart Imob",
    src: "/videos/13 - Smart Imob.mp4",
    filename: "13 - Smart Imob.mp4",
    thumbnail: "/thumbnails/13- Smart Imob.jpg"
  }
];

// Bad words filter for comment moderation
const BAD_WORDS = [
  'spam', 'scam', 'fake', 'bad', 'terrible', 'awful', 'hate', 'stupid', 'idiot',
  'dumb', 'ugly', 'fat', 'skinny', 'boring', 'useless', 'worthless', 'garbage',
  'trash', 'crap', 'shit', 'fuck', 'ass', 'bitch', 'whore', 'slut', 'dick',
  'cock', 'pussy', 'cunt', 'bastard', 'motherfucker', 'fucker', 'nigger',
  'faggot', 'dyke', 'retard', 'retarded', 'autistic', 'autism'
];

export function VideoGallery() {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.accent", "brand.accent");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoStats, setVideoStats] = useState<Record<string, VideoStats>>({});
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [showComments, setShowComments] = useState(false);
  const toast = useToast();



  // Load video stats from localStorage on component mount
  useEffect(() => {
    const savedStats = localStorage.getItem('videoStats');
    if (savedStats) {
      try {
        setVideoStats(JSON.parse(savedStats));
      } catch (error) {
        console.error('Error loading video stats:', error);
      }
    }
  }, []);

  // Save video stats to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('videoStats', JSON.stringify(videoStats));
  }, [videoStats]);

  // Initialize video stats if they don't exist
  const getVideoStats = (videoId: string): VideoStats => {
    if (!videoStats[videoId]) {
      const newStats: VideoStats = { likes: 0, comments: [] };
      setVideoStats(prev => ({ ...prev, [videoId]: newStats }));
      return newStats;
    }
    return videoStats[videoId];
  };

  const handlePlayVideo = (video: VideoItem) => {
    setSelectedVideo(video);
    setIsVideoLoading(true);
    setShowComments(false);
    onOpen();
  };

  const handleCloseModal = () => {
    onClose();
    setSelectedVideo(null);
    setIsVideoLoading(false);
    setShowComments(false);
    setCommentText("");
    setCommentAuthor("");
  };

  const handleLikeToggle = (videoId: string) => {
    setVideoStats(prev => {
      const currentStats = prev[videoId] || { likes: 0, comments: [] };
      const newLikes = currentStats.likes + (currentStats.likes > 0 ? -1 : 1);
      
      return {
        ...prev,
        [videoId]: {
          ...currentStats,
          likes: Math.max(0, newLikes)
        }
      };
    });
  };

  const handleAddComment = (videoId: string) => {
    if (!commentText.trim() || !commentAuthor.trim()) {
      toast({
        title: "Comment incomplete",
        description: "Please provide both your name and comment text.",
        status: "warning",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Check for bad words
    const hasBadWords = BAD_WORDS.some(badWord => 
      commentText.toLowerCase().includes(badWord.toLowerCase())
    );

    if (hasBadWords) {
      toast({
        title: "Comment blocked",
        description: "Your comment contains inappropriate language and has been blocked.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const newComment: Comment = {
      id: Date.now().toString(),
      text: commentText.trim(),
      author: commentAuthor.trim(),
      timestamp: Date.now(),
      isModerated: false
    };

    setVideoStats(prev => {
      const currentStats = prev[videoId] || { likes: 0, comments: [] };
      return {
        ...prev,
        [videoId]: {
          ...currentStats,
          comments: [...currentStats.comments, newComment]
        }
      };
    });

    setCommentText("");
    toast({
      title: "Comment added",
      description: "Your comment has been posted successfully!",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleShare = async (video: VideoItem) => {
    const shareData = {
      title: `${video.title} - Carolina de Abreu Portfolio`,
      text: `Check out this amazing video: ${video.title}`,
      url: `${window.location.origin}/socialmedia?video=${encodeURIComponent(video.filename)}`
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copied!",
          description: "Portfolio link has been copied to your clipboard.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast({
          title: "Link copied!",
          description: "Portfolio link has been copied to your clipboard.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } catch {
        toast({
          title: "Share failed",
          description: "Unable to share or copy link. Please try manually.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const formatTimestamp = (timestamp: number): string => {
    const now = Date.now();
    const diff = now - timestamp;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 1) return "Just now";
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return new Date(timestamp).toLocaleDateString();
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
        position="relative"
        overflow="hidden"
      >
        {/* Glassmorphism Background Effect */}
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          bg="rgba(215, 197, 182, 0.03)"
          backdropFilter="blur(20px)"
          border="1px solid"
          borderColor="rgba(215, 197, 182, 0.1)"
          borderRadius={{ base: "none", lg: "xl" }}
        />

        <VStack
          spacing={{ base: "8", sm: "10", lg: "12" }}
          align={{ base: "center", lg: "flex-start" }}
          maxW="6xl"
          mx="auto"
        >
          {/* Section Header */}
          <Box textAlign={{ base: "center", lg: "left" }} w="full">
            <GradientText
              className="text-4xl sm:text-5xl lg:text-6xl font-extralight mb-6 text-center lg:text-left"
            >
              {t("reelsTitle")}
            </GradientText>
            <Text
              color={textColor}
              fontSize={{ base: "lg", sm: "xl" }}
              opacity="0.9"
              maxW="3xl"
              mx={{ base: "auto", lg: "0" }}
              textAlign={{ base: "center", lg: "left" }}
              lineHeight="1.6"
            >
              {t("reelsDescription")}
            </Text>
          </Box>

          {/* Video Grid */}
          <SimpleGrid
            columns={{ base: 2, sm: 3, lg: 4, xl: 5 }}
            spacing={{ base: "4", sm: "6", lg: "8" }}
            w="full"
          >
                        {portfolioVideos.map((video) => (
              <InteractiveCard key={video.filename}>
                <Box
                  w="full"
                  h="full"
                  minH={{ base: "200px", sm: "240px", lg: "280px" }}
                  aspectRatio="9/16"
                  cursor="pointer"
                  borderRadius="xl"
                  overflow="hidden"
                  position="relative"
                  bg="brand.accent"
                  border="1px solid"
                  borderColor="rgba(215, 197, 182, 0.2)"
                  transition="all 0.3s ease"
                  onClick={() => handlePlayVideo(video)}
                  _hover={{
                    transform: "translateY(-6px) scale(1.02)",
                    boxShadow: "0 25px 50px rgba(0, 0, 0, 0.4)",
                    borderColor: "brand.lightBrown"
                  }}
                >
                  {/* Video Thumbnail Container */}
                  <Box
                    w="full"
                    h="full"
                    position="relative"
                    overflow="hidden"
                  >
                    {/* Video Icon Badge */}
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
                      <Camera size={20} color="#d7c5b6" />
                    </Box>
                    
                    {/* Actual Video Thumbnail */}
                    {video.thumbnail ? (
                      <Box
                        as="img"
                        src={video.thumbnail}
                        alt={`${video.title} thumbnail`}
                        w="full"
                        h="full"
                        objectFit="cover"
                      />
                    ) : (
                      /* Fallback to placeholder design if no thumbnail */
                      <Box
                        w="full"
                        h="full"
                        bg="linear-gradient(135deg, #2a211c 0%, #3a2f29 50%, #4a3e37 100%)"
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        justifyContent="center"
                        p="4"
                      >
                        {/* Video Camera Icon */}
                        <Box
                          bg="whiteAlpha.100"
                          borderRadius="full"
                          p="4"
                          mb="3"
                          backdropFilter="blur(10px)"
                        >
                          <Camera size={40} color="#d7c5b6" opacity="0.8" />
                        </Box>
                        
                        {/* Video Title - Improved spacing */}
                        <Text 
                          color={textColor} 
                          fontSize="sm"
                          fontWeight="600"
                          textAlign="center"
                          mb="2"
                          maxW="85%"
                          lineHeight="1.2"
                        >
                          {video.title}
                        </Text>
                        
                        {/* Video Subtitle - Better positioning */}
                        {video.subtitle && (
                          <Text 
                            color={textColor} 
                            fontSize="xs"
                            textAlign="center"
                            mb="3"
                            maxW="90%"
                            lineHeight="1.3"
                            opacity="0.8"
                          >
                            {video.subtitle}
                          </Text>
                        )}
                        
                        {/* Client Badge */}
                        <Badge
                          colorScheme="brand"
                          variant="subtle"
                          borderRadius="full"
                          px="2"
                          py="1"
                          fontSize="xs"
                          textTransform="uppercase"
                          letterSpacing="wide"
                          bg="whiteAlpha.200"
                          color={textColor}
                        >
                          {video.client}
                        </Badge>
                      </Box>
                    )}
                    
                    {/* Play Button Overlay */}
                    <Box
                      position="absolute"
                      top="50%"
                      left="50%"
                      transform="translate(-50%, -50%) scale(0.8)"
                      bg="brand.lightBrown"
                      borderRadius="full"
                      p="5"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      transition="all 0.3s ease"
                      _hover={{ transform: "translate(-50%, -50%) scale(1)" }}
                      boxShadow="0 8px 25px rgba(0, 0, 0, 0.3)"
                      zIndex="3"
                    >
                                             <Play size={24} color="#1c1511" fill="#1c1511" />
                    </Box>

                    {/* Glassmorphism Border Effect */}
                    <Box
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      border="2px solid"
                      borderColor="rgba(215, 197, 182, 0.2)"
                      borderRadius="xl"
                      opacity="0.3"
                    />
                  </Box>
                </Box>
              </InteractiveCard>
            ))}
          </SimpleGrid>
        </VStack>
      </Box>

      {/* Video Player Modal - Instagram Reels Style */}
      <Modal isOpen={isOpen} onClose={handleCloseModal} size="full" isCentered motionPreset="slideInBottom">
        <ModalOverlay bg="blackAlpha.900" backdropFilter="blur(20px)" />
        <ModalContent 
          bg="transparent" 
          shadow="none" 
          maxW="100vw"
          maxH="100vh"
          m={0}
          borderRadius={0}
        >
          <ModalCloseButton 
            color="white" 
            bg="blackAlpha.600" 
            _hover={{ bg: "blackAlpha.800" }}
            zIndex="10"
            position="absolute"
            top="4"
            right="4"
            size="lg"
          />
          <ModalBody p={0}>
            {selectedVideo && (
              <Box
                w="full"
                h="100vh"
                display="flex"
                alignItems="center"
                justifyContent="center"
                position="relative"
                bg="black"
              >
                {/* Video Player Container - Vertical Instagram Reels Style */}
                <Box
                  w={{ base: "100vw", md: "400px" }}
                  h={{ base: "100vh", md: "600px" }}
                  maxW="400px"
                  maxH="600px"
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                  bg="black"
                >
                  {isVideoLoading && (
                    <Center
                      position="absolute"
                      top="0"
                      left="0"
                      right="0"
                      bottom="0"
                      bg="blackAlpha.700"
                      borderRadius="xl"
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
                          Loading video...
                        </Text>
                      </VStack>
                    </Center>
                  )}
                  
                  {/* Video Player - Vertical Format */}
                  <video
                    key={selectedVideo.filename}
                    title={selectedVideo.title}
                    src={selectedVideo.src}
                    controls
                    autoPlay
                    style={{ 
                      width: "100%", 
                      height: "100%",
                      objectFit: "contain",
                      border: "none",
                      borderRadius: '0.75rem'
                    }}
                    onLoadedData={() => {
                      console.log("Video loaded successfully:", selectedVideo.title);
                      setIsVideoLoading(false);
                    }}
                    onError={(e) => {
                      console.error("Video loading error:", e);
                      setIsVideoLoading(false);
                    }}
                    onLoadStart={() => {
                      console.log("Video loading started:", selectedVideo.title);
                    }}
                  />

                  {/* Instagram Reels Style Action Buttons - Right Side */}
                  <VStack
                    position="absolute"
                    right="4"
                    bottom="20"
                    spacing={4}
                    zIndex="3"
                  >
                    {/* Like Button with Count */}
                    <VStack spacing={1}>
                      <Button
                        onClick={() => handleLikeToggle(selectedVideo.filename)}
                        variant="ghost"
                        size="lg"
                        p={3}
                        bg="blackAlpha.400"
                        borderRadius="full"
                        _hover={{ bg: "blackAlpha.600" }}
                        transition="all 0.3s ease"
                      >
                        <Heart 
                          size={28} 
                          color={getVideoStats(selectedVideo.filename).likes > 0 ? "#ff3040" : "white"}
                          fill={getVideoStats(selectedVideo.filename).likes > 0 ? "#ff3040" : "none"}
                        />
                      </Button>
                      {getVideoStats(selectedVideo.filename).likes > 0 && (
                        <Text color="white" fontSize="xs" fontWeight="600">
                          {getVideoStats(selectedVideo.filename).likes}
                        </Text>
                      )}
                    </VStack>

                    {/* Comment Button with Count */}
                    <VStack spacing={1}>
                      <Button
                        onClick={() => setShowComments(!showComments)}
                        variant="ghost"
                        size="lg"
                        p={3}
                        bg="blackAlpha.400"
                        borderRadius="full"
                        _hover={{ bg: "blackAlpha.600" }}
                        transition="all 0.3s ease"
                      >
                        <MessageCircle size={28} color="white" />
                      </Button>
                      {getVideoStats(selectedVideo.filename).comments.length > 0 && (
                        <Text color="white" fontSize="xs" fontWeight="600">
                          {getVideoStats(selectedVideo.filename).comments.length}
                        </Text>
                      )}
                    </VStack>

                    {/* Share Button */}
                    <Button
                      onClick={() => handleShare(selectedVideo)}
                      variant="ghost"
                      size="lg"
                      p={3}
                      bg="blackAlpha.400"
                      borderRadius="full"
                      _hover={{ bg: "blackAlpha.600" }}
                      transition="all 0.3s ease"
                    >
                      <Share2 size={28} color="white" />
                    </Button>
                  </VStack>

                  {/* Video Info - Bottom */}
                  <Box
                    position="absolute"
                    bottom="0"
                    left="0"
                    right="0"
                    bg="linear-gradient(transparent, rgba(0,0,0,0.8))"
                    p="6"
                    zIndex="2"
                  >
                    <VStack spacing={3} align="start">
                      {/* Title and Subtitle - Improved layout */}
                      <Box w="full">
                        <Text color="white" fontSize="xl" fontWeight="600" mb="2" lineHeight="1.2">
                          {selectedVideo.title}
                        </Text>
                        {selectedVideo.subtitle && (
                          <Text color="white" fontSize="md" opacity="0.9" mb="3" lineHeight="1.3">
                            {selectedVideo.subtitle}
                          </Text>
                        )}
                        <Badge
                          colorScheme="brand"
                          variant="subtle"
                          borderRadius="full"
                          px="3"
                          py="1"
                          fontSize="xs"
                          textTransform="uppercase"
                          letterSpacing="wide"
                          bg="whiteAlpha.200"
                          color="white"
                        >
                          {selectedVideo.client}
                        </Badge>
                      </Box>

                      {/* Close Button */}
                      <Button
                        onClick={handleCloseModal}
                        variant="ghost"
                        color="white"
                        _hover={{ bg: "whiteAlpha.200" }}
                        size="sm"
                      >
                        Close
                      </Button>
                    </VStack>
                  </Box>

                  {/* Comments Section - Slides in from right */}
                  {showComments && (
                    <Box
                      position="absolute"
                      right="0"
                      top="0"
                      bottom="0"
                      w="300px"
                      bg="blackAlpha.900"
                      backdropFilter="blur(20px)"
                      borderLeft="1px solid"
                      borderColor="whiteAlpha.200"
                      transform="translateX(0)"
                      transition="transform 0.3s ease"
                      zIndex="4"
                      overflowY="auto"
                      p="4"
                    >
                      <VStack spacing={4} align="stretch" h="full">
                        {/* Comments Header */}
                        <Box>
                          <Text color="white" fontSize="lg" fontWeight="600" mb="2">
                            Comments ({getVideoStats(selectedVideo.filename).comments.length})
                          </Text>
                          <Divider borderColor="whiteAlpha.300" />
                        </Box>

                        {/* Comments List */}
                        <Box flex="1" overflowY="auto">
                          {getVideoStats(selectedVideo.filename).comments.length === 0 ? (
                            <Text color="whiteAlpha.600" textAlign="center" py="8">
                              No comments yet. Be the first to comment!
                            </Text>
                          ) : (
                            <VStack spacing={3} align="stretch">
                              {getVideoStats(selectedVideo.filename).comments.map((comment) => (
                                <Box
                                  key={comment.id}
                                  bg="whiteAlpha.100"
                                  p="3"
                                  borderRadius="md"
                                  border="1px solid"
                                  borderColor="whiteAlpha.200"
                                >
                                  <HStack justify="space-between" mb="2">
                                    <HStack spacing={2}>
                                      <Avatar size="xs" name={comment.author} />
                                      <Text color="white" fontSize="sm" fontWeight="600">
                                        {comment.author}
                                      </Text>
                                    </HStack>
                                    <Text color="whiteAlpha.600" fontSize="xs">
                                      {formatTimestamp(comment.timestamp)}
                                    </Text>
                                  </HStack>
                                  <Text color="white" fontSize="sm" lineHeight="1.4">
                                    {comment.text}
                                  </Text>
                                </Box>
                              ))}
                            </VStack>
                          )}
                        </Box>

                        {/* Add Comment Form */}
                        <Box>
                          <Divider borderColor="whiteAlpha.300" mb="3" />
                          <VStack spacing={3}>
                            <Input
                              placeholder="Your name"
                              value={commentAuthor}
                              onChange={(e) => setCommentAuthor(e.target.value)}
                              bg="whiteAlpha.200"
                              border="none"
                              color="white"
                              _placeholder={{ color: "whiteAlpha.600" }}
                              size="sm"
                            />
                            <HStack spacing={2} w="full">
                              <Textarea
                                placeholder="Add a comment..."
                                value={commentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                bg="whiteAlpha.200"
                                border="none"
                                color="white"
                                _placeholder={{ color: "whiteAlpha.600" }}
                                size="sm"
                                resize="none"
                                rows={2}
                              />
                              <Button
                                onClick={() => handleAddComment(selectedVideo.filename)}
                                colorScheme="brand"
                                size="sm"
                                px="4"
                                borderRadius="full"
                              >
                                <Send size={16} />
                              </Button>
                            </HStack>
                          </VStack>
                        </Box>
                      </VStack>
                    </Box>
                  )}
                </Box>
              </Box>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
