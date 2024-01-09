import { createContext, useContext, useState } from "react";

const SharedStateContext = createContext();

export const SharedStateProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState("");

  return (
    <SharedStateContext.Provider value={{ pageTitle, setPageTitle }}>
      {children}
    </SharedStateContext.Provider>
  );
};

export const useSharedState = () => {
  return useContext(SharedStateContext);
};
