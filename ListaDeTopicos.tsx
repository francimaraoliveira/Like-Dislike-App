import React from 'react';
import TopicoItem from './TopicoItem';

const ListaDeTopicos: React.FC = () => {
  // Simulando dados de tópicos
  const topicos = [
    {
      id: '1',
      descricao: 'A sabedoria é o caminho para a verdade. by Sócrates',
      autor: { nome: 'Sócrates', cidade: 'Atenas', pais: 'Grécia' },
      created_at: new Date(),
      tags: ['Filosofia', 'Verdade'],
      active: true,
      votos: [],
    },

    {
      id: '2',
      descricao: 'A felicidade depende de nós mesmos. by Aristóteles',
      autor: { nome: 'Aristóteles', cidade: 'Estagira', pais: 'Grécia' },
      created_at: new Date(),
      tags: ['Filosofia', 'Verdade'],
      active: true,
      votos: [],
    },


  ];

  return (
    <div>
      {topicos.map(topico => (
        <TopicoItem key={topico.id} topico={topico} />
      ))}
    </div>
  );
};

export default ListaDeTopicos;

export {};