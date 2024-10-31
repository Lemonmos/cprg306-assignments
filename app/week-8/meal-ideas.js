"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async () => {
    let cleanedIngredient = ingredient
      .replace(
        /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
        ""
      )
      .trim()
      .split(",")[0];

    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/filter.php?i=" +
        cleanedIngredient
    );
    const data = await response.json();
    console.log(data);
    if (data.meals) {
      return data.meals;
    } else {
      return [];
    }
  };

  const loadMealIdeas = async (ingredient) => {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas(ingredient);
    }
  }, [ingredient]);

  return (
    <div>
      <div className="justify-left">
        <h2 className="text-white">Meal Ideas</h2>
        <p className="text-white">Select an item to see meal ideas</p>
      </div>
      {meals.map((meal) => (
        <section
          key={meal.idMeal}
          className="bg-zinc-700 w-60 m-2"
          //   onClick={handleClickMeal}
        >
          <p className="text-white font-bold text-l">{meal.strMeal}</p>
        </section>
      ))}
      ;
    </div>
  );
}
