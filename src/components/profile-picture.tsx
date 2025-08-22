"use client";

import { Box, Avatar, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";

interface ProfilePictureProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export function ProfilePicture({ src, alt, size = "lg" }: ProfilePictureProps) {
  const borderColor = useColorModeValue("brand.lightBrown", "brand.lightBrown");
  const [imageError, setImageError] = useState(false);
  
  const sizeMap = {
    sm: { base: "80px", sm: "100px", lg: "120px" },
    md: { base: "100px", sm: "120px", lg: "140px" },
    lg: { base: "120px", sm: "140px", lg: "160px" },
    xl: { base: "140px", sm: "160px", lg: "180px" },
  };

  const currentSize = sizeMap[size];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Box
        position="relative"
        display="inline-block"
        borderRadius="full"
        p="3px"
        background={`linear-gradient(135deg, ${borderColor}, transparent)`}
      >
        <Avatar
          src={imageError ? undefined : src}
          name={alt}
          size="full"
          width={currentSize}
          height={currentSize}
          borderRadius="full"
          border="4px solid"
          borderColor="transparent"
          _hover={{
            transform: "scale(1.05)",
            transition: "transform 0.3s ease",
          }}
          onError={() => setImageError(true)}
        />
      </Box>
    </motion.div>
  );
}
