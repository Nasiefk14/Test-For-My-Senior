import { ICocktail } from "../types/interfaces/interfaces";

const CocktailCard = (props: ICocktail) => {
  return (
    <div key={props.idDrink}>
      <h2>{props.strDrink}</h2>
      <img src={props.strDrinkThumb} alt={props.strDrink} />
    </div>
  );
};

export default CocktailCard;
