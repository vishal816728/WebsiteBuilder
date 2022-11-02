import React, { createContext, useState, useEffect } from "react";

export const UberContext = createContext();

const testiObj = [];
export const UberProvider = ({ children }) => {
  const [inputListLenght, setInputListLenght] = useState(0);
  const [change, setChange] = useState(0);
  const [selectedElem, setSelectedElem] = useState(-1);

  return (
    <UberContext.Provider
      value={{
        setInputListLenght,
        inputListLenght,
        testiObj,
        setChange,
        change,
        selectedElem,
        setSelectedElem
      }}
    >
      {children}
    </UberContext.Provider>
  );
};
