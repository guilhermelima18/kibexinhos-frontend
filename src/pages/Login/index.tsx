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
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import logoKibexinhosIcon from "../../assets/logo-kibexinhos.png";
import { FiLogIn } from "react-icons/fi";
import { InputGroup } from "../../components/Input/InputGroup";

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
        w={isLessThan1024 ? "100%" : "50%"}
        justifyContent="center"
        pb="5"
      >
        <Image w="300px" src={logoKibexinhosIcon} alt="Logo Kibexinhos" />
        <Text fontSize="2xl" fontWeight="bold" color="white">
          O melhor para o seu PET.
        </Text>
      </VStack>
      <HStack
        w={isLessThan1024 ? "100%" : "50%"}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Form
          w={isLessThan1024 ? "100%" : "70%"}
          boxShadow="0 0 10px rgba(0, 0, 0, 0.3)"
          p="10"
          borderRadius="md"
          onSubmit={handleSubmit(handleLoginSubmit)}
        >
          <Heading fontSize={["1.2rem", "1.5rem", "1.7rem"]} mb="10">
            Entre em sua conta
          </Heading>
          <InputGroup
            variant="outline"
            inputType="email"
            inputName="email"
            labelText="E-mail"
            autoFocus
            maxLength={50}
            {...register("email")}
            borderWidth="2px"
            _focus={{ borderColor: "orange.500", borderWidth: "2px" }}
          />
          <InputGroup
            variant="outline"
            inputType="password"
            inputName="password"
            labelText="Senha"
            maxLength={8}
            {...register("password")}
            borderWidth="2px"
            _focus={{ borderColor: "orange.500", borderWidth: "2px" }}
          />
          <Flex w="100%" justifyContent="flex-end">
            <Button
              type="submit"
              colorScheme="orange"
              w="150px"
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
