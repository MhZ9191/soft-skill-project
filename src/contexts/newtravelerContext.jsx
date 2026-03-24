import { createContext, useContext, useState } from "react";
import { travelers, travels } from "../data/data";
const NewTravelerContext = createContext();

function NewTravProvider({ children }) {
  const [viaggi, setViaggi] = useState(travels);
  const [viaggiatori, setViaggiatori] = useState(travelers);

  const createIdTravel = () => {
    const ids = viaggi.map((el) => el.id);
    return Math.max(...ids);
  };

  const createIdTraveler = () => {
    const idt = viaggiatori?.map((el) => el.id);
    return Math.max(...idt);
  };

  const values = {
    createIdTravel,
    createIdTraveler,
    setViaggi,
    viaggi,
    viaggiatori,
    setViaggiatori,
  };
  return (
    <NewTravelerContext.Provider value={values}>
      {children}
    </NewTravelerContext.Provider>
  );
}

function useNewTrav() {
  return useContext(NewTravelerContext);
}

export { NewTravProvider, useNewTrav };
