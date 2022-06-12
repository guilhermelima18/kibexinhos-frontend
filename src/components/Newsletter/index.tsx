import { Box, Flex, Text, useMediaQuery } from "@chakra-ui/react";
import { Button } from "../Button";
import { InputGeneric } from "../Input/InputGeneric";

export const Newsletter = () => {
  const [isLessThan1080] = useMediaQuery("(max-width: 1080px)");
  const [isLessThan900] = useMediaQuery("(max-width: 900px)");

  return (
    <Flex bg="orange.500" w="100%" p="5">
      <Box
        w="100%"
        maxW="1300px"
        flexDir={isLessThan1080 ? "column" : "row"}
        mx="auto"
        display="flex"
        alignItems="center"
        gap={isLessThan1080 ? "30px" : "0"}
        px="3"
      >
        <Text
          as="span"
          color="gray.300"
          fontSize="0.9rem"
          display="flex"
          flexDir="column"
          pr={isLessThan1080 ? "0" : "5"}
          borderRight={isLessThan1080 ? "none" : "2px solid"}
          borderRightColor="gray.200"
        >
          <strong style={{ fontSize: "1.3rem", color: "white" }}>
            Kibexinhos News
          </strong>
          Receba ofertas exclusivas no seu e-mail
        </Text>
        <Box
          flex="1"
          w={isLessThan900 ? "100%" : ""}
          display="flex"
          flexDir={isLessThan900 ? "column" : "row"}
          alignItems="center"
          justifyContent="flex-end"
          gap="10px"
        >
          <InputGeneric
            bg="white"
            w={isLessThan900 ? "100%" : "280px"}
            inputType="text"
            inputName="nome"
            placeholder="Qual é o seu nome?"
            _focus={{ border: "2px solid", borderColor: "#FFB515" }}
          />
          <InputGeneric
            bg="white"
            w={isLessThan900 ? "100%" : "280px"}
            inputType="email"
            inputName="email"
            placeholder="Seu melhor e-mail"
            _focus={{ border: "2px solid", borderColor: "#FFB515" }}
          />
          <Button
            bg="#FFB515"
            w="200px"
            fontSize="md"
            color="white"
            _hover={{ backgroundColor: "yellow.500" }}
          >
            Cadastrar
          </Button>
        </Box>
      </Box>
    </Flex>
  );
};
