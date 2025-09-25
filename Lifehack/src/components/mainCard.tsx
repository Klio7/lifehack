import { Card } from "@chakra-ui/react";
import CardButton from "./cardButton";

function MainCard() {
  return (
    <Card.Root
      m="40px"
      py="48px"
      px="40px"
      alignItems="center"
      rounded="40px"
      boxShadow="rgba(0, 0, 0, 0.09) 16px 16px 24px"
      bg="rgb(250, 247, 242)"
    >
      <Card.Header
        fontFamily="Playfair Display"
        fontSize="64px"
        fontWeight="700"
        lineHeight="1.1"
        mb="32px"
      >
        Lifehack of the Day
      </Card.Header>
      <Card.Body>
        <Card.Description
          fontSize="28px"
          fontWeight="400"
          lineHeight="1.4"
          mb="32px"
          textAlign="center"
        >
          Положите телефон в режим полёта на 1-2 минуты, а затем включите обратно — это поможет
          ускорить медленное интернет-соединение.
        </Card.Description>
      </Card.Body>
      <Card.Footer justifyContent="flex-end" alignContent="center" gap="32px" p="24px">
        <CardButton bg="transparent" variant="surface" buttonTitle="Share" />
        <CardButton bg="rgb(232, 221, 212);" variant="subtle" buttonTitle="Show new lifehack" />
      </Card.Footer>
    </Card.Root>
  );
}

export default MainCard;
