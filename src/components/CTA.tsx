import React from 'react';
import { Button } from './ui/Button';
import { ShieldCheck, ArrowRight, Sparkles } from 'lucide-react';

export const CTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-brand-green rounded-[2.5rem] p-8 md:p-20 text-center shadow-2xl relative overflow-hidden">
          
          {/* Background Patterns */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-gold rounded-full blur-[80px] opacity-30"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-brand-coral rounded-full blur-[80px] opacity-30"></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur px-4 py-2 rounded-full mb-8 border border-white/10">
               <Sparkles className="w-4 h-4 text-brand-gold" />
               <span className="text-white text-xs font-bold uppercase tracking-widest">Oferta de Entrada</span>
            </div>

            <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Sua entrada para o <br/>
              <span className="text-brand-gold">Ecossistema Saudável</span>
            </h2>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
              Adquira agora o módulo de Sobremesas Funcionais e dê o primeiro passo rumo a uma vida onde a matemática trabalha a favor do seu corpo.
            </p>
            
            <div className="flex flex-col items-center gap-8">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 w-full max-w-md">
                <div className="flex justify-between items-center mb-2">
                   <span className="text-gray-400 text-sm">Valor do Investimento</span>
                   <span className="text-gray-500 line-through text-sm">R$ 97,00</span>
                </div>
                <div className="flex justify-between items-end border-b border-white/10 pb-4 mb-4">
                   <span className="text-white font-serif text-xl">Acesso Vitalício</span>
                   <div className="text-5xl font-bold text-brand-gold">R$ 29,90</div>
                </div>
                <Button 
                  href="https://pay.kiwify.com.br/d7n5kTm" 
                  fullWidth
                  className="text-lg py-4 shadow-brand-gold/20"
                >
                  GARANTIR MEU ACESSO
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-gold" />
                <span>Garantia de 30 dias</span>
              </div>
              <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full"></div>
              <div>Acesso Imediato via E-mail</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
