"use client";

import { useI18n } from "@/lib/i18n";
import { Box, HStack, Text, useColorModeValue } from "@chakra-ui/react";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const { t } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const bgColor = useColorModeValue("brand.darkBrown", "brand.darkBrown");

  return (
    <Box
      as="header"
      w="full"
      px={{ base: "4", sm: "6", lg: "8" }}
      py={{ base: "6", sm: "8" }}
      bg={bgColor}
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <HStack justify="space-between" align="center" maxW="6xl" mx="auto">
        <Text
          fontSize={{ base: "lg", sm: "xl", lg: "2xl" }}
          fontWeight="200"
          letterSpacing="wide"
          color={textColor}
          opacity="0.9"
        >
          {t("name")}
        </Text>
        
        <HStack spacing={4}>
          <LanguageSwitcher />
        </HStack>
      </HStack>
    </Box>
  );
}