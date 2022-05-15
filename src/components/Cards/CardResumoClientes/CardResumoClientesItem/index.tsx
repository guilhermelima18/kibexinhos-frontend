import { Box, Heading, Text } from "@chakra-ui/react";

type CardResumoClientesItemProps = {
  cardTitle: string;
  cardSubtitle: string;
  borderColor: string;
};

export const CardResumoClientesItem = ({
  cardTitle,
  cardSubtitle,
  borderColor,
}: CardResumoClientesItemProps) => {
  return (
    <Box
      bg="white"
      w="100%"
      display="flex"
      flexDir="column"
      gap="5px"
      borderTop="2px solid"
      borderColor={borderColor}
      px="5"
      py="5"
      borderRadius="md"
    >
      <Text fontSize="0.8rem" color="gray.600">
        {cardTitle}
      </Text>
      <Heading fontSize="1.2rem" color="gray.600">
        {cardSubtitle}
      </Heading>
    </Box>
  );
};
