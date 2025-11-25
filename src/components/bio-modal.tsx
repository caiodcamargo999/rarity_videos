"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";
import {
  Box, 
  Button, 
  Text, 
  VStack, 
  HStack,
  Icon,
  Flex
} from "@chakra-ui/react";
import { TravelWellnessModal } from "./travel-wellness-modal";
import { useI18n } from "@/lib/i18n";

interface BioModalProps {
  type: "realEstate" | "travel";
  isOpen: boolean;
  onClose: () => void;
}

export function BioModal({ type, isOpen, onClose }: BioModalProps) {
  const { t } = useI18n();
  const [showTravelWellnessModal, setShowTravelWellnessModal] = useState(false);

  const textColor = "brand.lightBrown";
  const mutedTextColor = "muted.foreground";

  const handleRealEstateOption = (option: string) => {
    let message = '';
    
    switch (option) {
      case "bali":
        message = t("whatsappBaliMessage");
        break;
      case "dubai":
        message = t("whatsappDubaiMessage");
        break;
      case "brazil":
        message = t("whatsappBrazilMessage");
        break;
      default:
        message = t("whatsappBaliMessage"); // Fallback to Bali message
    }
    
    const whatsappUrl = `https://wa.me/5548991660364?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    onClose();
  };



  const modalContent = {
    realEstate: {
      title: t("realEstateModalTitle"),
      subtitle: t("realEstateModalSubtitle"),
      content: (
        <VStack spacing={4} w="full">
          <Button
            onClick={() => handleRealEstateOption("bali")}
            w="full"
            p={6}
            bg="brand.accent"
            border="1px solid"
            borderColor="border"
            borderRadius="xl"
            _hover={{
              borderColor: "brand.lightBrown",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
            _active={{ transform: "scale(0.98)" }}
            h="auto"
            transition="all 0.3s ease"
            display="flex"
            alignItems="center"
          >
            <Flex direction="column" align="start" textAlign="left" w="full">
              <HStack spacing={4} align="center" mb={2}>
                <Text fontSize="2xl">🇮🇩</Text>
                <Text fontSize="lg" fontWeight="400" color={textColor}>
                  {t("baliTitle")}
                </Text>
              </HStack>
              <Text 
                fontSize="sm" 
                fontWeight="300" 
                color={mutedTextColor}
                lineHeight="1.6"
                whiteSpace="normal"
                textAlign="left"
              >
                {t("baliDescription")}
              </Text>
            </Flex>
          </Button>
          
          <Button
            onClick={() => handleRealEstateOption("dubai")}
            w="full"
            p={6}
            bg="brand.accent"
            border="1px solid"
            borderColor="border"
            borderRadius="xl"
            _hover={{
              borderColor: "brand.lightBrown",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
            _active={{ transform: "scale(0.98)" }}
            h="auto"
            transition="all 0.3s ease"
            display="flex"
            alignItems="center"
          >
            <Flex direction="column" align="start" textAlign="left" w="full">
              <HStack spacing={4} align="center" mb={2}>
                <Text fontSize="2xl">🇦🇪</Text>
                <Text fontSize="lg" fontWeight="400" color={textColor}>
                  {t("dubaiTitle")}
                </Text>
              </HStack>
              <Text 
                fontSize="sm" 
                fontWeight="300" 
                color={mutedTextColor}
                lineHeight="1.6"
                whiteSpace="normal"
                textAlign="left"
              >
                {t("dubaiDescription")}
              </Text>
            </Flex>
          </Button>

          <Button
            onClick={() => handleRealEstateOption("brazil")}
            w="full"
            p={6}
            bg="brand.accent"
            border="1px solid"
            borderColor="border"
            borderRadius="xl"
            _hover={{
              borderColor: "brand.lightBrown",
              transform: "translateY(-2px)",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
            }}
            _active={{ transform: "scale(0.98)" }}
            h="auto"
            transition="all 0.3s ease"
            display="flex"
            alignItems="center"
          >
            <Flex direction="column" align="start" textAlign="left" w="full">
              <HStack spacing={4} align="center" mb={2}>
                <Text fontSize="2xl">🇧🇷</Text>
                <Text fontSize="lg" fontWeight="400" color={textColor}>
                  {t("brazilTitle")}
                </Text>
              </HStack>
              <Text 
                fontSize="sm" 
                fontWeight="300" 
                color={mutedTextColor}
                lineHeight="1.6"
                whiteSpace="normal"
                textAlign="left"
              >
                {t("brazilDescription")}
              </Text>
            </Flex>
          </Button>
        </VStack>
      )
    },
    travel: {
      title: t("travelWellnessModalTitle"),
      subtitle: t("travelWellnessModalSubtitle"),
      content: (
        <VStack spacing={6} w="full">
          <Text 
            fontSize="sm" 
            color={mutedTextColor}
            lineHeight="1.6"
            textAlign="center"
            mb={4}
          >
            {t("travelWellnessModalDescription")}
          </Text>
          
          <Button
            onClick={() => setShowTravelWellnessModal(true)}
            w="full"
            bg="brand.lightBrown"
            color="brand.darkBrown"
            py={6}
            px="8"
            borderRadius="xl"
            fontWeight="500"
            fontSize="lg"
            _hover={{
              bg: "rgba(215, 197, 182, 0.9)",
              transform: "translateY(-2px)",
              boxShadow: "0 8px 25px rgba(215, 197, 182, 0.3)",
            }}
            _active={{ transform: "scale(0.98)" }}
            transition="all 0.3s ease"
          >
            {t("startConsultation")}
          </Button>
        </VStack>
      )
    }
  };

  return (
    <>
      <TravelWellnessModal 
        isOpen={showTravelWellnessModal} 
        onClose={() => setShowTravelWellnessModal(false)} 
      />
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              backdropFilter: "blur(10px)",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",
            }}
            onClick={onClose}
          >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              background: "linear-gradient(135deg, #1c1511, #2a211c)",
              border: "1px solid var(--border)",
              borderRadius: "1.25rem",
              padding: "2rem",
              maxWidth: "32rem",
              width: "100%",
              maxHeight: "90vh",
              overflowY: "auto",
              boxShadow: "0 20px 45px rgba(0, 0, 0, 0.4)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <HStack justify="space-between" align="flex-start" mb={6}>
              <Box flex="1" pr={4}>
                <Text 
                  fontSize="xl" 
                  fontWeight="300" 
                  color={textColor} 
                  mb={2}
                  lineHeight="1.3"
                >
                  {modalContent[type].title}
                </Text>
                <Text 
                  color={mutedTextColor} 
                  fontWeight="300"
                  fontSize="sm"
                  lineHeight="1.6"
                >
                  {modalContent[type].subtitle}
                </Text>
              </Box>
              
              <Button
                onClick={onClose}
                p={2}
                bg="rgba(255, 255, 255, 0.05)"
                borderRadius="md"
                _hover={{ 
                  bg: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.05)",
                }}
                minW="auto"
                h="auto"
                transition="all 0.2s ease"
              >
                <Icon as={X} w={5} h={5} color={mutedTextColor} />
              </Button>
            </HStack>

            {/* Content */}
            <Box w="full">
              {modalContent[type].content}
            </Box>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
}
