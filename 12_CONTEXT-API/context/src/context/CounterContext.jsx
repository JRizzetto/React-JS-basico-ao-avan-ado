// 1 - Criar context
import { createContext, useState } from "react";

export const CounterContext = createContext();

// 2 - Criar provider
export const CounterContexProvider = ({ children }) => {
  const [counter, setCounter] = useState(55);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
