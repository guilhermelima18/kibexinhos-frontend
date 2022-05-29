import { Link } from "react-router-dom";
import { HStack, Button, Text, Box } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { MenuCategorias } from "../MenuCategorias";
import { useCarrinho } from "../../../hooks/useCarrinho";

export function NavMenu() {
  const { itensCarrinho } = useCarrinho();

  return (
    <HStack spacing={30}>
      <Link to="/">
        <Text
          fontSize="0.9rem"
          color="white"
          fontWeight="bold"
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Início
        </Text>
      </Link>
      <Link to="/blog">
        <Text
          fontSize="0.9rem"
          color="white"
          fontWeight="bold"
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Blog
        </Text>
      </Link>
      <MenuCategorias />
      <Box display="flex" alignItems="center">
        <Link to="/login">
          <Text
            fontSize="0.9rem"
            color="white"
            fontWeight="bold"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Entrar
          </Text>
        </Link>
        <Text w="5px" color="white" mx="1">
          |
        </Text>
        <Link to="/criar-conta">
          <Text
            fontSize="0.9rem"
            color="white"
            fontWeight="bold"
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            Criar Conta
          </Text>
        </Link>
      </Box>
      {itensCarrinho.length > 0 && (
        <Button
          bg="transparent"
          position="relative"
          _hover={{ backgroundColor: "none" }}
        >
          <Text
            bg="white"
            w="20px"
            h="20px"
            borderRadius="xl"
            position="absolute"
            top="-15px"
            right="0"
            fontWeight="bold"
            color="#FFB515"
          >
            {itensCarrinho.length}
          </Text>
          <Link to="/carrinho">
            <FaShoppingCart fontSize={24} color="white" />
          </Link>
        </Button>
      )}
    </HStack>
  );
}
