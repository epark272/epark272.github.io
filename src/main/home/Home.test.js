import { render, screen } from "@testing-library/react";
import Home from "./home/Home";

test("renders hero headline", () => {
  render(<Home />);
  const headline = screen.getByText(/I'm Edward/i);
  expect(headline).toBeInTheDocument();
});
