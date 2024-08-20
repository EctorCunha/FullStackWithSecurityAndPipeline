import "../../pages/RandomDogPage/randomDog.css";

export function ButtonRandomDog (props:any){
    const {handleClick} = props;

  return(
   <div>
    <button className="btnRandomDog" onClick={handleClick}>
        Gerar Imagem
      </button>
   </div>
  )};
