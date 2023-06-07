import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

test("renders page home page with Home", () => {
  render(<React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>);
  const linkElement = screen.getByText(/MacroGenius/i);
  expect(linkElement).toBeInTheDocument();
});