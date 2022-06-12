import {
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

export const TablePedidos = () => {
  return (
    <TableContainer w="100%">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr bg="gray.300">
            <Th fontSize="0.7rem" textAlign="center">
              To convert
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              into
            </Th>
            <Th fontSize="0.7rem" textAlign="center">
              multiply by
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td textAlign="center">inches</Td>
            <Td textAlign="center">millimetres (mm)</Td>
            <Td textAlign="center">25.4</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">feet</Td>
            <Td textAlign="center">centimetres (cm)</Td>
            <Td textAlign="center">30.48</Td>
          </Tr>
          <Tr>
            <Td textAlign="center">yards</Td>
            <Td textAlign="center">metres (m)</Td>
            <Td textAlign="center">0.91444</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};
