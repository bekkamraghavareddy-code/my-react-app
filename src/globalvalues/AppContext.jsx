import { createContext,useEffect,useState } from "react";

export const AppContext = createContext({});

export const AppContextProvider = ({ children }) => {
 const [count, setCount] = useState(0);
 useEffect( () => {
   const counter =localStorage.getItem('count');
   if(counter){ setCount(parseInt(counter));}

 },[]);

  return (
    <AppContext.Provider value={{ count, setCount }}>
      {children}
    </AppContext.Provider>
  );
};
