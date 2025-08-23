"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";

export function BioHeader() {
  return (
    <header className="w-full px-6 py-6 relative z-20">
      <div className="flex justify-end max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            className="p-3 text-white hover:bg-white/10 rounded-lg transition-all duration-200 hover:scale-105"
            aria-label="Change language"
          >
            <Globe className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </header>
  );
}
