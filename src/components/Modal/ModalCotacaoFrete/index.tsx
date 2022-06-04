import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";
import { CotacaoFreteProps } from "../../../types/Frete";
import { formatCurrency } from "../../../utils/formatCurrency";
import { Button } from "../../Button";

type ModalCotacaoFreteProps = {
  onClose: Dispatch<SetStateAction<boolean>>;
  cotacao: CotacaoFreteProps[];
};

export const ModalCotacaoFrete = ({
  onClose,
  cotacao,
}: ModalCotacaoFreteProps) => {
  return (
    <Flex
      bg="rgba(0, 0, 0, 0.5)"
      w="100%"
      h="100%"
      alignItems="center"
      justifyContent="center"
      position="fixed"
      top="0px"
      left="0px"
      zIndex={100}
    >
      <Flex
        bg="white"
        w="50%"
        minW="320px"
        flexDir="column"
        gap="5px"
        position="relative"
        p="5"
        borderRadius="md"
      >
        <Button
          variant="outline"
          position="absolute"
          top="10px"
          right="10px"
          onClick={() => onClose(false)}
        >
          X
        </Button>
        <Heading maxW="80%" fontSize={["1rem", "1.4rem"]}>
          OPÇÕES DE FRETE PARA SUA REGIÃO
        </Heading>
        {cotacao &&
          cotacao.map(
            ({ id, name, company, delivery_time, price, discount, error }) => {
              let totalFrete = Number(price) - Number(discount);

              return (
                <Box
                  key={id}
                  w="100%"
                  h="70px"
                  display="flex"
                  justifyContent="space-between"
                  mt="5"
                  border="1px solid"
                  borderColor="gray.400"
                  p="2"
                  borderRadius="md"
                >
                  <Box
                    display="flex"
                    flexDir="column"
                    justifyContent="space-between"
                  >
                    <Image w="80px" src={company.picture} alt={company.name} />
                    <Text fontWeight="bold">{name}</Text>
                  </Box>
                  {error && (
                    <Box display="flex" alignItems="center">
                      <Text fontSize="0.9rem">{error}</Text>
                    </Box>
                  )}
                  {!error && (
                    <Box
                      display="flex"
                      flexDir="column"
                      justifyContent="center"
                    >
                      <strong>{formatCurrency(totalFrete)}</strong>
                      <Text>até {delivery_time} dias úteis</Text>
                    </Box>
                  )}
                </Box>
              );
            }
          )}
      </Flex>
    </Flex>
  );
};
