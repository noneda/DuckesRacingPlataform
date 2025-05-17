import { useContext, createContext } from "react";
import { useGlobalHook } from "./hook";

const GlobalContext = createContext(null);

export const useGlobalContext = () => useContext(GlobalContext);

const MainContext = ({ children }) => {
  const [
    is,
    event,
    changeEvent,
    show,
    showPopUp,
    isMockUp,
    mockUps,
    isColor,
    colors,
    selectMockUps,
  ] = useGlobalHook();

  return (
    <GlobalContext.Provider
      value={{
        is,
        event,
        changeEvent,
        show,
        showPopUp,
        isMockUp,
        mockUps,
        isColor,
        colors,
        selectMockUps,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default MainContext;
