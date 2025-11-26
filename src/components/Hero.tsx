import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-green overflow-hidden pt-20 pb-10 lg:py-0">
      
      {/* Background Elements - Mais limpo, menos "tech" */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content - Mais direto */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
              <span className="text-white text-xs font-bold tracking-widest uppercase">Passo 1 do Método D.D.O</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] mb-6 text-white">
              Sobremesas que <br />
              <span className="text-brand-gold italic">Emagrecem.</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Comece sua jornada de saúde pelo que é mais difícil largar: o doce. 
              Receitas calculadas para saciar, nutrir e acelerar seu metabolismo.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="https://pay.kiwify.com.br/d7n5kTm" className="w-full sm:w-auto">
                Comprar E-book Agora
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" href="#produtos" className="w-full sm:w-auto border-white/30 text-white hover:bg-white/10">
                Ver Coleção Completa
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-400">
               <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-700 border-2 border-brand-green"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-brand-green"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-500 border-2 border-brand-green flex items-center justify-center text-[10px] text-white">+1k</div>
               </div>
               <p>Alunas já iniciaram este passo.</p>
            </div>
          </motion.div>

          {/* Visual Content - Foco no Produto (Livro/Tablet) */}
          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="relative flex justify-center lg:justify-end"
          >
             {/* Círculo de fundo para destaque */}
             <div className="absolute inset-0 bg-brand-gold/20 blur-[100px] rounded-full transform scale-75"></div>
             
             {/* Mockup do Ebook (Representação) */}
             <div className="relative w-[320px] md:w-[400px] aspect-[3/4] bg-gray-900 rounded-r-2xl rounded-l-md shadow-2xl border-l-8 border-gray-800 transform rotate-y-12 rotate-z-2 hover:rotate-0 transition-all duration-500 cursor-pointer group">
                {/* Capa */}
                <img 
                  src="https://images.unsplash.com/photo-1563729768-87236116c467?q=80&w=2069&auto=format&fit=crop" 
                  alt="Capa Ebook Sobremesas" 
                  className="w-full h-full object-cover rounded-r-xl opacity-90 group-hover:opacity-100"
                />
                
                {/* Selo de Preço */}
                <div className="absolute -right-6 top-10 bg-brand-coral text-white p-4 rounded-full shadow-lg shadow-brand-coral/30 animate-bounce">
                   <p className="text-xs font-bold uppercase">Por apenas</p>
                   <p className="text-2xl font-bold">R$ 29,90</p>
                </div>

                {/* Brilho na capa */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none rounded-r-xl"></div>
             </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
