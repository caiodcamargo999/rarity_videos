"use client";

import { motion } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Box, VStack, Heading, HStack, Button, useColorModeValue } from "@chakra-ui/react";

export function Contact() {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.darkBrown", "brand.darkBrown");

  return (
    <Box
      as="section"
      px={{ base: "4", sm: "6", lg: "8" }}
      py={{ base: "16", sm: "20", lg: "24" }}
      bg={bgColor}
      textAlign="center"
    >
      <VStack
        spacing={{ base: "8", sm: "10", lg: "12" }}
        maxW="6xl"
        mx="auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Heading
            as="h2"
            size={{ base: "lg", sm: "xl", lg: "2xl" }}
            fontWeight="200"
            letterSpacing="wide"
            color={textColor}
          >
            {t("contactTitle")}
          </Heading>
        </motion.div>

        <HStack
          spacing={{ base: "4", sm: "6" }}
          justify="center"
          flexWrap="wrap"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <Button
              size={{ base: "md", sm: "lg" }}
              bg="brand.lightBrown"
              color="brand.darkBrown"
              borderRadius="full"
              px={{ base: "6", sm: "8", lg: "10" }}
              py={{ base: "3", sm: "4" }}
              fontSize={{ base: "sm", sm: "base", lg: "lg" }}
              _hover={{
                opacity: 0.9,
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
              as="a"
              href="https://www.instagram.com/carolldeabreu/"
              target="_blank"
              rel="noreferrer"
            >
              {t("instagram")}
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button
              size={{ base: "md", sm: "lg" }}
              variant="outline"
              borderColor="brand.lightBrown"
              color="brand.lightBrown"
              borderRadius="full"
              px={{ base: "6", sm: "8", lg: "10" }}
              py={{ base: "3", sm: "4" }}
              fontSize={{ base: "sm", sm: "base", lg: "lg" }}
              _hover={{
                bg: "brand.lightBrown",
                color: "brand.darkBrown",
                transform: "translateY(-2px)",
                boxShadow: "lg",
              }}
              transition="all 0.3s ease"
              as="a"
              href="https://www.linkedin.com/in/carolinaabreu9/"
              target="_blank"
              rel="noreferrer"
            >
              {t("linkedin")}
            </Button>
          </motion.div>
        </HStack>
      </VStack>
    </Box>
  );
}


