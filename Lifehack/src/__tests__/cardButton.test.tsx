import { render, screen } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";
import CardButton from "@/components/cardButton.tsx";

test("Кнопка отражает название", () => {
  render(
    <Provider>
      <CardButton bg="transparent" variant="surface" buttonTitle="Share" />
    </Provider>
  );
  expect(screen.getByText(/Share/i)).toBeInTheDocument();
});
