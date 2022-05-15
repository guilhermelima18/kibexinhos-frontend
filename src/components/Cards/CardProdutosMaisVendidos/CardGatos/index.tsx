import { Box, Flex, Heading, Image, VStack, Text } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { Button } from "../../../Button";
import { OwlCarouselReact } from "../../../Carousel/OwlCarousel";

export const CardGatos = () => {
  return (
    <OwlCarouselReact>
      <div className="item" style={{ borderRadius: "10px" }}>
        <Flex
          bg="white"
          maxW="300px"
          flexDir="column"
          p="1"
          borderRadius="10px"
          _hover={{
            boxShadow: "0 0 10px rgba(200, 200, 200, 0.8)",
            border: "2px solid rgba(200, 200, 200, 0.5)",
          }}
        >
          <Flex
            w="100%"
            justifyContent="center"
            mb="3"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            position="relative"
          >
            <Image
              w="100%"
              maxW="220px"
              src="https://i.imgur.com/F8N4ws1.jpg"
              alt="Ração Pedigree"
            />
            <Text
              bg="orange.500"
              color="white"
              p="1"
              position="absolute"
              top="5px"
              right="5px"
              fontSize="0.8rem"
            >
              50%
            </Text>
          </Flex>
          <VStack
            w="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            mb="5"
          >
            <Heading
              fontSize="0.9rem"
              textAlign="center"
              fontWeight="normal"
              lineHeight="20px"
              mb="2"
              wordBreak="break-word"
            >
              Ração Royal Canin de Carne e Frango Para Gatos Adultos
            </Heading>
            <Box
              w="100%"
              maxW="220px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <Text
                w="100%"
                textAlign="right"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                R$ 24,99
              </Text>
              <Button
                fontSize="0.9rem"
                w="100%"
                gap="10px"
                colorScheme="orange"
              >
                <FaShoppingCart fontSize={18} color="white" />
                Comprar
              </Button>
            </Box>
          </VStack>
        </Flex>
      </div>
      <div className="item" style={{ borderRadius: "10px" }}>
        <Flex
          bg="white"
          maxW="300px"
          flexDir="column"
          p="1"
          borderRadius="10px"
          _hover={{
            boxShadow: "0 0 10px rgba(200, 200, 200, 0.8)",
            border: "2px solid rgba(200, 200, 200, 0.5)",
          }}
        >
          <Flex
            w="100%"
            justifyContent="center"
            mb="3"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            position="relative"
          >
            <Image
              w="100%"
              maxW="220px"
              src="https://i.imgur.com/F8N4ws1.jpg"
              alt="Ração Pedigree"
            />
            <Text
              bg="orange.500"
              color="white"
              p="1"
              position="absolute"
              top="5px"
              right="5px"
              fontSize="0.8rem"
            >
              50%
            </Text>
          </Flex>
          <VStack
            w="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            mb="5"
          >
            <Heading
              fontSize="0.9rem"
              textAlign="center"
              fontWeight="normal"
              lineHeight="20px"
              mb="2"
              wordBreak="break-word"
            >
              Ração Royal Canin de Carne e Frango Para Gatos Adultos
            </Heading>
            <Box
              w="100%"
              maxW="220px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <Text
                w="100%"
                textAlign="right"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                R$ 24,99
              </Text>
              <Button
                fontSize="0.9rem"
                w="100%"
                gap="10px"
                colorScheme="orange"
              >
                <FaShoppingCart fontSize={18} color="white" />
                Comprar
              </Button>
            </Box>
          </VStack>
        </Flex>
      </div>
      <div className="item" style={{ borderRadius: "10px" }}>
        <Flex
          bg="white"
          maxW="300px"
          flexDir="column"
          p="1"
          borderRadius="10px"
          _hover={{
            boxShadow: "0 0 10px rgba(200, 200, 200, 0.8)",
            border: "2px solid rgba(200, 200, 200, 0.5)",
          }}
        >
          <Flex
            w="100%"
            justifyContent="center"
            mb="3"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            position="relative"
          >
            <Image
              w="100%"
              maxW="220px"
              src="https://i.imgur.com/F8N4ws1.jpg"
              alt="Ração Pedigree"
            />
            <Text
              bg="orange.500"
              color="white"
              p="1"
              position="absolute"
              top="5px"
              right="5px"
              fontSize="0.8rem"
            >
              50%
            </Text>
          </Flex>
          <VStack
            w="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            mb="5"
          >
            <Heading
              fontSize="0.9rem"
              textAlign="center"
              fontWeight="normal"
              lineHeight="20px"
              mb="2"
              wordBreak="break-word"
            >
              Ração Royal Canin de Carne e Frango Para Gatos Adultos
            </Heading>
            <Box
              w="100%"
              maxW="220px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <Text
                w="100%"
                textAlign="right"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                R$ 24,99
              </Text>
              <Button
                fontSize="0.9rem"
                w="100%"
                gap="10px"
                colorScheme="orange"
              >
                <FaShoppingCart fontSize={18} color="white" />
                Comprar
              </Button>
            </Box>
          </VStack>
        </Flex>
      </div>
      <div className="item" style={{ borderRadius: "10px" }}>
        <Flex
          bg="white"
          maxW="300px"
          flexDir="column"
          p="1"
          borderRadius="10px"
          _hover={{
            boxShadow: "0 0 10px rgba(200, 200, 200, 0.8)",
            border: "2px solid rgba(200, 200, 200, 0.5)",
          }}
        >
          <Flex
            w="100%"
            justifyContent="center"
            mb="3"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            position="relative"
          >
            <Image
              w="100%"
              maxW="220px"
              src="https://i.imgur.com/F8N4ws1.jpg"
              alt="Ração Pedigree"
            />
            <Text
              bg="orange.500"
              color="white"
              p="1"
              position="absolute"
              top="5px"
              right="5px"
              fontSize="0.8rem"
            >
              50%
            </Text>
          </Flex>
          <VStack
            w="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            mb="5"
          >
            <Heading
              fontSize="0.9rem"
              textAlign="center"
              fontWeight="normal"
              lineHeight="20px"
              mb="2"
              wordBreak="break-word"
            >
              Ração Royal Canin de Carne e Frango Para Gatos Adultos
            </Heading>
            <Box
              w="100%"
              maxW="220px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <Text
                w="100%"
                textAlign="right"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                R$ 24,99
              </Text>
              <Button
                fontSize="0.9rem"
                w="100%"
                gap="10px"
                colorScheme="orange"
              >
                <FaShoppingCart fontSize={18} color="white" />
                Comprar
              </Button>
            </Box>
          </VStack>
        </Flex>
      </div>
      <div className="item" style={{ borderRadius: "10px" }}>
        <Flex
          bg="white"
          maxW="300px"
          flexDir="column"
          p="1"
          borderRadius="10px"
          _hover={{
            boxShadow: "0 0 10px rgba(200, 200, 200, 0.8)",
            border: "2px solid rgba(200, 200, 200, 0.5)",
          }}
        >
          <Flex
            w="100%"
            justifyContent="center"
            mb="3"
            borderBottom="1px solid"
            borderBottomColor="gray.200"
            position="relative"
          >
            <Image
              w="100%"
              maxW="220px"
              src="https://i.imgur.com/F8N4ws1.jpg"
              alt="Ração Pedigree"
            />
            <Text
              bg="orange.500"
              color="white"
              p="1"
              position="absolute"
              top="5px"
              right="5px"
              fontSize="0.8rem"
            >
              50%
            </Text>
          </Flex>
          <VStack
            w="100%"
            display="flex"
            flexDir="column"
            alignItems="center"
            mb="5"
          >
            <Heading
              fontSize="0.9rem"
              textAlign="center"
              fontWeight="normal"
              lineHeight="20px"
              mb="2"
              wordBreak="break-word"
            >
              Ração Royal Canin de Carne e Frango Para Gatos Adultos
            </Heading>
            <Box
              w="100%"
              maxW="220px"
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              gap="10px"
            >
              <Text
                w="100%"
                textAlign="right"
                fontSize="0.9rem"
                fontWeight="bold"
              >
                R$ 24,99
              </Text>
              <Button
                fontSize="0.9rem"
                w="100%"
                gap="10px"
                colorScheme="orange"
              >
                <FaShoppingCart fontSize={18} color="white" />
                Comprar
              </Button>
            </Box>
          </VStack>
        </Flex>
      </div>
    </OwlCarouselReact>
  );
};
