import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Calculator } from 'lucide-react';

export const About = () => {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Background Blob */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-brand-cream rounded-full blur-3xl -z-10 translate-x-1/3"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Side - More Artistic */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop" 
                alt="Dra. Débora Oliveira" 
                className="w-full h-auto object-cover rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
              />
              
              {/* Floating Card */}
              <div className="absolute -bottom-10 -right-10 bg-white p-6 rounded-xl shadow-xl border-l-4 border-brand-gold max-w-[200px] hidden md:block">
                <p className="font-serif text-4xl font-bold text-brand-green mb-1">10+</p>
                <p className="text-gray-500 text-sm leading-tight">Anos transformando vidas através da nutrição.</p>
              </div>
            </div>
            
            {/* Decorative Frame */}
            <div className="absolute top-5 left-5 w-full h-full border-2 border-brand-gold/30 rounded-2xl -z-10 translate-x-4 translate-y-4"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="flex items-center gap-2 mb-4">
               <span className="h-px w-10 bg-brand-coral"></span>
               <span className="text-brand-coral font-bold tracking-wider uppercase text-sm">A Mente por trás do Método</span>
            </div>
            
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-green mb-6">
              Dra. Débora Oliveira
            </h2>
            
            <p className="font-script text-2xl text-gray-500 mb-6 rotate-1">
              "A matemática é a linguagem secreta da nutrição."
            </p>
            
            <div className="space-y-6 text-gray-600 mb-8 text-lg leading-relaxed">
              <p>
                Esqueça as dietas restritivas. Como nutricionista clínica e ortomolecular, desenvolvi um método onde <strong className="text-brand-green">cálculos precisos de macronutrientes</strong> permitem que você coma o que ama.
              </p>
              <p>
                Minha missão é provar que saúde e prazer não são opostos, são complementares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
               <div className="bg-brand-cream p-4 rounded-lg border border-brand-green/10">
                 <Calculator className="w-6 h-6 text-brand-green mb-2" />
                 <h4 className="font-bold text-gray-800">Cálculo Metabólico</h4>
                 <p className="text-sm text-gray-600">Receitas balanceadas matematicamente.</p>
               </div>
               <div className="bg-brand-cream p-4 rounded-lg border border-brand-green/10">
                 <CheckCircle2 className="w-6 h-6 text-brand-green mb-2" />
                 <h4 className="font-bold text-gray-800">Clínica Funcional</h4>
                 <p className="text-sm text-gray-600">Foco na saúde integral do corpo.</p>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
