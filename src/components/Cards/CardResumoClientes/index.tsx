import { Cards } from "..";
import { CardResumoClientesItem } from "./CardResumoClientesItem";

export const CardResumoClientes = () => {
  return (
    <Cards>
      <CardResumoClientesItem
        cardTitle="Total de Revendas"
        cardSubtitle="163.561"
        borderColor="green"
      />
      <CardResumoClientesItem
        cardTitle="Ativos"
        cardSubtitle="51.336"
        borderColor="blue"
      />
      <CardResumoClientesItem
        cardTitle="Internet"
        cardSubtitle="27.314"
        borderColor="#d4c627"
      />
      <CardResumoClientesItem
        cardTitle="Inativos"
        cardSubtitle="51.243"
        borderColor="red"
      />
    </Cards>
  );
};
