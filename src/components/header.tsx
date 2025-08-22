"use client";

import { useI18n } from "@/lib/i18n";
import { Box, HStack, Text, Button, Menu, MenuButton, MenuList, MenuItem, Icon, useColorModeValue } from "@chakra-ui/react";
import { Globe } from "lucide-react";

const languages = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
  { code: "ar", label: "العربية" },
];

export function Header() {
  const { t, setLocale, locale } = useI18n();
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
        
        <Menu>
          <MenuButton
            as={Button}
            variant="ghost"
            size={{ base: "md", sm: "lg" }}
            aria-label="Change language"
            _hover={{
              bg: "whiteAlpha.100",
              transform: "scale(1.05)",
            }}
            transition="all 0.2s ease"
          >
            <Icon as={Globe} w={{ base: "5", sm: "6" }} h={{ base: "5", sm: "6" }} />
          </MenuButton>
          <MenuList
            bg="brand.accent"
            border="1px solid"
            borderColor="whiteAlpha.200"
            minW="48"
          >
            {languages.map((l) => (
              <MenuItem
                key={l.code}
                onClick={() => setLocale(l.code as any)}
                bg={l.code === locale ? "brand.lightBrown" : "transparent"}
                color={l.code === locale ? "brand.darkBrown" : "brand.lightBrown"}
                _hover={{
                  bg: l.code === locale ? "brand.lightBrown" : "whiteAlpha.100",
                }}
                transition="all 0.2s ease"
              >
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={l.code === locale ? "brand.lightBrown" : "brand.accent"}
                  mr="3"
                />
                {l.label}
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
}


