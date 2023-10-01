// src/components/BotaoVoto.tsx

import React from 'react';
import './BotaoVoto.css';

interface BotaoVotoProps {
  tipo: 'UP' | 'DOWN';
  onClick: () => void;
  className?: string; // Adicionando a propriedade className
}

const BotaoVoto: React.FC<BotaoVotoProps> = ({ tipo, onClick, className }) => {
  return (
    <button onClick={onClick} className={`botao-${tipo.toLowerCase()} ${className}`}>
      {tipo}
    </button>
  );
};

export default BotaoVoto;

