// src/App.tsx

import React, { useState } from 'react';
import ListaTopicos from './components/ListaTopicos';
import { Topico } from './types';

const App: React.FC = () => {
  // Estado inicial com um tópico de exemplo
  const [topicos, setTopicos] = useState<Topico[]>([
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
    {
      id: '3',
      descricao: 'O maior inimigo do conhecimento não é a ignorância, é a ilusão do conhecimento. by Stephen Hawking',
      autor: { nome: 'Stephen Hawking', cidade: 'Cambridge', pais: 'Reino Unido' },
      created_at: new Date(),
      tags: ['Física', 'Conhecimento'],
      active: true,
      votos: [],
    },
    {
      id: '4',
      descricao: 'A vida é realmente simples, mas insistimos em torná-la complicada. by Confúcio',
      autor: { nome: 'Confúcio', cidade: 'Qufu', pais: 'China' },
      created_at: new Date(),
      tags: ['Filosofia', 'Simplicidade'],
      active: true,
      votos: [],
    },
    {
      id: '5',
      descricao: 'A verdadeira sabedoria está em reconhecer a própria ignorância. by Sócrates',
      autor: { nome: 'Sócrates', cidade: 'Atenas', pais: 'Grécia' },
      created_at: new Date(),
      tags: ['Filosofia', 'Sabedoria'],
      active: true,
      votos: [],
    },
    {
      id: '6',
      descricao: 'A felicidade não depende do que você tem ou de quem você é, depende do que você pensa. by Dale Carnegie',
      autor: { nome: 'Dale Carnegie', cidade: 'Maryville', pais: 'Estados Unidos' },
      created_at: new Date(),
      tags: ['Felicidade', 'Pensamento'],
      active: true,
      votos: [],
    },
    {
      id: '7',
      descricao: 'A vida é 10% o que nos acontece e 90% como reagimos a isso. by Charles R. Swindoll',
      autor: { nome: 'Charles R. Swindoll', cidade: 'El Campo', pais: 'Estados Unidos' },
      created_at: new Date(),
      tags: ['Vida', 'Reação'],
      active: true,
      votos: [],
    },
    {
      id: '8',
      descricao: 'A mente que se abre a uma nova ideia jamais voltará ao seu tamanho original. by Albert Einstein',
      autor: { nome: 'Albert Einstein', cidade: 'Ulma', pais: 'Alemanha' },
      created_at: new Date(),
      tags: ['Mente', 'Ideias'],
      active: true,
      votos: [],
    },
    {
      id: '9',
      descricao: 'Não é o que acontece com você, mas como você reage ao que acontece que importa. by Epíteto',
      autor: { nome: 'Epíteto', cidade: 'Hierápolis', pais: 'Grécia' },
      created_at: new Date(),
      tags: ['Reação', 'Resiliência'],
      active: true,
      votos: [],
    },
    {
      id: '10',
      descricao: 'A melhor maneira de prever o futuro é inventá-lo. by Alan Kay',
      autor: { nome: 'Alan Kay', cidade: 'Springfield', pais: 'Estados Unidos' },
      created_at: new Date(),
      tags: ['Futuro', 'Inovação'],
      active: true,
      votos: [],
    },
    {
      id: '11',
      descricao: 'A vida é o que acontece enquanto você está ocupado fazendo outros planos. by John Lennon',
      autor: { nome: 'John Lennon', cidade: 'Liverpool', pais: 'Reino Unido' },
      created_at: new Date(),
      tags: ['Vida', 'Planos'],
      active: true,
      votos: [],
    },
    {
      id: '12',
      descricao: 'O segredo para seguir em frente é começar. by Mark Twain',
      autor: { nome: 'Mark Twain', cidade: 'Florida', pais: 'Estados Unidos' },
      created_at: new Date(),
      tags: ['Progresso', 'Início'],
      active: true,
      votos: [],
    },
    {
      id: '13',
      descricao: 'O sucesso é a soma de pequenos esforços repetidos dia após dia. by Robert Collier',
      autor: { nome: 'Robert Collier', cidade: 'St. Louis', pais: 'Estados Unidos' },
      created_at: new Date(),
      tags: ['Sucesso', 'Esforço'],
      active: true,
      votos: [],
    },
    {
      id: '14',
      descricao: 'A persistência realiza o impossível. by Provérbio Chinês',
      autor: { nome: 'Provérbio Chinês', cidade: 'Pequim', pais: 'China' },
      created_at: new Date(),
      tags: ['Persistência', 'Conquista'],
      active: true,
      votos: [],
    },
    {
      id: '15',
      descricao: 'O único modo de fazer um excelente trabalho é amar o que você faz. by Steve Jobs',
      autor: { nome: 'Steve Jobs', cidade: 'Palo Alto', pais: 'Estados Unidos' },
      created_at: new Date(),
      tags: ['Trabalho', 'Paixão'],
      active: true,
      votos: [],
    },
  ]);

  // Função para calcular os votos favoráveis e desfavoráveis
  const calcularVotos = (topico: Topico) => {
    const votosFavoraveis = topico.votos.filter((voto) => voto.tipo === 'UP').length;
    const votosDesfavoraveis = topico.votos.filter((voto) => voto.tipo === 'DOWN').length;
    return { favoraveis: votosFavoraveis, desfavoraveis: votosDesfavoraveis };
  };

  // Função para lidar com os votos
  const handleVoto = (topicoId: string, tipo: 'UP' | 'DOWN') => {
    setTopicos((prevTopicos) =>
      prevTopicos.map((topico) =>
        topico.id === topicoId
          ? {
              ...topico,
              votos: [...topico.votos, { id: Math.random().toString(), topico_id: topicoId, tipo, created_at: new Date() }],
            }
          : topico
      )
    );
  };


  return (
    <div className="App">
      <h1>Lista de Tópicos</h1>
      <ListaTopicos 
        topicos={topicos} 
        onVoto={handleVoto} 
        calcularVotos={calcularVotos} // Passando a função calcularVotos como propriedade
      />
    </div>
  );
};

export default App;