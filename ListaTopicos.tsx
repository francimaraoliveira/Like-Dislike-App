// src/components/ListaTopicos.tsx

import React from 'react';
import { Topico } from '../types';
import BotaoVoto from './BotaoVoto';
import './ListaTopicos.css';

interface ListaTopicosProps {
  topicos: Topico[];
  onVoto: (topicoId: string, tipo: 'UP' | 'DOWN') => void;
}

const ListaTopicos: React.FC<ListaTopicosProps> = ({ topicos, onVoto }) => {
  return (
    <div className="topicos-container">
      {topicos.map((topico) => (
        <div key={topico.id} className={`topico topico-item ${topico.active ? '' : 'inativo'}`}>
          <h3>{topico.descricao}</h3>
          <p>Autor: {topico.autor.nome}</p>
          <p>Tags: {topico.tags.join(', ')}</p>
          <p>Ativo: {topico.active ? 'Sim' : 'Não'}</p>
          <p>Total de Votos: {topico.votos.length}</p>
          <p>Votos Favoráveis: {topico.votos.filter((voto) => voto.tipo === 'UP').length}</p>
          <p>Votos Desfavoráveis: {topico.votos.filter((voto) => voto.tipo === 'DOWN').length}</p>
          <p>Saldo Atual: {topico.votos.filter((voto) => voto.tipo === 'UP').length - topico.votos.filter((voto) => voto.tipo === 'DOWN').length}</p>
          <BotaoVoto tipo="UP" onClick={() => onVoto(topico.id, 'UP')} className={topico.active ? 'botao-up' : ''} />
          <BotaoVoto tipo="DOWN" onClick={() => onVoto(topico.id, 'DOWN')} className={topico.active ? 'botao-down' : ''} />
        </div>
      ))}
    </div>
  );
};

export default ListaTopicos;