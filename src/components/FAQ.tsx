import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Sou diabético(a), posso consumir essas receitas?",
    answer: "Sim! Todas as receitas foram calculadas com baixo índice glicêmico, utilizando adoçantes naturais e fibras que evitam picos de insulina."
  },
  {
    question: "Preciso de ingredientes caros ou difíceis de achar?",
    answer: "Não. O foco do e-book é praticidade. Você encontrará 90% dos ingredientes em qualquer supermercado e o restante em lojas de produtos naturais comuns."
  },
  {
    question: "Não sei cozinhar, vou conseguir fazer?",
    answer: "Com certeza. O passo a passo é extremamente didático e a maioria das receitas não requer equipamentos complexos, apenas liquidificador ou bowl."
  },
  {
    question: "Como recebo o acesso ao material?",
    answer: "Assim que o pagamento for confirmado, você receberá um e-mail da Kiwify com o link para baixar seu e-book imediatamente."
  },
  {
    question: "Tenho garantia?",
    answer: "Sim, você tem 30 dias de garantia incondicional. Se não gostar, devolvemos 100% do seu dinheiro sem perguntas."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-brand-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-green mb-10 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm border border-brand-gold/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="font-bold text-gray-800 text-lg">{faq.question}</span>
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-brand-coral flex-shrink-0" />
                  ) : (
                    <Plus className="w-5 h-5 text-brand-green flex-shrink-0" />
                  )}
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
