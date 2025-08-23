"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "ar", name: "العربية", flag: "🇸🇦" },
] as const;

export function LanguageDropdown() {
  const { locale, setLocale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageSelect = (languageCode: typeof locale) => {
    setLocale(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
                 className="flex items-center space-x-2 px-4 py-3 text-[#d7c5b6] hover:bg-[#d7c5b6]/10 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#d7c5b6]/20"
        title={`Current: ${locale.toUpperCase()}. Click to change language.`}
      >
        <Globe className="w-6 h-6" />
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-[#2a211c]/95 border border-[#4a3e37]/60 rounded-xl shadow-2xl backdrop-blur-3xl z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageSelect(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-[#3a2f29]/50 transition-colors duration-200 ${
                  locale === language.code ? 'bg-[#3a2f29]/30 text-[#d7c5b6]' : 'text-[#a09080] hover:text-[#d7c5b6]'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-[300]">{language.name}</span>
                {locale === language.code && (
                  <div className="ml-auto w-2 h-2 bg-[#d7c5b6] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
