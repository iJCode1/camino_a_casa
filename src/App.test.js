import React from "react";
import { render } from "@testing-library/react";
import App from "./App.jsx";

test("renders without crashing", async () => {
  const { findByText } = render(<App />);
  const text = await findByText(/WikiPet/i);
  expect(text).toBeInTheDocument();
});
