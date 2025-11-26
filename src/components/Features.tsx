import React from 'react';
import { motion } from 'framer-motion';
import { Brain, HeartPulse, Leaf, Scale } from 'lucide-react';

const pillars = [
  {
    icon: Brain,
    title: "Neuro-Nutrição",
    description: "Ingredientes selecionados para otimizar funções cognitivas e reduzir a ansiedade por doces através da regulação de neurotransmissores."
  },
  {
    icon: Scale,
    title: "Matemática Metabólica",
    description: "O equilíbrio exato entre macronutrientes. Não é sobre contar calorias, é sobre como seu corpo processa a informação nutricional."
  },
  {
    icon: HeartPulse,
    title: "Longevidade Ativa",
    description: "Receitas ricas em antioxidantes que combatem a inflamação crônica, o principal inimigo do envelhecimento saudável."
  },
  {
    icon: Leaf,
    title: "Gastronomia Funcional",
    description: "O prazer é parte da saúde. Utilizamos técnicas de chef para garantir que a experiência sensorial seja tão potente quanto a nutricional."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-brand-cream/50 -skew-x-12 translate-x-20 -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 mb-16 items-end">
          <div className="md:w-2/3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-green mb-6">
              Os 4 Pilares do <br/>
              <span className="text-brand-gold italic">Ecossistema</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Este e-book não é um fim em si mesmo. Ele é a aplicação prática de uma metodologia clínica desenvolvida ao longo de 10 anos, baseada em quatro fundamentos inegociáveis.
            </p>
          </div>
          <div className="md:w-1/3 md:text-right">
             <div className="inline-block p-4 rounded-full border border-brand-green/10 bg-brand-green/5">
               <span className="font-serif text-brand-green font-bold text-xl">Método D.D.O</span>
             </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="w-16 h-16 bg-brand-green text-white rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300 shadow-lg shadow-brand-green/20">
                <pillar.icon className="w-8 h-8" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 font-serif">{pillar.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
