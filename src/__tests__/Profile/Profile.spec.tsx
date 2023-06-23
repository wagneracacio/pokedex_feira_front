import { render, screen } from "@testing-library/react";
import { ProfilePage } from "../../pages/ProfilePage/ProfilePage";
import userEvent from "@testing-library/user-event";
import TestSetup from "../TestSetup";

describe("Profile", () => {
  it("should validate fields", async () => {
    render(
      <TestSetup>
        <ProfilePage />
      </TestSetup>
    );

    expect(await screen.findByText(/Meu Perfil/i)).toBeInTheDocument();
    expect(await screen.findByTestId("displayName")).toBeInTheDocument();
    userEvent.type(await screen.findByTestId("phoneNumber"), "a{backspace}");
    await userEvent.type(await screen.findByTestId("displayName"), "a{backspace}");
    const requiredMessage = screen.getByText(/campo obrigatório/i);
    expect(requiredMessage).toBeInTheDocument();
    expect(screen.getByText(/o telefone deve ter no mínimo 11 dígitos/i)).toBeInTheDocument();

    await userEvent.type(await screen.findByTestId("phoneNumber"), "12345678901");
    await userEvent.type(await screen.findByTestId("displayName"), "ad");

    const errorMessage = screen.getByText(
      /o nome deve ter no mínimo 3 caracteres/i
    );
    expect(errorMessage).toBeInTheDocument();

    await userEvent.type(await screen.findByTestId("displayName"), "d");
    expect(errorMessage).toBeEmptyDOMElement();

    expect(await screen.findByText(/salvar/i)).toBeEnabled();
  });
  it("should update profile", async () => {
    render(
      <TestSetup>
        <ProfilePage />
      </TestSetup>
    );

    await userEvent.type(
      await screen.findByTestId("displayName"),
      "Pedro Miguel"
    );

    await userEvent.type(
      await screen.findByTestId("phoneNumber"),
      "19999884011"
    );

    await userEvent.type(
      await screen.findByTestId("descricao"),
      "Desenvolvedor Frontend"
    );

    await  userEvent.click(await screen.findByText(/salvar/i));

    expect(await screen.findByText(/perfil atualizado com sucesso/i)).toBeInTheDocument();
  });
});
