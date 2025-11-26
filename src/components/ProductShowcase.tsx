import React from 'react';
import { motion } from 'framer-motion';
import { Check, Lock, ArrowRight, Dumbbell, Utensils, Brain, Zap, Clock } from 'lucide-react';
import { Button } from './ui/Button';

// Expansão para cobrir todo o "Mundo Fitness"
const products = [
  {
    id: 1,
    category: "Nutrição",
    title: "Sobremesas Saudáveis",
    subtitle: "Doces sem Culpa",
    price: "R$ 29,90",
    image: "https://images.unsplash.com/photo-1563729768-87236116c467?q=80&w=2069&auto=format&fit=crop",
    active: true, // Produto Foco
    link: "https://pay.kiwify.com.br/d7n5kTm",
    icon: Utensils,
    features: ["20+ Receitas", "Baixo Índice Glicêmico", "Vídeo Aulas"]
  },
  {
    id: 2,
    category: "Planejamento",
    title: "Marmitas Fit da Semana",
    subtitle: "Cozinhe 1x, Coma 7 dias",
    price: "R$ 39,90",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop",
    active: false,
    link: "#",
    icon: Clock,
    features: ["Cardápio Semanal", "Lista de Compras", "Técnicas de Congelamento"]
  },
  {
    id: 3,
    category: "Treino",
    title: "Hiit em Casa 20min",
    subtitle: "Queima Gordura Rápida",
    price: "R$ 49,90",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    active: false,
    link: "#",
    icon: Dumbbell,
    features: ["Sem Equipamentos", "Vídeos Guiados", "Iniciante ao Avançado"]
  },
  {
    id: 4,
    category: "Estratégia",
    title: "Guia Jejum Intermitente",
    subtitle: "Protocolo Metabólico",
    price: "R$ 27,00",
    image: "https://images.unsplash.com/photo-1505253758473-96b701d8fe52?q=80&w=1948&auto=format&fit=crop", // Imagem de relógio/comida
    active: false,
    link: "#",
    icon: Zap,
    features: ["Janelas de Alimentação", "O que quebra o jejum", "Chás Potencializadores"]
  },
  {
    id: 5,
    category: "Suplementação",
    title: "Manual de Suplementos",
    subtitle: "Pare de Gastar à Toa",
    price: "R$ 34,90",
    image: "https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=1974&auto=format&fit=crop",
    active: false,
    link: "#",
    icon: Zap,
    features: ["Whey, Creatina e +", "Dosagens Corretas", "Marcas Confiáveis"]
  },
  {
    id: 6,
    category: "Psicologia",
    title: "Mente Magra",
    subtitle: "Vença a Compulsão",
    price: "R$ 59,90",
    image: "https://images.unsplash.com/photo-1493612276216-ee3925520721?q=80&w=1964&auto=format&fit=crop",
    active: false,
    link: "#",
    icon: Brain,
    features: ["Gatilhos Emocionais", "Exercícios de Mindfulness", "Diário Alimentar"]
  }
];

export const ProductShowcase = () => {
  return (
    <section className="py-24 bg-gray-50" id="produtos">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-widest mb-4">
            Universo Fitness Completo
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-green mb-4">
            O Ecossistema <span className="text-brand-gold italic">Total Health</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            A Dra. Débora preparou um arsenal completo para sua transformação. 
            Comece pelas sobremesas e evolua para todas as áreas da sua vida.
          </p>
        </div>

        {/* Grid Expandido */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                product.active 
                  ? 'bg-white shadow-2xl ring-2 ring-brand-gold z-10 transform lg:-translate-y-4' 
                  : 'bg-white shadow-lg border border-gray-100 hover:shadow-xl'
              }`}
            >
              {product.active && (
                <div className="absolute top-4 right-4 bg-brand-gold text-brand-green text-[10px] font-bold uppercase px-3 py-1 rounded-full z-20 shadow-sm">
                  Recomendado Agora
                </div>
              )}

              {/* Imagem / Capa */}
              <div className="h-48 overflow-hidden relative group">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <div className="flex items-center gap-2 text-brand-gold text-xs font-bold uppercase mb-1">
                    <product.icon className="w-3 h-3" />
                    {product.category}
                  </div>
                  <h3 className="text-white font-serif text-2xl font-bold leading-tight">{product.title}</h3>
                  <p className="text-gray-300 text-sm">{product.subtitle}</p>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-3 mb-8 flex-1">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-gray-600 text-sm">
                      <div className={`rounded-full p-1 flex-shrink-0 ${product.active ? 'bg-brand-green/10 text-brand-green' : 'bg-gray-100 text-gray-400'}`}>
                        <Check className="w-3 h-3" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                  <div>
                    <span className="text-xs text-gray-400 block">Por apenas</span>
                    <span className="text-xl font-bold text-brand-green">{product.price}</span>
                  </div>
                  
                  {product.active ? (
                    <Button href={product.link} className="px-6 py-2 text-sm h-10">
                      Adicionar
                    </Button>
                  ) : (
                    <a 
                      href={product.link}
                      className="flex items-center gap-2 text-gray-400 font-bold text-sm hover:text-brand-gold transition-colors px-4 py-2 rounded-lg hover:bg-gray-50"
                    >
                      Ver Mais <ArrowRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Banner Promocional do Combo */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-brand-green rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
            <div className="absolute right-0 top-0 w-96 h-96 bg-brand-gold/20 rounded-full blur-[80px] translate-x-1/3 -translate-y-1/3"></div>

            <div className="relative z-10 md:w-2/3">
              <div className="inline-block bg-brand-gold text-brand-green font-bold text-xs px-3 py-1 rounded mb-4">
                OFERTA VIP
              </div>
              <h3 className="text-3xl font-serif font-bold text-white mb-4">
                Quer acelerar seus resultados?
              </h3>
              <p className="text-gray-200 text-lg mb-6">
                Leve o <strong className="text-white">Combo Total Health</strong> (Todos os 6 guias) com <span className="text-brand-gold font-bold">60% de desconto</span>. De <span className="line-through opacity-60">R$ 241,50</span> por apenas 12x de R$ 9,70.
              </p>
              <div className="flex flex-wrap gap-2">
                 {products.map(p => (
                   <span key={p.id} className="text-[10px] text-white/60 border border-white/20 px-2 py-1 rounded-full">{p.title}</span>
                 ))}
              </div>
            </div>
            
            <div className="relative z-10 md:w-1/3 flex justify-center md:justify-end">
               <Button variant="secondary" className="whitespace-nowrap shadow-lg shadow-brand-gold/20 w-full md:w-auto justify-center">
                 Quero o Combo Completo
                 <ArrowRight className="ml-2 w-4 h-4" />
               </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
