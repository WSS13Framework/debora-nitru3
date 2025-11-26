import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  href,
  className = '',
  ...props 
}) => {
  // Estilos mais sofisticados, menos "botão padrão"
  const baseStyles = "relative overflow-hidden inline-flex items-center justify-center px-10 py-5 text-lg font-bold tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group rounded-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-brand-coral to-orange-600 text-white border-0",
    secondary: "bg-brand-gold text-brand-green hover:bg-yellow-400",
    outline: "bg-transparent text-brand-green border-2 border-brand-green hover:bg-brand-green hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";

  const Component = href ? motion.a : motion.button;
  const motionProps = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    // @ts-ignore
    <Component
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
      whileTap={{ scale: 0.98 }}
      {...motionProps}
      {...props}
    >
      {/* Efeito de brilho mais sutil e elegante */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] z-0 pointer-events-none">
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-[-20deg]"></div>
      </div>

      <span className="relative z-10 flex items-center gap-2 font-serif italic md:not-italic md:font-sans">
        {children}
      </span>
    </Component>
  );
};
