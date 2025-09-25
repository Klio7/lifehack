import { Button } from "@chakra-ui/react";

interface ButtonProps {
  buttonTitle: string;
  variant?: "outline" | "solid" | "subtle" | "surface" | "ghost" | "plain" | undefined;
  bg: string;
}

function CardButton({ buttonTitle, variant, bg }: ButtonProps) {
  return (
    <Button
      size="xl"
      borderRadius="24px"
      bg={bg}
      variant={variant}
      fontSize="22px"
      fontWeight="400"
    >
      {buttonTitle}
    </Button>
  );
}

export default CardButton;
