"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Box, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { GradientText } from "./gradient-text";

export function About() {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.accent", "brand.accent");

  return (
    <Box
      as="section"
      id="about"
      px={{ base: "6", sm: "8", lg: "8" }}
      py={{ base: "16", sm: "20", lg: "24" }}
      bg={bgColor}
      borderRadius={{ base: "none", lg: "xl" }}
      mx={{ base: "0", lg: "4" }}
    >
      <VStack
        spacing={{ base: "6", sm: "8", lg: "10" }}
        align={{ base: "center", lg: "flex-start" }}
        textAlign={{ base: "center", lg: "left" }}
        maxW="6xl"
        mx="auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ width: "100%" }}
        >
          <GradientText
            gradient="copper"
            className="text-5xl sm:text-6xl lg:text-7xl font-extralight tracking-wide text-center lg:text-left mb-6 sm:mb-8 px-4 sm:px-0"
          >
            {t("aboutTitle")}
          </GradientText>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ width: "100%" }}
        >
          <Text
            fontSize={{ base: "sm", sm: "base", lg: "lg" }}
            color={textColor}
            opacity="0.9"
            lineHeight="1.8"
            maxW="4xl"
            textAlign={{ base: "center", lg: "left" }}
          >
            {t("aboutBody")}
          </Text>
        </motion.div>
      </VStack>
    </Box>
  );
}


