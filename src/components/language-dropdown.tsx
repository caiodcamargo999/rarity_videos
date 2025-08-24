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

export function LanguageDropdown() {
  const { setLocale, locale } = useI18n();
  const textColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");

  return (
    <Box>
      {/* Language Switcher - roobinium.io style (exact same as header) */}
      <Menu>
        <MenuButton
          as={Button}
          variant="outline"
          size={{ base: "sm", sm: "md" }}
          aria-label="Change language"
          bg="transparent"
          borderColor="rgba(215, 197, 182, 0.3)"
          color={textColor}
          _hover={{
            bg: "rgba(215, 197, 182, 0.1)",
            borderColor: "rgba(215, 197, 182, 0.5)",
            transform: "translateY(-2px)",
          }}
          _active={{
            bg: "rgba(215, 197, 182, 0.2)",
          }}
          transition="all 0.3s ease"
          px={4}
          py={2}
          borderRadius="lg"
          backdropFilter="blur(10px)"
        >
          <HStack spacing={2}>
            <Icon as={Globe} w={{ base: "4", sm: "5" }} h={{ base: "4", sm: "5" }} />
            <Text fontSize={{ base: "sm", sm: "md" }} fontWeight="500">
              {languages.find(l => l.code === locale)?.label}
            </Text>
          </HStack>
        </MenuButton>
        <MenuList
          bg="rgba(42, 33, 28, 0.95)"
          border="1px solid"
          borderColor="rgba(215, 197, 182, 0.2)"
          minW="48"
          backdropFilter="blur(20px)"
          boxShadow="0 25px 50px rgba(0, 0, 0, 0.5)"
          borderRadius="xl"
          py={2}
        >
          {languages.map((l) => (
                         <MenuItem
               key={l.code}
               onClick={() => setLocale(l.code as "en" | "pt" | "es" | "ar")}
               bg="transparent"
               color={l.code === locale ? "brand.lightBrown" : "rgba(215, 197, 182, 0.8)"}
               _hover={{
                 bg: "rgba(215, 197, 182, 0.1)",
               }}
               transition="all 0.2s ease"
               borderRadius="lg"
               mx={1}
               py={2}
               position="relative"
               _before={{
                 content: '""',
                 position: "absolute",
                 top: "0",
                 left: "0",
                 right: "0",
                 bottom: "0",
                 bg: l.code === locale ? "rgba(215, 197, 182, 0.2)" : "transparent",
                 borderRadius: "lg",
                 zIndex: "-1"
               }}
             >
              <HStack spacing={3} w="full">
                <Box
                  w="2"
                  h="2"
                  borderRadius="full"
                  bg={l.code === locale ? "brand.lightBrown" : "rgba(215, 197, 182, 0.4)"}
                />
                <Text fontWeight={l.code === locale ? "600" : "400"}>
                  {l.label}
                </Text>
              </HStack>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
}
