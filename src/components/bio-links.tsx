"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";
import { BioModal } from "./bio-modal";
import { useI18n } from "@/lib/i18n";
import { Box, VStack, Heading, Text, Flex, Icon } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

const MotionBox = motion(Box);
const MotionVStack = motion(VStack);

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 400, damping: 25 } },
};

interface LinkCardData {
  id: string;
  title: string;
  description: string;
  cta: string;
  type: "link" | "modal";
  href?: string;
  modalType?: "realEstate" | "travel";
}

export function BioLinks() {
  const { t } = useI18n();
  const [activeModal, setActiveModal] = useState<"realEstate" | "travel" | null>(null);

  const linkCards: LinkCardData[] = [
    {
      id: "rarity",
      title: t("bioTitle"),
      description: t("bioRarityDesc"),
      cta: t("bioVisitAgency"),
      type: "link",
      href: "https://rarityagency.io"
    },
    {
      id: "realEstate",
      title: t("bioRealEstate"),
      description: t("bioRealEstateDesc"),
      cta: t("bioContactNow"),
      type: "modal",
      modalType: "realEstate"
    },
    {
      id: "travel",
      title: t("bioTravel"),
      description: t("bioTravelDesc"),
      cta: t("bioLearnMore"),
      type: "modal",
      modalType: "travel"
    }
  ];

  const handleCardClick = (card: LinkCardData) => {
    if (card.type === "link" && card.href) {
      window.open(card.href, "_blank", "noopener,noreferrer");
    } else if (card.type === "modal" && card.modalType) {
      setActiveModal(card.modalType);
    }
  };

  return (
    <Box as="section" w="full">
      <MotionVStack
        spacing={4}
        w="full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {linkCards.map((card) => (
          <MotionBox
            key={card.id}
            as="button"
            onClick={() => handleCardClick(card)}
            w="full"
            textAlign="left"
            p={6}
            bg="brand.accent"
            borderWidth="1px"
            borderColor="rgba(215, 197, 182, 0.1)"
            borderRadius="lg"
            variants={cardVariants}
            whileHover={{
              y: -2,
              boxShadow: "0 0 20px rgba(215, 197, 182, 0.15)",
              borderColor: "rgba(215, 197, 182, 0.25)",
            }}
            transition={{ duration: 0.2 }}
            _focus={{ outline: "none" }}
          >
            <VStack align="start" spacing={3}>
              <Heading
                as="h2"
                fontWeight="semibold"
                size="md"
                color="brand.lightBrown"
              >
                {card.title}
              </Heading>

              <Text
                color="muted.foreground"
                fontSize="sm"
                lineHeight="base"
              >
                {card.description}
              </Text>

              <Flex align="center" color="brand.lightBrown" fontWeight="medium" fontSize="sm">
                <Text>{card.cta}</Text>
                <Icon as={FiArrowRight} ml={2} />
              </Flex>
            </VStack>
          </MotionBox>
        ))}
      </MotionVStack>

      {activeModal && (
        <BioModal
          type={activeModal}
          isOpen={!!activeModal}
          onClose={() => setActiveModal(null)}
        />
      )}
    </Box>
  );
}
