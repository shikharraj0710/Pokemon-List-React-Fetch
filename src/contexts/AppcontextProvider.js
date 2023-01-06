import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export function useAppContext() {
  return useContext(AppContext);
}

export const AppContextProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [singleData, setSingleData] = useState({});
  const [selectedId, setSelectedId] = useState(null);
  const [singleLoading, setSingleLoading] = useState(false);

  useEffect(() => {
    fetch("https://api.pokemontcg.io/v2/cards?page=1&pageSize=100")
      .then((res) => res.json())
      .then((d) => {
        setData(d?.data);
        setLoading(false);
      })
      .catch(() => setError(true));
  }, []);

  useEffect(() => {
    if(selectedId !== null) {
        setSingleLoading(true);
        getPokemonData(selectedId);
    } 
  }, [data, selectedId]);

  function getPokemonData(id) {
    const singleObj = data.find((d) => d?.id === id);
    setSingleData(() => ({ ...singleObj }));
    setSingleLoading(false)
  }

  return (
    <AppContext.Provider
      value={{
        data,
        loading,
        error,
        getPokemonData,
        singleData,
        setSelectedId,
        singleLoading,
        setSingleLoading
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
