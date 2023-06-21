import { render, screen } from "@testing-library/react";
import Spinner from "../../components/Spinner";

describe("Teste de componente Spinner", () => {
  it("Deve renderizar componente com valores padroes", () => {
    render(<Spinner />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  it("Deve renderzar componente com cor passada", () => {
    render(<Spinner color="primary" />);
    expect(screen.getByTestId("spinner")).toHaveClass("text-primary");
  });
  it("Deve renderizar componente dentro de outra tag", () => {
    render(<Spinner Tag={"a"} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
  });
  it("Deve renderizar componente com children", () => {
    render(
      <Spinner>
        <div data-testid="test-children">Teste</div>
      </Spinner>
    );
    expect(screen.getByTestId("test-children")).toBeInTheDocument();
  });
  it("Deve renderizar componente com classname", () => {
    render(<Spinner className="teste" />);
    expect(screen.getByTestId("spinner")).toHaveClass("teste");
  });
  it("Deve renderizar componente com tipo grow", () => {
    render(<Spinner type="grow" />);
    expect(screen.getByTestId("spinner")).toHaveClass("spinner-grow");
  });
});
