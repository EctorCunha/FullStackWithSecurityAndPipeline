import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import { ButtonRandomDog } from ".";


describe("ButtonRandomDog Component", () => {
    it("should render ButtonRandomDog", async () => {
        render(<ButtonRandomDog />);
        const buttonRandomDog = screen.getByText("Gerar Imagem");
        expect(buttonRandomDog).toBeInTheDocument();
    });
    it("ButtonRandomDog should be clicked ButtonRandomDog, call an api and generate an image", async () => {
        render(<ButtonRandomDog />);
        const buttonRandomDog = screen.getByText("Gerar Imagem");
        userEvent.click(buttonRandomDog)
    });
    });