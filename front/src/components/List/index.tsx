import React, { useEffect } from "react";
import styled from "styled-components";
import { useName } from "../../hooks";

const StyledResultList = styled.div`
  margin-top: 8px;
  padding-left: 10px;

  > div {
    margin-bottom: 8px;
  }

  .namePart {
    &:hover {
      color: red;
      cursor: pointer;
    }

    &:active {
      /* Adiciona um estilo ao clicar no elemento */
      font-weight: bold;
    }
  }
`;

const List: React.FC = () => {
  const { names, setColumn, create, remove } = useName();




  const handleRemove = async (id: number | undefined) => {
    if (id !== undefined) {
      
      try {
        await remove({ id, firstname: "", lastname: "" }); 
        console.log(`Registro removido com sucesso: ID ${id}`);
      } catch (error) {
        console.error(`Erro ao remover o registro: ${error}`);
      }
    }
  };

  return (
    <StyledResultList>
      {names?.map(({ id, firstname, lastname }) => (
        <div key={id}>
          <span
            className="namePart"
            onContextMenu={(e) => {
            e.preventDefault();
             handleRemove(id);
            }}
          >
            {firstname}
          </span>{" "}
          <span
            className="namePart"
            onContextMenu={(e) => {
            e.preventDefault();
            handleRemove(id);
            }}
          >
            {lastname}
          </span>
        </div>
      ))}
    </StyledResultList>
  );
};

export default List;