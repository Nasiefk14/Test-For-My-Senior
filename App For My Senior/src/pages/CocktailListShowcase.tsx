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
      setCocktails(data.drinks.slice(0, 10));
    };
    fetchData();
  }, []);

  return (
    <div className="h-screen m-auto text-center">
      <h1 className="text-center text-3xl font-bold mb-5">My Cocktail List</h1>
      <div className="grid grid-cols-5 gap-4">
        {cocktails.map((cocktail: ICocktail) => (
          <CocktailCard {...cocktail} />
        ))}
      </div>
    </div>
  );
};

export default CocktailListShowcase;
