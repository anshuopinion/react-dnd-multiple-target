import { Box, Flex, Heading } from "@chakra-ui/layout";
import { FC } from "react";

interface HeadersProps {
  heading: string;
}

const Headers: FC<HeadersProps> = ({ heading }) => {
  return (
    <Flex justify="center" my="4">
      <Box bg="black" px="4" py="2" borderRadius="sm" boxShadow="md">
        <Heading color="white" fontSize="xl" as="h1">
          {heading}
        </Heading>
      </Box>
    </Flex>
  );
};
export default Headers;
