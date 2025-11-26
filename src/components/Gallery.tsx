import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1887&auto=format&fit=crop",
    title: "Torta de Frutas",
    tag: "Pilar: Antioxidantes"
  },
  {
    url: "https://images.unsplash.com/photo-1551024601-5637ade9b86d?q=80&w=2070&auto=format&fit=crop",
    title: "Bolo de Banana",
    tag: "Pilar: Energia Sustentável"
  },
  {
    url: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?q=80&w=1948&auto=format&fit=crop",
    title: "Cheesecake Fit",
    tag: "Pilar: Saciedade"
  },
  {
    url: "https://images.unsplash.com/photo-1587314168485-3236d6710814?q=80&w=1978&auto=format&fit=crop",
    title: "Brownie Funcional",
    tag: "Pilar: Neuro-Prazer"
  }
];

export const Gallery = () => {
  return (
    <section className="py-24 bg-brand-cream relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-coral font-bold tracking-widest uppercase text-xs mb-2 block">A Prática do Método</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-green mb-4">
            Onde a Ciência encontra o <span className="italic text-brand-gold">Sabor</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Cada uma dessas receitas é uma ferramenta do ecossistema para manter você no foco, sem sofrimento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-lg"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-green/90 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3">
                  {img.tag}
                </span>
                <h3 className="text-white font-serif text-2xl mb-1">{img.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
