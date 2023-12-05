import { createContext, useEffect, useState } from "react";
import { ContextProps, NameProps } from "../types";
import service from "../service";

export const Contexto = createContext({} as ContextProps);

export function Provider({ children }: any) {
  const [names, setNames] = useState([] as NameProps[]);
  const [column, setColumn] = useState("firstname");

  const list = async () => {
    try {
      const data = await service.list(column);
      setNames(data);
      console.log("data", data);
    } catch (error) {
        console.error("Erro ao buscar dados do ????", error);
        throw error;
    }
  };

  const create = async (name: NameProps) => {
    try {
      await service.create(name);
      list();
    } catch (error) {
        console.error("Erro ao buscar dados do ????", error);
        throw error;
    }
  };

  const remove = async (name: NameProps) => {
    try {
      await service.remove(name);
      list();
    } catch (error) {
        console.error("Erro ao buscar dados do ????", error);
        throw error;
    }
  };

  useEffect(() => {
    list(); // Fetch initial data on component mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Re-fetch data when the column changes

  return (
    <Contexto.Provider value={{ names, setColumn, create, remove }}>
      {children}
    </Contexto.Provider>
  );
}
