"use client";

import { motion, Variants } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { VStack, Heading, Text, Avatar } from "@chakra-ui/react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, duration: 0.4, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
};

const MotionVStack = motion(VStack);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionAvatar = motion(Avatar);

export function BioProfile() {
  const { t } = useI18n();
  
  return (
    <MotionVStack
      as="header"
      spacing={6}
      textAlign="center"
      w="full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionAvatar
        name="Carolina Abreu"
        src="/profile_new.png"
        size="xl"
        borderWidth="2px"
        borderColor="rgba(215, 197, 182, 0.2)"
        variants={itemVariants}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 0 20px rgba(215, 197, 182, 0.15)",
        }}
        transition={{ duration: 0.2 }}
      />
      
      <VStack spacing={2}>
        <MotionHeading
          as="h1"
          fontWeight="semibold"
          size="2xl"
          letterSpacing="-0.02em"
          color="brand.lightBrown"
          variants={itemVariants}
        >
          Carolina Abreu
        </MotionHeading>
        
        <MotionText
          color="muted.foreground"
          fontStyle="italic"
          maxW="xl"
          fontSize="md"
          variants={itemVariants}
        >
          {t("bioMotto")}
        </MotionText>
      </VStack>
    </MotionVStack>
  );
}
