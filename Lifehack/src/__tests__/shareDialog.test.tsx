import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "@/components/ui/provider";
import ShareDialog from "@/components/shareDialog";

const renderWithProvider = (ui: React.ReactElement) => render(<Provider>{ui}</Provider>);
describe("Проверка работы компонента ShareDialog", () => {
  test("В компоненте отражаются ссылки на соцсети(VK, WhatsUp, Telegram, Facebook)", async () => {
    renderWithProvider(<ShareDialog />);
    fireEvent.click(screen.getByRole("button", { name: /Поделиться/i }));
    await waitFor(() => {
      expect(screen.getByRole("link", { name: /vk.com/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /instagram.com/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /facebook.com/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /wa.me/i })).toBeInTheDocument();
      expect(screen.getByRole("link", { name: /t.me/i })).toBeInTheDocument();
    });
  });

  test("В компоненте отражаются иконки соцсетей(VK, WhatsUp, Telegram, Facebook)", async () => {
    renderWithProvider(<ShareDialog />);
    fireEvent.click(screen.getByRole("button", { name: /Поделиться/i }));
    await waitFor(() => {
      const dialogBody = screen.getByRole("dialog");
      expect(dialogBody).not.toHaveAttribute("aria-hidden", "true");
    });

    expect(await screen.findByLabelText(/vk icon/i, { selector: "svg" })).toBeInTheDocument();
    expect(
      await screen.findByLabelText(/instagram icon/i, { selector: "svg" })
    ).toBeInTheDocument();
    expect(await screen.findByLabelText(/facebook icon/i, { selector: "svg" })).toBeInTheDocument();
    expect(await screen.findByLabelText(/whatsup icon/i, { selector: "svg" })).toBeInTheDocument();
    expect(await screen.findByLabelText(/telegram icon/i, { selector: "svg" })).toBeInTheDocument();
  });

  test("В компоненте отображается кнопка 'Закрыть'", async () => {
    renderWithProvider(<ShareDialog />);
    fireEvent.click(screen.getByRole("button", { name: /Поделиться/i }));
    expect(await screen.findByRole("button", { name: /Закрыть/i })).toBeInTheDocument();
  });

  test("Кнопка 'Закрыть' закрывает диалоговое окно", async () => {
    renderWithProvider(<ShareDialog />);
    fireEvent.click(screen.getByRole("button", { name: /Поделиться/i }));
    fireEvent.click(await screen.findByRole("button", { name: /Закрыть/i }));
    await waitFor(() => {
      expect(screen.queryByText(/Выберите соцсеть/i)).not.toBeInTheDocument();
    });
  });
});
