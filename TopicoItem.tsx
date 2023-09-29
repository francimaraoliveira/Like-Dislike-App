import React from 'react';
import { Topico, VotoType } from '../types';
import { useTopicosDispatch } from '../context/TopicosContext';

interface TopicoProps {
  topico: Topico;
}

const TopicoItem: React.FC<TopicoProps> = ({ topico }) => {
  const dispatch = useTopicosDispatch();

  // Função para calcular o saldo de votos
  const calcularSaldo = () => {
    const votosUp = topico.votos.filter(voto => voto.tipo === 'UP').length;
    const votosDown = topico.votos.filter(voto => voto.tipo === 'DOWN').length;
    return votosUp - votosDown;
  };

  const handleVotar = (tipo: VotoType) => {
    // Simulando ação de votar
    dispatch({ type: 'VOTAR', topicoId: topico.id, votoType: tipo });
  };

  return (
    <div>
      <p>Descrição: {topico.descricao}</p>
      <p>Autor: {topico.autor.nome}</p>      
      <p>Saldo de votos: {calcularSaldo()}</p> 
      <button onClick={() => handleVotar('UP')}>Like</button>
      <button onClick={() => handleVotar('DOWN')}>Dislike</button>
    </div>
  );
};

export default TopicoItem;

export {};


