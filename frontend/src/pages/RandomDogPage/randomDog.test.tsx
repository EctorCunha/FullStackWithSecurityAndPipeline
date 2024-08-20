import { render, screen } from "@testing-library/react";
import { describe, it } from "vitest";
import { RandomDogPage } from ".";


describe("RandomDogPage Component", () => {

    it("should render ButtonRandomDog title", () => {
        render(<RandomDogPage />);
        const randomDog = screen.getByText("Imagem aleatória da API Random Dog");
        expect(randomDog).toBeInTheDocument();
    });
    
    });