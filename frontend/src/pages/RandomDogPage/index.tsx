import { useState } from "react";
import { BackToHome } from "../../components/BackToHome";
import { ButtonRandomDog } from "../../components/ButtonRandomDog";
import "./randomDog.css";

interface RandomDogProps {
  message: string;
}

export function RandomDogPage() {
  const [randomImage, setRandomImage] = useState({} as RandomDogProps);

  function handleClick() {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setRandomImage(data));
  }

  return (
    <>
    <BackToHome/>
    <div className="randomDogContainer">
      <h1>Imagem aleatória da API Random Dog</h1>
      <ButtonRandomDog handleClick={handleClick}/>
      {randomImage.message && (
        <img className="imagem" src={randomImage.message} alt="Imagem aleatória gerada pela API" />
      )}
    </div>
    </>
  );
}
