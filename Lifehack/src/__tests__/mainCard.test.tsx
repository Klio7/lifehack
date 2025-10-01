import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";
import MainCard from "@/components/mainCard";

const renderWithProvider = (ui: React.ReactElement) => render(<Provider>{ui}</Provider>);
describe("Проверка работы компонента MainCard и кнопок", () => {
  test("Компонент mainCard отражает название сайта корректно", () => {
    renderWithProvider(<MainCard />);
    expect(screen.getByText(/Лайфхак дня/i)).toBeInTheDocument();
  });

  test("В компоненте отображаются обе кнопки", () => {
    renderWithProvider(<MainCard />);
    expect(screen.getByRole("button", { name: /Поделиться/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Новый лайфхак/i })).toBeInTheDocument();
  });

  test("Кнопка 'Поделиться' открывает диалоговое окно", async () => {
    renderWithProvider(<MainCard />);
    await waitFor(() => {
      fireEvent.click(screen.getByRole("button", { name: /Поделиться/i }));
    });
    expect(screen.getByText(/Выберите соцсеть/i)).toBeInTheDocument();
  });

  test("При нажатии на кнопку 'Новый лайфхак'отражается новый лайфхак", () => {
    renderWithProvider(<MainCard />);
    const initialLifehack = screen.getByTestId("lifehackText").textContent;
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: /Новый лайфхак/i }));
    });
    expect(screen.getByTestId("lifehackText").textContent).not.toEqual(initialLifehack);
  });
});
