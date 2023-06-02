import React from 'react';
import { render, screen } from "@testing-library/react";
import TestProvider from "../TestProvider";

describe("Layout", () => {
  it("should render correctly Layout component", () => {
    render(
      <TestProvider title="My Profile">
          <div>My Profile Page</div>
      </TestProvider>
    );

    expect(screen.getByText("My Profile")).toBeInTheDocument();
    expect(screen.getByText("My Profile Page")).toBeInTheDocument();
    expect(screen.getByTestId("dropdownId")).toBeInTheDocument();
  });
});
