import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ButtonLogin } from ".";

describe("ButtonLogin Compontent", () => {
  it("should render ButtonLogin with text Entrar", () => {
    render(<ButtonLogin />);

    const buttonLogin = screen.findAllByText("Entrar");
    waitFor(() => expect(buttonLogin).toBeInTheDocument());
  });

  it("should be clicked ButtonLogin", /* async */ () => {
    render(<ButtonLogin />);

    // const buttonMarge = await screen.findByText("Entrar")
    // userEvent.click(buttonMarge)

    const buttonBack = screen.getByRole("button");
    userEvent.click(buttonBack);
    expect(buttonBack).toBeInTheDocument();
  });
});
