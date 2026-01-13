"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Cal, { getCalApi } from "@calcom/embed-react";
import { submitToTrello } from "@/app/actions/trello";

// --- Types & Schemas ---

const step1Schema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    whatsapp: z.string().min(10, "WhatsApp precisa ter DDD + número"),
    email: z.string().email("Email inválido"),
    businessName: z.string().min(2, "Nome do negócio é obrigatório"),
    instagram: z.string().min(2, "@ do Instagram é obrigatório"),
    niche: z.string().min(2, "Diga seu nicho"),
});

type Step1Data = z.infer<typeof step1Schema>;

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
}

// --- Component ---

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
    // Steps: 
    // 1-6: Data Collection
    // 7: Cal.com Embed
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<Partial<Step1Data>>({});
    const [submitting, setSubmitting] = useState(false);

    const { register, trigger, getValues, formState: { errors } } = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        mode: "onChange"
    });

    const totalSteps = 7;

    // Initialize Cal.com UI settings 
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "call-estrategica-com-o-caio" });
            cal("ui", { "theme": "dark", "cssVarsPerTheme": { "dark": { "cal-brand": "#4eb85d" }, "light": { "cal-brand": "#4eb85d" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);

    const nextStep = async (fieldToValidate: keyof Step1Data) => {
        const isValid = await trigger(fieldToValidate);
        if (isValid) {
            const currentVal = getValues(fieldToValidate);
            setFormData(prev => ({ ...prev, [fieldToValidate]: currentVal }));

            // If we are at the last data step (Step 6), submit to Trello
            if (currentStep === 6) {
                await handleTrelloSubmission({ ...formData, [fieldToValidate]: currentVal });
            } else {
                setCurrentStep(prev => prev + 1);
            }
        }
    };

    const handleTrelloSubmission = async (finalData: any) => {
        setSubmitting(true);
        try {
            const res = await submitToTrello(finalData);
            if (res.success) {
                setCurrentStep(7);
            } else {
                console.error("Trello Error:", res.error);
                alert("Ocorreu um erro ao salvar seus dados. Por favor, tente novamente.");
            }
        } catch (error) {
            console.error(error);
            alert("Erro de conexão.");
        } finally {
            setSubmitting(false);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    // Helper to render input field
    const renderInput = (
        field: keyof Step1Data,
        label: string,
        placeholder: string,
        type: string = "text",
        subLabel?: string
    ) => (
        <motion.div
            key={field}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -20, opacity: 0 }}
            className="flex flex-col gap-4"
        >
            <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                    {label} <span className="text-rarity-lavender">.*</span>
                </h3>
                {subLabel && <p className="text-white/60 mb-4">{subLabel}</p>}
            </div>

            <input
                {...register(field)}
                type={type}
                autoFocus
                onKeyDown={(e) => e.key === 'Enter' && nextStep(field)}
                className="w-full bg-transparent border-b-2 border-white/20 p-4 text-2xl text-white focus:border-rarity-lavender outline-none transition-colors placeholder:text-white/20"
                placeholder={placeholder}
                disabled={submitting}
            />
            {errors[field] && <span className="text-red-400 text-sm mt-2">{errors[field]?.message}</span>}

            <div className="flex gap-3 mt-8">
                {currentStep > 1 && (
                    <button
                        onClick={prevStep}
                        disabled={submitting}
                        className="px-6 py-3 rounded-lg text-white/50 hover:text-white font-medium transition"
                    >
                        Voltar
                    </button>
                )}
                <button
                    onClick={() => nextStep(field)}
                    disabled={submitting}
                    className="bg-rarity-lavender hover:bg-rarity-lavender/90 disabled:opacity-50 text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition ml-auto"
                >
                    {submitting ? <Loader2 className="animate-spin" /> : "OK"}
                    {!submitting && <ArrowRight size={20} />}
                </button>
            </div>
        </motion.div>
    );

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-neutral-950/95 backdrop-blur-md"
                onClick={onClose}
            />

            <motion.div
                initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                className={`relative w-full ${currentStep === 7 ? 'max-w-4xl h-[80vh]' : 'max-w-2xl'} z-10 transition-all duration-500`}
            >
                {/* Close Button & Progress */}
                <div className="absolute -top-16 right-0 flex items-center gap-4">
                    {currentStep < 7 && (
                        <span className="text-white/40 text-sm font-mono tracking-widest">
                            {currentStep} / {totalSteps}
                        </span>
                    )}
                    <button onClick={onClose} className="p-2 text-white/50 hover:text-white transition">
                        <X size={24} />
                    </button>
                </div>

                <div className={currentStep === 7 ? "h-full bg-white rounded-lg overflow-hidden" : "min-h-[400px]"}>
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && renderInput("name", "Como podemos te chamar?", "Seu nome completo")}
                        {currentStep === 2 && renderInput("whatsapp", "Qual seu WhatsApp?", "(00) 00000-0000", "tel")}
                        {currentStep === 3 && renderInput("email", "Qual seu melhor email?", "nome@email.com", "email")}
                        {currentStep === 4 && renderInput("businessName", "Qual o nome do seu negócio?", "Ex: Minha Loja")}
                        {currentStep === 5 && renderInput("instagram", "Qual o Instagram da marca?", "@sua.marca")}
                        {currentStep === 6 && renderInput("niche", "Em qual nicho você atua?", "Ex: Moda Feminina, SaaS, Info...")}

                        {/* Cal.com Step */}
                        {currentStep === 7 && (
                            <motion.div
                                key="calendar"
                                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                                className="w-full h-full"
                            >
                                <Cal
                                    namespace="call-estrategica-com-o-caio"
                                    calLink="caio-camargo-peyctj/call-estrategica-com-o-caio"
                                    style={{ width: "100%", height: "100%", overflow: "scroll" }}
                                    config={{ "layout": "month_view", "theme": "dark" }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
