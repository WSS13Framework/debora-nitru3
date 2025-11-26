import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    // Simulação de envio enquanto o Supabase não está conectado
    // Quando conectar, descomente o código abaixo:
    
    /*
    const { error } = await supabase
      .from('leads')
      .insert([{ email, source: 'sales_page_sobremesas' }]);

    if (error) {
      setStatus('error');
      setMessage('Erro ao cadastrar. Tente novamente.');
      return;
    }
    */

    // Simulação temporária (remover após conectar Supabase)
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background sofisticado */}
      <div className="absolute inset-0 bg-brand-green"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      
      {/* Efeitos de luz */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-lightGreen rounded-full blur-[100px] opacity-30"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-brand-gold rounded-full blur-[100px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
          
          <div className="inline-block p-3 bg-brand-gold/20 rounded-full mb-6">
            <Send className="w-6 h-6 text-brand-gold" />
          </div>

          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Não quer comprar agora? <br/>
            <span className="text-brand-gold italic">Receba dicas gratuitas.</span>
          </h2>
          
          <p className="text-gray-300 mb-8 max-w-lg mx-auto">
            Entre para a lista VIP da Dra. Débora e receba semanalmente conteúdos sobre nutrição, longevidade e uma receita exclusiva.
          </p>

          {status === 'success' ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-500/20 border border-green-500/50 text-green-100 p-4 rounded-xl flex items-center justify-center gap-2"
            >
              <CheckCircle2 className="w-5 h-5" />
              <span>Cadastro realizado com sucesso! Verifique seu e-mail.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 transition-all"
                required
              />
              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="px-8 py-4 bg-brand-gold text-brand-green font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-lg shadow-brand-gold/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  'Cadastrar VIP'
                )}
              </button>
            </form>
          )}
          
          <p className="text-xs text-gray-500 mt-6">
            Zero spam. Apenas conteúdo científico e delicioso.
          </p>
        </div>
      </div>
    </section>
  );
};
