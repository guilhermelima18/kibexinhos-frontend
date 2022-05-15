import { Button } from "@chakra-ui/react";

interface PaginationItemProps {
  isCurrent?: boolean;
  number: number;
  onPageChange: (page: number) => void;
}

export function PaginationItem({
  isCurrent = false,
  number,
  onPageChange,
}: PaginationItemProps) {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="0.9rem"
        width="4"
        colorScheme="orange"
        disabled
        _disabled={{
          bg: "orange.500",
          cursor: "default",
        }}
      >
        {number}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="0.9rem"
      width="4"
      border="1px solid"
      borderColor="gray.300"
      bg="white"
      _hover={{
        bg: "gray.100",
      }}
      onClick={() => onPageChange(number)}
    >
      {number}
    </Button>
  );
}
