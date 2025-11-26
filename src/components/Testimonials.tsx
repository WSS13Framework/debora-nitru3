import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana Silva",
    role: "Advogada",
    text: "Eu sou chocólatra assumida e achava impossível fazer dieta. O mousse de cacau funcional salvou minha vida! Não sinto falta do açúcar refinado.",
    rating: 5
  },
  {
    name: "Carlos Mendes",
    role: "Empresário",
    text: "As receitas são realmente rápidas. Em 10 minutos preparo a sobremesa do jantar e minha família toda adora, inclusive as crianças.",
    rating: 5
  },
  {
    name: "Fernanda Costa",
    role: "Estudante",
    text: "O investimento vale cada centavo. Só pela receita da torta de limão fit já valeria o dobro do preço. Dra. Débora é incrível!",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-brand-green text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Quem provou, aprovou!
          </h2>
          <p className="text-gray-300">
            Veja o que nossos alunos estão dizendo sobre as receitas.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <p className="text-lg italic mb-6 text-gray-100">"{t.text}"</p>
              <div>
                <p className="font-bold text-brand-gold">{t.name}</p>
                <p className="text-sm text-gray-400">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
