import {
  act,
  render,
  screen,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { FormLogin } from "./index";

const mockLogin = vi.fn();

vi.mock("react-router-dom", () => ({
  ...(vi.getMockedSystemTime() as any),
  useNavigate: () => mockLogin,
}));

describe("InputLogin Compontent", () => {
  it("should render InputLogin with Username and Password", () => {
    render(<FormLogin onChange={() => mockLogin()} />);

    const inputUsername = screen.getByTestId("form-username");
    const inputPassword = screen.getByTestId("form-password");
    const inputCheckox = screen.getByTestId("form-checkbox");

    expect(inputUsername).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    userEvent.click(inputCheckox);

    act(() => {
      userEvent.keyboard('ector');
    });
  });
});
