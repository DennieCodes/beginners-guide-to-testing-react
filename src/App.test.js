import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

describe("Header", () => {
  test.each([
    { a: "logo.svg", expected: "Find the top posts on Reddit" },
    { a: "How it works", expected: "How it works" },
    { a: "About", expected: "About" },
  ])(".add($a, $expected)", ({ a, expected }) => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const link = screen.getByRole("link", { name: `${a}` });
    userEvent.click(link);

    expect(
      screen.getByRole("heading", { name: `${expected}` })
    ).toBeInTheDocument();
  });
});

// test('"How it works" link points to the correct page', () => {
//   render(
//     <MemoryRouter>
//       <App />
//     </MemoryRouter>
//   );

//   const link = screen.getByRole("link", { name: /how it works/i });
//   userEvent.click(link);

//   expect(
//     screen.getByRole("heading", { name: /how it works/i })
//   ).toBeInTheDocument();
//   // screen.debug();
// });
