import React from 'react';
import { motion } from 'framer-motion';
import { Play, Sparkles, Cpu } from 'lucide-react';

export const AvatarSection = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Content */}
          <div className="lg:w-1/3">
             <div className="inline-flex items-center gap-2 text-brand-coral font-bold tracking-widest uppercase text-xs mb-4">
                <Cpu className="w-4 h-4" />
                <span>Inovação Exclusiva</span>
             </div>
             <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-green mb-6">
               Nutrição + <br/>Inteligência Artificial
             </h2>
             <p className="text-gray-600 text-lg mb-8 leading-relaxed">
               Não é apenas um livro. É uma experiência. Assista à Dra. Débora (versão IA) explicando a ciência por trás de cada ingrediente.
             </p>
             
             <div className="p-6 bg-brand-cream rounded-xl border border-brand-gold/30 relative">
               <div className="absolute -top-3 -left-3 text-4xl">❝</div>
               <p className="font-script text-2xl text-gray-800 text-center">
                 A tecnologia a serviço do seu bem-estar.
               </p>
             </div>
          </div>

          {/* Right Content - The Video Player */}
          <motion.div 
            className="lg:w-2/3 w-full relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {/* Decorative Ring */}
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-gold to-brand-coral opacity-30 blur-xl rounded-[2rem]"></div>
            
            <div className="relative aspect-video bg-gray-900 rounded-[2rem] shadow-2xl overflow-hidden group border border-white/20">
              {/* Placeholder Image */}
              <img 
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2070&auto=format&fit=crop" 
                alt="Dra Débora Avatar IA"
                className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Play Button with Ripple Effect */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-white/30 rounded-full animate-ping"></div>
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center shadow-lg cursor-pointer hover:bg-brand-coral hover:border-brand-coral transition-all duration-300 group/btn">
                    <Play className="w-8 h-8 text-white fill-current ml-1 group-hover/btn:scale-110 transition-transform" />
                  </div>
                </div>
              </div>

              {/* Tech Overlay UI */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent flex justify-between items-end">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-xs text-green-400 font-mono uppercase">System Online</span>
                  </div>
                  <p className="font-bold text-xl text-white">Dra. Débora.ai</p>
                </div>
                <div className="bg-white/10 backdrop-blur px-3 py-1 rounded text-xs text-white border border-white/20">
                  Powered by HeyGen
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
