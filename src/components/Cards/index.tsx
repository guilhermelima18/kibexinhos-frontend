import { ReactNode } from "react";
import { SimpleGrid } from "@chakra-ui/react";

type CardsProps = {
  children: ReactNode;
};

export function Cards({ children }: CardsProps) {
  return (
    <SimpleGrid
      w="100%"
      minChildWidth="250px"
      justifyItems="center"
      spacing={5}
    >
      {children}
    </SimpleGrid>
  );
}
