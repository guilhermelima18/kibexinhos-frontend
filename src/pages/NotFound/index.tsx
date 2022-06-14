import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import notFoundImg from "../../assets/not-found.png";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <Flex
      bg="white"
      w="100%"
      minH="100vh"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      gap="20px"
    >
      <Heading>
        Opss... Essa página que você está tentando acessar não existe.
      </Heading>
      <Image
        w="400px"
        src={notFoundImg}
        alt="Imagem de página inexistente com um cachorro ao centro"
      />
      <Text fontWeight="bold">Estamos te redirecionando... Só um momento!</Text>
    </Flex>
  );
}
