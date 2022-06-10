import { useContext } from "react";
import {
  Flex,
  HStack,
  VStack,
  Image,
  Text,
  Heading,
  useMediaQuery,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { RiLockPasswordFill } from "react-icons/ri";
import { FiLogIn } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import { AuthContext } from "../../contexts/AuthContext";
import { Form } from "../../components/Form";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { validationFormLogin } from "../../validations/Login";
import { LoginProps } from "../../types/Login";
import logoKibexinhosIcon from "../../assets/logo-kibexinhos.png";
import patasDogIcon from "../../assets/patas-dog.svg";

export default function Login() {
  const [isLessThan1024] = useMediaQuery("(max-width: 1024px)");
  const { signIn } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginProps>({ resolver: yupResolver(validationFormLogin) });

  const handleLoginSubmit: SubmitHandler<LoginProps> = async (
    data: LoginProps
  ) => {
    if (data.email !== "" && data.password !== "") {
      await signIn(data);
    }
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
          w={isLessThan1024 ? "100%" : "50%"}
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
          <Flex maxW="500px" flexDir="column" gap="10px">
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
            <p style={{ fontSize: "0.75rem", color: "red" }}>
              {errors.email?.message}
            </p>
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
            <p style={{ fontSize: "0.75rem", color: "red" }}>
              {errors.password?.message}
            </p>
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
