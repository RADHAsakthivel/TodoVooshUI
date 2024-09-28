"use client"
import React, { createContext, useContext, useState } from "react";

// Define the shape of your context data
interface DataContextType {
  data: { message: string | null; otherProp?: any }; // Adjust based on your actual data structure
  updateData: (newData: { message: string | null; otherProp?: any }) => void; // Function type for updating data
}

// Provide a default value
const defaultValue: DataContextType = {
  data: { message: null },
  updateData: () => {}, // Provide a no-op function as a default
};

// Create a context
const DataContext = createContext<DataContextType>(defaultValue);

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState<{ message: string | null; otherProp?: any }>({ message: null }); // State to hold data

  const updateData = (newData: { message: string | null; otherProp?: any }) => {
    setData(prevData => ({ ...prevData, ...newData })); // Update the data state
  };

  return (
    <DataContext.Provider value={{ data, updateData }}>
      {children}
    </DataContext.Provider>
  );
};

// Custom hook to use the context
export const useDataContext = () => {
  return useContext(DataContext);
};
