import { useContext } from "react";
import {Contexto, Provider}  from "../contexts";

const useName = () => {
  const context = useContext(Contexto);

  if (!context) {
    throw new Error("useColor deve ser usado dentro de um ColorProvider");
  }

  return context;
};

export { useName, Provider };
