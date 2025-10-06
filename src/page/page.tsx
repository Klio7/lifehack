import MainCard from "@/components/mainCard";
import { Flex } from "@chakra-ui/react";

function Page() {
  return (
    <Flex
      alignItems="center"
      justify="center"
      bg="rgb(247, 243, 239)"
      w="100vw"
      h="100vh"
      my="auto"
      mx="0"
    >
      <MainCard />
    </Flex>
  );
}

export default Page;
