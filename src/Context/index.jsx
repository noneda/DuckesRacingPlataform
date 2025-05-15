import { useContext, createContext } from "react";
import { useGlobalHook } from "./hook";

const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

const MainContext = ({ children }) => {
  const [is, event, changeEvent] = useGlobalHook();

  return (
    <GlobalContext.Provider value={{ is, event, changeEvent }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
