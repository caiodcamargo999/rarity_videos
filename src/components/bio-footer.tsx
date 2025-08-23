"use client";

import { motion, Variants } from "framer-motion";
import { useI18n } from "@/lib/i18n";
import { VStack, Text, Link, Icon } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

const MotionVStack = motion(VStack);
const MotionLink = motion(Link);
const MotionText = motion(Text);

const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 }
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
};

export function BioFooter() {
  const { t } = useI18n();
  
  return (
    <MotionVStack
      as="footer"
      w="full"
      spacing={4}
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <MotionLink
        href="https://www.instagram.com/carolldeabreu"
        isExternal
        aria-label="Instagram"
        variants={itemVariants}
        _hover={{
          transform: "scale(1.05)",
          filter: "drop-shadow(0 0 8px rgba(215, 197, 182, 0.25))",
        }}
        transition={{ duration: 0.2 }}
      >
        <Icon as={FaInstagram} boxSize={8} color="brand.lightBrown" />
      </MotionLink>
      
      <MotionText
        color="muted.foreground"
        fontSize="sm"
        fontWeight="light"
        variants={itemVariants}
      >
        © 2025 Carolina Abreu. {t("bioCopyright")}
      </MotionText>
    </MotionVStack>
  );
}
