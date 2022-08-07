import { render, screen } from "@testing-library/react";
import Login from "./Login";

test("username input should be rendered", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl).toBeInTheDocument();
});

test("password input should be rendered", () => {
  render(<Login />);
  const paswordInputEl = screen.getByPlaceholderText(/password/i);
  expect(paswordInputEl).toBeInTheDocument();
});

test("button should be rendered", () => {
  render(<Login />);
  const buttonInputEl = screen.getByRole("button");
  expect(buttonInputEl).toBeInTheDocument();
});

test("username input should be empty", () => {
  render(<Login />);
  const userInputEl = screen.getByPlaceholderText(/username/i);
  expect(userInputEl.value).toBe("")
});

test("PASSWORD input should be empty", () => {
  render(<Login />);
  const paswordInputEl = screen.getByPlaceholderText(/password/i);
  expect(paswordInputEl.value).toBe("")
});
