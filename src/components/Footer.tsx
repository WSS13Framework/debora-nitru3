import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-white font-serif text-2xl font-bold mb-4">Dra. Débora Oliveira</h3>
        <p className="mb-8 max-w-md mx-auto text-sm">
          Nutrição funcional aplicada à vida real. Transformando saúde em estilo de vida através da alimentação consciente.
        </p>
        <div className="flex justify-center gap-6 mb-8 text-sm">
          <a href="#" className="hover:text-brand-gold transition-colors">Termos de Uso</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Política de Privacidade</a>
          <a href="#" className="hover:text-brand-gold transition-colors">Contato</a>
        </div>
        <p className="text-xs text-gray-600">
          &copy; {new Date().getFullYear()} Sobremesas Saudáveis. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};
