import React from "react";
import { render, screen } from "@testing-library/react";
import Layout from "../../pages/Layout";
import { MemoryRouter } from "react-router-dom";

describe("Layout", () => {
  it("should render correctly Layout component", () => {
    render(
      <MemoryRouter>
        <Layout title="My Profile" goBack>
          <div>My Profile Page</div>
        </Layout>
      </MemoryRouter>
    );

    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("My Profile Page")).toBeInTheDocument();
    expect(screen.getByTestId("dropdownId")).toBeInTheDocument();
  });
});
