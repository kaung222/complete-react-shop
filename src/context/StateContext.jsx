import { createContext, useState } from "react";

export const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [mode, setMode] = useState(false);
  const [search, setSearch] = useState("");
  // console.log(search);
  return (
    <StateContext.Provider value={[mode, setMode ,search,setSearch]}>
      {children}
    </StateContext.Provider>
  );
};
