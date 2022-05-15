import { Box, Heading, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { FaGlobeAmericas, FaEllipsisV } from "react-icons/fa";
import { Link } from "react-router-dom";

type CardClienteItem = {
  clienteId: string;
};

export const CardClientesItem = ({ clienteId }: CardClienteItem) => {
  const isLessThan560 = useMediaQuery("(max-width: 560px)");

  return (
    <Link to={`/dashboard/clientes`}>
      <Box
        w="100%"
        display="flex"
        flexDir={isLessThan560 ? "column" : "row"}
        alignItems="center"
        justifyContent="space-between"
        borderRadius="md"
        p="2"
        border="1px solid"
        borderColor="gray.300"
        style={{ borderLeftWidth: "5px", borderLeftColor: "#28A745" }}
        transition="400ms"
        _hover={{ backgroundColor: "rgba(200, 200, 200, 0.3)" }}
        cursor="pointer"
      >
        <Box w="100%" display="flex" borderRadius="md" py="2" px="4">
          <Box display="flex" flexDir="column">
            <small>346826</small>
            <Heading fontSize="0.9rem" my="2" color="gray.500">
              ORB LINE TECNOLOGIA DA INFORMAÇÃO COMERCIO E SERVIÇOS LTDA
            </Heading>
            <small>06164725000100</small>
          </Box>
        </Box>

        {!isLessThan560 && (
          <>
            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Text fontSize="0.9rem">SP</Text>
            </Box>

            <Box
              w="100%"
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              gap="10px"
            >
              <Tooltip
                hasArrow
                shouldWrapChildren
                placement="top"
                label="Liberado para Internet"
                bg="gray.800"
              >
                <FaGlobeAmericas fontSize={14} color="green" />
              </Tooltip>
              <Link to={`/dashboard/clientes`}>
                <FaEllipsisV fontSize={14} />
              </Link>
            </Box>
          </>
        )}
        {isLessThan560 && (
          <Box
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            mt="5"
            px="4"
          >
            <Text fontSize="0.9rem">SP</Text>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap="10px"
              mt={isLessThan560 ? "0" : "3"}
            >
              <Tooltip
                hasArrow
                shouldWrapChildren
                placement="top"
                label="Liberado para Internet"
                bg="gray.800"
              >
                <FaGlobeAmericas fontSize={14} color="green" />
              </Tooltip>
              <Link to={`/dashboard/clientes`}>
                <FaEllipsisV fontSize={14} />
              </Link>
            </Box>
          </Box>
        )}
      </Box>
    </Link>
  );
};
