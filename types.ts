export interface Autor {
    nome: string;
    cidade: string;
    pais: string;
  }
  
  export interface Voto {
    id: string;
    topico_id: string;
    tipo: 'UP' | 'DOWN';
    created_at: Date;
  }
  
  export interface Topico {
    id: string;
    descricao: string;
    autor: Autor;
    created_at: Date;
    tags: string[];
    active: boolean;
    votos: Voto[];
  }
  
  export type VotoType = 'UP' | 'DOWN';

  export {};