import { useState } from "react";
import { ICocktail } from "../types/interfaces/interfaces";

const CocktailCard = (props: ICocktail) => {
    const [showing, setShowing] = useState(false); 
    return (
        <div key={props.idDrink} className="text-center bg-gray-100 rounded-md border-4 relative w-60 h-72" style={{border: showing ? '4px solid #FFD700' : 'none'}} onClick={() => setShowing(!showing)}>
            <div style={{display: showing ? 'block' : 'none'}} className="absolute top-0 right-0 w-8 h-8 text-[#FFD700]">
                &#9733;
            </div>                
            <p className="pt-4 text-md">{props.strDrink}</p>
            <img
                src={props.strDrinkThumb}
                alt={props.strDrink}
                className="pt-2 pb-2 w-[80%] h-52 absolute bottom-0 left-1/2 transform -translate-x-1/2"
            />
        </div>
    );
};

export default CocktailCard;