"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Box, VStack, HStack, Text, useColorModeValue, Button } from "@chakra-ui/react";
import { ProfilePicture } from "./profile-picture";
import { ResponsiveFloatingVideo } from "./floating-video";
import { ChevronDown } from "lucide-react";
import { GradientText } from "./gradient-text";
import { Instagram, Linkedin } from "lucide-react";

export function Hero() {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
         <section className="px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24">
      <Box
        display="flex"
        flexDirection={{ base: "column", lg: "row" }}
        alignItems={{ base: "center", lg: "flex-start" }}
        gap={{ base: "8", lg: "12" }}
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
           spacing={{ base: "6", sm: "8", lg: "10" }} // Increased spacing for better mobile layout
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
                            className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extralight leading-tight tracking-tight max-w-6xl"
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
               mt={{ base: "8", sm: "10" }}
               w="full" // Full width for proper centering
             >
               {/* Watch my Work Text */}
               <Text
                 fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} // Bigger, more prominent
                 fontWeight="400" // Bolder for better visibility
                 color={textColor}
                 mb="3" // Proper spacing
                 letterSpacing="wide"
                 opacity="1"
                 textAlign="center" // Always center
               >
                 Watch my Work
               </Text>
               
               {/* Scroll down to explore Text - Right below Watch my Work */}
               <Text
                 fontSize={{ base: "lg", sm: "xl" }} // Good readable size
                 opacity="0.9"
                 color={textColor}
                 fontStyle="italic"
                 fontWeight="300"
                 mb="4" // Space before arrow
                 textAlign="center" // Always center
               >
                 Scroll down to explore
               </Text>
               
               {/* Animated Arrow - Centered below the text */}
               <motion.div
                 animate={{ y: [0, 6, 0] }}
                 transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                 display="flex"
                 justifyContent="center" // Always center
                 mb="2"
               >
                 <ChevronDown 
                   size={28} // Slightly bigger for better visibility
                   color="#d7c5b6" 
                   style={{ opacity: 0.8 }}
                 />
               </motion.div>
               
               {/* Social Media Buttons */}
               <HStack spacing="4" mt="6" justify="center">
                 <Button
                   as="a"
                   href="https://www.instagram.com/carolina_de_abreu"
                   target="_blank"
                   rel="noopener noreferrer"
                   leftIcon={<Instagram size={20} />}
                   bg="brand.lightBrown"
                   color="brand.darkBrown"
                   _hover={{
                     bg: "brand.accent",
                     transform: "translateY(-2px)",
                   }}
                   transition="all 0.3s ease"
                   size="lg"
                   borderRadius="full"
                   px="6"
                 >
                   Instagram
                 </Button>
                 
                 <Button
                   as="a"
                   href="https://www.linkedin.com/in/carolina-de-abreu"
                   target="_blank"
                   rel="noopener noreferrer"
                   leftIcon={<Linkedin size={20} />}
                   variant="outline"
                   borderColor="brand.lightBrown"
                   color="brand.lightBrown"
                   _hover={{
                     bg: "brand.lightBrown",
                     color: "brand.darkBrown",
                     transform: "translateY(-2px)",
                   }}
                   transition="all 0.3s ease"
                   size="lg"
                   borderRadius="full"
                   px="6"
                 >
                   LinkedIn
                 </Button>
               </HStack>
             </Box>
          </motion.div>
        </VStack>
      </Box>

      
    </section>
  );
}


