"use client";

import { motion, Variants } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { Box, Text } from "@chakra-ui/react";

const MotionBox = motion(Box);

const missionVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 400, damping: 25, delay: 0.2 } 
  },
};

export function BioMission() {
  const { t } = useI18n();
  
  return (
    <MotionBox
      as="section"
      w="full"
      p={6}
      textAlign="center"
      bg="brand.accent"
      borderWidth="1px"
      borderColor="rgba(215, 197, 182, 0.1)"
      borderRadius="lg"
      variants={missionVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        y: -2,
        boxShadow: "0 0 20px rgba(215, 197, 182, 0.15)",
        borderColor: "rgba(215, 197, 182, 0.25)",
      }}
      transition={{ duration: 0.2 }}
    >
      <Text
        color="muted.foreground"
        fontStyle="italic"
        fontWeight="light"
        fontSize="md"
        lineHeight="tall"
        maxW="3xl"
        mx="auto"
      >
        {t("bioMission")}
      </Text>
    </MotionBox>
  );
}
