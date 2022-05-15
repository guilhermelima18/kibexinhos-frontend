import { Link } from "react-router-dom";
import { HStack, Button, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";

export function NavMenu() {
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
      <Link to="/categorias">
        <Text
          fontSize="0.9rem"
          color="white"
          fontWeight="bold"
          _hover={{ textDecoration: "underline", cursor: "pointer" }}
        >
          Produtos
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
          2
        </Text>
        <Link to="/cart">
          <FaShoppingCart fontSize={24} color="white" />
        </Link>
      </Button>
    </HStack>
  );
}
