import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/Button';

export const StickyCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the first 600px (approx hero height)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white/90 backdrop-blur-md border-t border-brand-gold/30 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] md:hidden"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs text-gray-500 line-through">R$ 97,00</p>
              <p className="text-lg font-bold text-brand-green leading-none">R$ 29,90</p>
            </div>
            <Button 
              href="https://pay.kiwify.com.br/d7n5kTm" 
              className="py-3 px-6 text-sm"
            >
              COMPRAR AGORA
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
