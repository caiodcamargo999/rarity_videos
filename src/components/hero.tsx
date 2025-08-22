"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { ProfilePicture } from "./profile-picture";
import { ChevronDown } from "lucide-react";
import { GradientText } from "./gradient-text";


export function Hero() {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
                                       <section className="px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 lg:pt-8 pb-8 sm:pb-12 lg:pb-16">
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "flex-start" }}
                    gap={{ base: "2", lg: "3" }}
        maxW="6xl"
        mx="auto"
      >
        {/* Profile Picture - Left side on desktop, top on mobile */}
        <Box
          order={{ base: 1, lg: 2 }}
          flexShrink={0}
          display="flex"
          justifyContent="center"
          mb={{ base: "6", lg: "0" }}
        >
          <ProfilePicture
            src="/profile_picture_carolina.png"
            alt="Carolina de Abreu"
            size="xl"
          />
        </Box>

                 {/* Content - Right side on desktop, bottom on mobile */}
         <VStack
           order={{ base: 2, lg: 1 }}
           align={{ base: "center", lg: "flex-start" }}
           textAlign={{ base: "center", lg: "left" }}
                       spacing={{ base: "2", sm: "3", lg: "4" }} // Much tighter spacing
           flex="1"
           px={{ base: "6", sm: "8", lg: "0" }}
           w="full" // Full width for proper centering
         >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ width: "100%" }}
          >
                                                                                                                                                                              <GradientText
                             gradient="brown"
                             className="text-8xl sm:text-9xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-extralight leading-tight tracking-tight max-w-6xl"
                           >
                            {t("heroTitle")}
                          </GradientText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ width: "100%" }}
          >
            <Text
              fontSize={{ base: "sm", sm: "base", lg: "lg" }}
              opacity="0.9"
              maxW="3xl"
              lineHeight="1.6"
              color={textColor}
            >
              {t("heroSubtitle")}
            </Text>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ width: "100%" }}
          >
                                       {/* Scroll Indicator */}
              <Box
                textAlign="center" // Always center for mobile-first design
                cursor="pointer"
                onClick={scrollToAbout}
                _hover={{
                  opacity: 0.8,
                  transform: "translateY(-2px)",
                }}
                transition="all 0.3s ease"
                mt={{ base: "3", sm: "4" }}
                w="full" // Full width for proper centering
                position="relative" // CRITICAL: Needed for absolute positioning of arrow
                                 pb="4" // Minimal bottom padding
              >
                               {/* Watch my Work Text */}
                <Text
                  fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} // Bigger, more prominent
                  fontWeight="600" // Bolder for better visibility
                  color={textColor}
                  mb="2" // Tighter spacing
                  letterSpacing="wide"
                  opacity="1"
                  textAlign="center" // Always center
                >
                  {t("ctaWatch")}
                </Text>
               
               {/* Scroll down to explore Text - Right below Watch my Work */}
               <Text
                 fontSize={{ base: "lg", sm: "xl" }} // Good readable size
                 opacity="0.9"
                 color={textColor}
                 fontStyle="italic"
                 fontWeight="300"
                                   mb="1" // Minimal space before arrow
                 textAlign="center" // Always center
               >
                 {t("scrollDownToExplore")}
               </Text>
               
                               {/* Animated Arrow - Centered below the text */}
                <Box
                  position="absolute"
                  bottom="-10px"
                  left="50%"
                  transform="translateX(-50%)"
                  zIndex="9999"
                  display="flex"
                  justifyContent="center"
                >
                  <motion.div
                    animate={{ y: [0, 6, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ChevronDown 
                      size={36} // Even bigger for better visibility
                      color="#d7c5b6" 
                      style={{ opacity: 0.9 }}
                    />
                  </motion.div>
                </Box>
               
               
             </Box>
          </motion.div>
        </VStack>
      </Box>

      
    </section>
  );
}


