import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Topico, VotoType } from '../types';

interface State {
  topicos: Topico[];
}

interface Action {
  type: 'VOTAR';
  topicoId: string;
  votoType: VotoType;
}

type Dispatch = (action: Action) => void;

const initialState: State = {
  topicos: [], // Inicialize com seus tópicos
};

const TopicosStateContext = createContext<State | undefined>(undefined);
const TopicosDispatchContext = createContext<Dispatch | undefined>(undefined);

function topicosReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'VOTAR':
      return {
        ...state,
        topicos: state.topicos.map(topico => {
          if (topico.id === action.topicoId) {
            return {
              ...topico,
              votos: [
                ...topico.votos,
                { id: 'uuid', topico_id: action.topicoId, tipo: action.votoType, created_at: new Date() },
              ],
            };
          }
          return topico;
        }),
      };
    default:
      throw new Error(`Ação não suportada: ${action.type}`);
  }
}

export const TopicosProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(topicosReducer, initialState);

  return (
    <TopicosStateContext.Provider value={state}>
      <TopicosDispatchContext.Provider value={dispatch}>{children}</TopicosDispatchContext.Provider>
    </TopicosStateContext.Provider>
  );
};

export function useTopicosState(): State {
  const context = useContext(TopicosStateContext);
  if (context === undefined) {
    throw new Error('useTopicosState deve ser usado dentro de um TopicosProvider');
  }
  return context;
}

export function useTopicosDispatch(): Dispatch {
  const context = useContext(TopicosDispatchContext);
  if (context === undefined) {
    throw new Error('useTopicosDispatch deve ser usado dentro de um TopicosProvider');
  }
  return context;
}


export {};