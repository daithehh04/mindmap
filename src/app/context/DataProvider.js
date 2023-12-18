'use client';
import React, { createContext, useContext, useState } from 'react';
const DataContext = createContext();

export const useDataMindmap = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ children }) => {
  const [dataMindmap, setDataMindmap] = useState({});

  return (
    <DataContext.Provider value={{ dataMindmap, setDataMindmap }}>
      {children}
    </DataContext.Provider>
  );
};
