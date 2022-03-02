import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  test('"The logo" link points to the home page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /logo.svg/i });
    userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: /Find the top posts on Reddit/i })
    ).toBeInTheDocument();
  });

  test('"How it works" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /how it works/i });
    userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: /how it works/i })
    ).toBeInTheDocument();
    // screen.debug();
  });

  test('"About" link points to the correct page', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: /About/i });
    userEvent.click(link);

    expect(screen.getByRole("heading", { name: /About/i })).toBeInTheDocument();
  });
});
