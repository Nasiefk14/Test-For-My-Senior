import { useState, useEffect } from "react";
import { ICocktail } from "../types/interfaces/interfaces";
import CocktailCard from "../components/CocktailCard";

const CocktailListShowcase = () => {
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
            );
            const data = await response.json();
            setCocktails(data.drinks.slice(0, 10))
        };
        fetchData();
    }, []);

    return (
        <div>
            <h1>My Cocktail List</h1>
            {cocktails.map((cocktail: ICocktail) => (
                <CocktailCard {...cocktail} />
            ))}
        </div>
    );
};

export default CocktailListShowcase;
