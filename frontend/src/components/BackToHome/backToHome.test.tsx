import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { BackToHome } from ".";

describe("BackToHome Component", () => {
  it("should render BackToHome with text Página Inicial", () => {
    render(<BackToHome />);

    const buttonBack = screen.findByText("Página Inicial");
    waitFor(() => expect(buttonBack).toBeInTheDocument());
  });

  it("should be clicked BackToHome", () => {
    render(<BackToHome />);

    const buttonBack = screen.getByRole("link");
    userEvent.click(buttonBack);
    expect(buttonBack).toBeInTheDocument();
  });
});
