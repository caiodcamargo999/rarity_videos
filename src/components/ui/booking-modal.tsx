"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, CheckCircle, Loader2, ArrowRight, ArrowLeft } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format, isSameDay, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { cn } from "@/lib/utils";

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
    // 1: Name 
    // 2: WhatsApp 
    // 3: Email 
    // 4: Business Name
    // 5: Instagram
    // 6: Niche
    // 7: Calendar (Old Step 2)
    // 8: Success (Old Step 3)
    const [currentStep, setCurrentStep] = useState(1);

    // We store all data in a single object but validate per field
    const [formData, setFormData] = useState<Partial<Step1Data>>({});

    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
    const [availableSlots, setAvailableSlots] = useState<string[]>([]);
    const [loadingSlots, setLoadingSlots] = useState(false);
    const [submitting, setSubmitting] = useState(false);

    // Using regular form hook for validation, but we handle steps manually
    const { register, trigger, getValues, formState: { errors } } = useForm<Step1Data>({
        resolver: zodResolver(step1Schema),
        mode: "onChange"
    });

    const totalSteps = 7; // up to calendar

    // Prefetch slots as soon as the modal opens to ensure data is ready by Step 7
    useEffect(() => {
        if (isOpen && availableSlots.length === 0 && !loadingSlots) {
            console.log("[BookingModal] Prefetching slots...");
            setLoadingSlots(true);
            fetch('/api/booking/availability')
                .then(async res => {
                    const data = await res.json();
                    if (res.ok && data.slots) {
                        setAvailableSlots(data.slots);
                        console.log("[BookingModal] Slots loaded:", data.slots.length);
                    } else {
                        console.error("Error fetching slots:", data);
                    }
                })
                .catch(err => console.error("Fetch network error:", err))
                .finally(() => setLoadingSlots(false));
        }
    }, [isOpen]); // Runs once when modal opens

    const nextStep = async (fieldToValidate: keyof Step1Data) => {
        const isValid = await trigger(fieldToValidate);
        if (isValid) {
            setFormData(prev => ({ ...prev, [fieldToValidate]: getValues(fieldToValidate) }));
            setCurrentStep(prev => prev + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) setCurrentStep(prev => prev - 1);
    };

    const onConfirmBooking = async () => {
        if (!selectedSlot) return;
        setSubmitting(true);
        try {
            const finalData = { ...formData, ...getValues() } as Step1Data;
            const res = await fetch('/api/booking/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ ...finalData, startDateTime: selectedSlot }),
            });

            if (res.ok) setCurrentStep(8);
            else alert("Erro ao agendar. Tente novamente.");
        } catch (error) {
            console.error(error);
            alert("Erro ao agendar.");
        } finally {
            setSubmitting(false);
        }
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
            />
            {errors[field] && <span className="text-red-400 text-sm mt-2">{errors[field]?.message}</span>}

            <div className="flex gap-3 mt-8">
                {currentStep > 1 && (
                    <button
                        onClick={prevStep}
                        className="px-6 py-3 rounded-lg text-white/50 hover:text-white font-medium transition"
                    >
                        Voltar
                    </button>
                )}
                <button
                    onClick={() => nextStep(field)}
                    className="bg-rarity-lavender hover:bg-rarity-lavender/90 text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition ml-auto"
                >
                    OK <ArrowRight size={20} />
                </button>
            </div>
        </motion.div>
    );

    // Group slots by day
    const slotsByDay = availableSlots.reduce((acc, slot) => {
        const date = slot.split('T')[0];
        if (!acc[date]) acc[date] = [];
        acc[date].push(slot);
        return acc;
    }, {} as Record<string, string[]>);

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
                className="relative w-full max-w-2xl z-10"
            >
                {/* Close Button & Progress */}
                <div className="absolute -top-16 right-0 flex items-center gap-4">
                    {currentStep < 8 && (
                        <span className="text-white/40 text-sm font-mono tracking-widest">
                            {currentStep} / {totalSteps}
                        </span>
                    )}
                    <button onClick={onClose} className="p-2 text-white/50 hover:text-white transition">
                        <X size={24} />
                    </button>
                </div>

                <div className="min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {currentStep === 1 && renderInput("name", "Como podemos te chamar?", "Seu nome completo")}
                        {currentStep === 2 && renderInput("whatsapp", "Qual seu WhatsApp?", "(00) 00000-0000", "tel")}
                        {currentStep === 3 && renderInput("email", "Qual seu melhor email?", "nome@email.com", "email")}
                        {currentStep === 4 && renderInput("businessName", "Qual o nome do seu negócio?", "Ex: Minha Loja")}
                        {currentStep === 5 && renderInput("instagram", "Qual o Instagram da marca?", "@sua.marca")}
                        {currentStep === 6 && renderInput("niche", "Em qual nicho você atua?", "Ex: Moda Feminina, SaaS, Info...")}

                        {/* Calendar Step */}
                        {currentStep === 7 && (
                            <motion.div
                                key="calendar"
                                initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -20, opacity: 0 }}
                                className="space-y-6"
                            >
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Escolha o melhor horário <span className="text-rarity-lavender">.</span>
                                </h3>

                                {loadingSlots ? (
                                    <div className="flex flex-col items-center justify-center py-12 gap-4">
                                        <Loader2 className="animate-spin text-rarity-lavender" size={32} />
                                        <p className="text-white/60">Sincronizando agenda...</p>
                                    </div>
                                ) : (
                                    <div className="bg-neutral-900 border border-white/10 rounded-xl p-4 max-h-[400px] overflow-y-auto custom-scrollbar">
                                        {Object.entries(slotsByDay).length === 0 ? (
                                            <div className="text-center py-8">
                                                <p className="text-white/60">Sem horários disponíveis para os próximos 5 dias.</p>
                                            </div>
                                        ) : (
                                            Object.entries(slotsByDay).map(([date, slots]) => (
                                                <div key={date} className="mb-6 last:mb-0">
                                                    <h4 className="text-white font-medium mb-3 sticky top-0 bg-neutral-900 py-2 z-10 flex items-center gap-2">
                                                        <Calendar size={14} className="text-rarity-lavender" />
                                                        {format(parseISO(date), "EEEE, dd 'de' MMMM", { locale: ptBR })}
                                                    </h4>
                                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                                        {slots.map(slot => (
                                                            <button
                                                                key={slot}
                                                                onClick={() => setSelectedSlot(slot)}
                                                                className={cn(
                                                                    "py-2 px-3 rounded-lg text-sm font-medium transition border",
                                                                    selectedSlot === slot
                                                                        ? "bg-rarity-lavender text-black border-rarity-lavender"
                                                                        : "bg-white/5 text-white border-white/10 hover:bg-white/10 hover:border-white/20"
                                                                )}
                                                            >
                                                                {format(parseISO(slot), "HH:mm")}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))
                                        )}
                                    </div>
                                )}

                                <div className="flex items-center justify-between pt-4">
                                    <button onClick={prevStep} className="text-white/50 hover:text-white transition">Voltar</button>
                                    <button
                                        onClick={onConfirmBooking}
                                        disabled={!selectedSlot || submitting}
                                        className="bg-rarity-lavender hover:bg-rarity-lavender/90 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold px-8 py-3 rounded-lg flex items-center gap-2 transition"
                                    >
                                        {submitting ? <Loader2 className="animate-spin" /> : "Confirmar"}
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {/* Success Step */}
                        {currentStep === 8 && (
                            <motion.div
                                key="success"
                                initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                                className="flex flex-col items-center justify-center py-12 text-center"
                            >
                                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle size={40} />
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-2">Tudo certo!</h2>
                                <p className="text-white/60 text-lg mb-8 max-w-md">
                                    Reunião agendada com sucesso. Verifique seu email <strong>{getValues("email")}</strong> para acessar o link do Google Meet.
                                </p>
                                <div className="bg-white/5 p-6 rounded-xl border border-white/10 min-w-[250px]">
                                    <p className="text-sm text-white/40 mb-1">Horário Agendado</p>
                                    <p className="text-xl font-mono text-white">
                                        {selectedSlot && format(parseISO(selectedSlot), "dd/MM 'às' HH:mm")}
                                    </p>
                                </div>
                                <button onClick={onClose} className="mt-8 text-rarity-lavender hover:underline">Fechar janela</button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </div>
    );
}
