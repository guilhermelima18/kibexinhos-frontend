import {
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import logoKibexinhosIcon from "../../assets/logo-kibexinhos.png";
import patasDogIcon from "../../assets/patas-dog.svg";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

type LoginProps = {
  email: string;
  password: string;
};

const validationFormLogin = yup.object({
  email: yup.string().email("E-mail inválido").required("E-mail obrigatório"),
  password: yup
    .string()
    .length(8, "No mínimo 8 letras ou números")
    .required("Senha obrigatória"),
});

export default function Login() {
  const [isLessThan1024] = useMediaQuery("(max-width: 1024px)");
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginProps>({ resolver: yupResolver(validationFormLogin) });

  const handleLoginSubmit = (data: LoginProps) => {
    console.log(data);
  };

  return (
    <Flex
      w="100%"
      h={isLessThan1024 ? "auto" : "100vh"}
      flexDir={isLessThan1024 ? "column" : "row"}
    >
      <VStack
        bg="orange.500"
        w={isLessThan1024 ? "100%" : "40%"}
        justifyContent="center"
        pb="5"
      >
        <Image w="300px" src={logoKibexinhosIcon} alt="Logo Kibexinhos" />
        <Text fontSize="2xl" fontWeight="bold" color="white">
          O melhor para o seu PET.
        </Text>
      </VStack>
      <HStack
        w={isLessThan1024 ? "100%" : "60%"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Form
          w={isLessThan1024 ? "100%" : "60%"}
          boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
          p="10"
          borderRadius="md"
          position="relative"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <Image
            src={patasDogIcon}
            alt="Patas de Cachorro"
            position="absolute"
            top="10px"
            right="10px"
          />
          <Heading fontSize={["1.2rem", "1.5rem", "1.7rem"]} mb="10">
            Entre em sua conta
          </Heading>
          <Flex maxW="500px" flexDir="column" gap="20px">
            <Input
              variant="outline"
              inputType="email"
              inputName="email"
              labelText="E-mail"
              placeholder="email@email.com"
              maxLength={50}
              {...register("email")}
              border="none"
              _focus={{ border: "none" }}
            >
              <MdEmail />
            </Input>
            <Input
              variant="outline"
              inputType="password"
              inputName="password"
              labelText="Senha"
              placeholder="********"
              maxLength={8}
              {...register("password")}
              border="none"
              _focus={{ border: "none" }}
            >
              <RiLockPasswordFill />
            </Input>
          </Flex>
          <Flex
            w="100%"
            justifyContent={isLessThan1024 ? "flex-start" : "flex-end"}
            mt="5"
          >
            <Button
              type="submit"
              colorScheme="orange"
              w="120px"
              isLoading={isSubmitting}
              display="flex"
              alignItems="center"
              gap="10px"
            >
              Entrar
              <FiLogIn color="white" size={20} />
            </Button>
          </Flex>
        </Form>
      </HStack>
    </Flex>
  );
}