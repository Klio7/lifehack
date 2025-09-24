interface ButtonProps {
  buttonTitle: string;
}

function Button({ buttonTitle }: ButtonProps) {
  return <button>{buttonTitle}</button>;
}

export default Button;
