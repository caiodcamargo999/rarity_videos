"use client";

import { useI18n } from "@/lib/i18n";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  VStack,
  HStack,
  Text,
  Input,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast,
  Box,
  Badge,
  Icon,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import { Plane, Heart, Send, CheckCircle } from "lucide-react";

interface TravelWellnessForm {
  aspirations: string;
  name: string;
  email: string;
  whatsapp: string;
}

export function TravelWellnessModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, locale } = useI18n();
  const toast = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<TravelWellnessForm>({
    aspirations: "",
    name: "",
    email: "",
    whatsapp: "",
  });
  const [errors, setErrors] = useState<Partial<TravelWellnessForm>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<TravelWellnessForm> = {};

    if (!formData.aspirations.trim()) {
      newErrors.aspirations = "This field is required";
    }
    if (!formData.name.trim()) {
      newErrors.name = "This field is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "This field is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.whatsapp.trim()) {
      newErrors.whatsapp = "This field is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Submit form data to API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          locale
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const result = await response.json();
      console.log('Form submitted successfully:', result);

      // Send WhatsApp message
      const whatsappMessage = encodeURIComponent(
        locale === 'pt' ? 'Oi Carol, acabei de preencher o formulário sobre viagens e bem estar' :
        locale === 'es' ? 'Hola Carol, acabo de llenar el formulario sobre viajes y bienestar' :
        locale === 'ar' ? 'مرحباً كارول، لقد ملأت للتو النموذج حول السفر والعافية' :
        'Hey Carol, I just filled the form about travel and wellness'
      );
      
      const whatsappUrl = `https://wa.me/212777521023?text=${whatsappMessage}`;
      window.open(whatsappUrl, '_blank');

      setIsSubmitted(true);
      toast({
        title: t("formSubmitted"),
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ aspirations: "", name: "", email: "", whatsapp: "" });
        setErrors({});
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting form",
        description: "Please try again later",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof TravelWellnessForm, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
        <ModalContent 
          bg="brand.accent" 
          border="1px solid" 
          borderColor="whiteAlpha.200"
          maxW="500px"
        >
          <ModalBody p="8">
            <Center>
              <VStack spacing="6" textAlign="center">
                <Icon as={CheckCircle} w="16" h="16" color="green.400" />
                <Text fontSize="2xl" fontWeight="600" color="brand.lightBrown">
                  {t("formSubmitted")}
                </Text>
                <Text color="brand.lightBrown" opacity="0.8">
                  Carolina will contact you soon to discuss your travel and wellness goals!
                </Text>
                <Button
                  onClick={onClose}
                  bg="brand.lightBrown"
                  color="brand.darkBrown"
                  _hover={{ bg: "whiteAlpha.900" }}
                >
                  Close
                </Button>
              </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="2xl" isCentered>
      <ModalOverlay bg="blackAlpha.800" backdropFilter="blur(10px)" />
      <ModalContent 
        bg="brand.accent" 
        border="1px solid" 
        borderColor="whiteAlpha.200"
        maxW="600px"
      >
        <ModalHeader 
          borderBottom="1px solid" 
          borderColor="whiteAlpha.200"
          pb="4"
        >
                     <VStack spacing="3" align="start">
             <Text fontSize="2xl" fontWeight="600" color="brand.lightBrown">
               {t("travelWellnessTitle")}
             </Text>
             <Text fontSize="md" color="brand.lightBrown" opacity="0.8">
               {t("travelWellnessSubtitle")}
             </Text>
           </VStack>
        </ModalHeader>

        <ModalCloseButton 
          color="brand.lightBrown" 
          bg="blackAlpha.600" 
          _hover={{ bg: "blackAlpha.800" }}
        />

        <ModalBody p="8">
          <VStack spacing="6" align="stretch">
            {/* Aspirations Question */}
            <FormControl isInvalid={!!errors.aspirations}>
              <FormLabel color="brand.lightBrown" fontSize="lg" fontWeight="500">
                {t("aspirationsQuestion")}
              </FormLabel>
              <Textarea
                value={formData.aspirations}
                onChange={(e) => handleInputChange("aspirations", e.target.value)}
                placeholder="Share your dreams and goals..."
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="brand.lightBrown"
                _placeholder={{ color: "whiteAlpha.400" }}
                _focus={{ borderColor: "brand.lightBrown" }}
                rows={4}
              />
              <FormErrorMessage>{errors.aspirations}</FormErrorMessage>
            </FormControl>

            {/* Name Question */}
            <FormControl isInvalid={!!errors.name}>
              <FormLabel color="brand.lightBrown" fontSize="lg" fontWeight="500">
                {t("nameQuestion")}
              </FormLabel>
              <Input
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Your full name"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="brand.lightBrown"
                _placeholder={{ color: "whiteAlpha.400" }}
                _focus={{ borderColor: "brand.lightBrown" }}
              />
              <FormErrorMessage>{errors.name}</FormErrorMessage>
            </FormControl>

            {/* Email Question */}
            <FormControl isInvalid={!!errors.email}>
              <FormLabel color="brand.lightBrown" fontSize="lg" fontWeight="500">
                {t("emailQuestion")}
              </FormLabel>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="your.email@example.com"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="brand.lightBrown"
                _placeholder={{ color: "whiteAlpha.400" }}
                _focus={{ borderColor: "brand.lightBrown" }}
              />
              <FormErrorMessage>{errors.email}</FormErrorMessage>
            </FormControl>

            {/* WhatsApp Question */}
            <FormControl isInvalid={!!errors.whatsapp}>
              <FormLabel color="brand.lightBrown" fontSize="lg" fontWeight="500">
                {t("whatsappQuestion")}
              </FormLabel>
              <Input
                value={formData.whatsapp}
                onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                placeholder="+1 (555) 123-4567"
                bg="whiteAlpha.100"
                border="1px solid"
                borderColor="whiteAlpha.200"
                color="brand.lightBrown"
                _placeholder={{ color: "whiteAlpha.400" }}
                _focus={{ borderColor: "brand.lightBrown" }}
              />
              <FormErrorMessage>{errors.whatsapp}</FormErrorMessage>
              <Text fontSize="xs" color="brand.lightBrown" opacity="0.7" mt="1">
                Include country code (e.g., +1 for US, +44 for UK, +55 for Brazil)
              </Text>
            </FormControl>

                        {/* Submit Button - Always visible but with different states */}
            <Button
              onClick={formData.aspirations.trim() && 
                       formData.name.trim() && 
                       formData.email.trim() && 
                       formData.whatsapp.trim() ? handleSubmit : undefined}
              isLoading={isSubmitting}
              loadingText="Submitting..."
              leftIcon={<Icon as={Send} />}
              bg={formData.aspirations.trim() && 
                  formData.name.trim() && 
                  formData.email.trim() && 
                  formData.whatsapp.trim() 
                    ? "brand.lightBrown" 
                    : "whiteAlpha.100"}
              color={formData.aspirations.trim() && 
                     formData.name.trim() && 
                     formData.email.trim() && 
                     formData.whatsapp.trim() 
                       ? "brand.darkBrown" 
                       : "whiteAlpha.400"}
              size="lg"
              py="6"
              fontSize="lg"
              fontWeight="600"
              cursor={formData.aspirations.trim() && 
                      formData.name.trim() && 
                      formData.email.trim() && 
                      formData.whatsapp.trim() 
                        ? "pointer" 
                        : "not-allowed"}
              opacity={formData.aspirations.trim() && 
                      formData.name.trim() && 
                      formData.email.trim() && 
                      formData.whatsapp.trim() 
                        ? 1 
                        : 0.6}
              _hover={formData.aspirations.trim() && 
                      formData.name.trim() && 
                      formData.email.trim() && 
                      formData.whatsapp.trim() 
                        ? { 
                            bg: "whiteAlpha.900",
                            transform: "translateY(-2px)",
                            boxShadow: "0 10px 25px rgba(215, 197, 182, 0.3)"
                          }
                        : {}}
              _active={formData.aspirations.trim() && 
                       formData.name.trim() && 
                       formData.email.trim() && 
                       formData.whatsapp.trim() 
                         ? { transform: "scale(0.98)" }
                         : {}}
              transition="all 0.3s ease"
            >
              {t("submitForm")}
            </Button>


          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
