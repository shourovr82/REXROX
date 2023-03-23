import React, { createContext } from 'react';

export const ShafinContexts = createContext();

const ShafinsContexts = ({ children }) => {
  const shafinInfo = {
    name: 'shafin'
  }
  return (
    <ShafinContexts.Provider value={shafinInfo}>
      {
        children
      }
    </ShafinContexts.Provider>
  );
};


export default ShafinsContexts;