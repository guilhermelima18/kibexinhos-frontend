import {
  Box,
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

const STATUS_ENUM = {
  REJEITADO: "Rejeitado",
  EM_ANDAMENTO: "Em andamento",
  ENTREGUE: "Entregue",
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
                <Tr
                  key={id}
                  _hover={{ backgroundColor: "rgba(200, 200, 200, 0.2)" }}
                >
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
                    {endereco ? (
                      <Text display="flex" flexDir="column">
                        <span>{endereco}</span>
                        <span>{bairro}</span>
                        <span>{`${cep} - ${estado}`}</span>
                      </Text>
                    ) : (
                      <Text>Não informado</Text>
                    )}
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem" fontWeight="bold">
                    {total}
                  </Td>
                  <Td textAlign="center" fontSize="0.8rem">
                    <Box
                      bg={
                        status === STATUS_ENUM.REJEITADO
                          ? "red.500"
                          : status === STATUS_ENUM.EM_ANDAMENTO
                          ? "green.500"
                          : "blue.500"
                      }
                      p="2"
                      color="white"
                      fontWeight="bold"
                      borderRadius="md"
                    >
                      {status}
                    </Box>
                  </Td>
                </Tr>
              )
            )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
