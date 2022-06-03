import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Image,
  Button,
} from "@chakra-ui/react";
import { AiFillCaretDown } from "react-icons/ai";
import dogsImg from "../../../assets/categorias/dogs.jpg";
import catsImg from "../../../assets/categorias/cats.jpg";
import birdsImg from "../../../assets/categorias/birds.jpg";
import fishsImg from "../../../assets/categorias/fishs.jpg";
import hamstersimg from "../../../assets/categorias/hamsters.jpg";

export const MenuCategorias = () => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        bg="#FFB515"
        color="white"
        size="sm"
        _hover={{ backgroundColor: "yellow.500" }}
        _focus={{ border: "orange.500" }}
        _active={{ backgroundColor: "yellow.500" }}
        rightIcon={<AiFillCaretDown />}
      >
        Categorias
      </MenuButton>
      <MenuList>
        <Link to="/produtos/1">
          <MenuItem minH="48px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={dogsImg}
              alt="Cachorros"
              mr="12px"
            />
            <span>Cachorros</span>
          </MenuItem>
        </Link>
        <Link to="/produtos/2">
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={catsImg}
              alt="Gatos"
              mr="12px"
            />
            <span>Gatos</span>
          </MenuItem>
        </Link>
        <Link to="/produtos/5">
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={birdsImg}
              alt="Aves"
              mr="12px"
            />
            <span>Aves</span>
          </MenuItem>
        </Link>
        <Link to="/produtos/3">
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={fishsImg}
              alt="Peixes"
              mr="12px"
            />
            <span>Peixes</span>
          </MenuItem>
        </Link>
        <Link to="/produtos/4">
          <MenuItem minH="40px">
            <Image
              boxSize="2rem"
              borderRadius="full"
              src={hamstersimg}
              alt="Roedores"
              mr="12px"
            />
            <span>Roedores</span>
          </MenuItem>
        </Link>
      </MenuList>
    </Menu>
  );
};
