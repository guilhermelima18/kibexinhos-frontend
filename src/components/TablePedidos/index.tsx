import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { PedidosProps } from "../../types/Pedidos";

type TablePedidosProps = {
  pedidos?: PedidosProps[];
};

export const TablePedidos = ({ pedidos }: TablePedidosProps) => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <Thead>
          <Tr bg="gray.300">
            <Th fontSize="0.7rem" textAlign="center">
              Cód.
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              Data do Pedido
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              Valor Frete
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              Endereço Entrega
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              Valor Total
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              Status
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {pedidos &&
            pedidos.map(
              ({
                id,
                criadoEm,
                endereco,
                bairro,
                status,
                frete,
                total,
                cep,
                estado,
              }) => (
                <Tr key={id}>
                  <Td textAlign="center" fontSize="0.8rem">
                    {id}
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem">
                    {criadoEm}
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem">
                    {frete}
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem">
                    <Text display="flex" flexDir="column">
                      <span>{endereco}</span>
                      <span>{bairro}</span>
                      <span>{`${cep} - ${estado}`}</span>
                    </Text>
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem">
                    {total}
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem">
                    {status}
                  </Td>
                </Tr>
              )
            )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
