import React from 'react';
import { TopicosProvider } from './context/TopicosContext';
import ListaDeTopicos from './components/ListaDeTopicos';

const App: React.FC = () => {
  return (
    <TopicosProvider>
      <div className="App">
        <h1>Lista de Tópicos</h1>
        <ListaDeTopicos />
      </div>
    </TopicosProvider>
  );
};

export default App;
