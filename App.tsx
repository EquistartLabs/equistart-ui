import React from 'react';
import { ClientContextProvider } from "./contexts/ClientContext";
import Index from './pages/Index';


const App = () => {
  return (
    <>
      <ClientContextProvider>
        <Index />
      </ClientContextProvider>
    </>
  );
};

export default App;
