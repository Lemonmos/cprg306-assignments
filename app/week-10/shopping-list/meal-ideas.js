"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [expandedMealId, setExpandedMealId] = useState(null); // State for expanded meal

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
    return data.meals || [];
  };

  const loadMealIdeas = async () => {
    const mealIdeas = await fetchMealIdeas();
    setMeals(mealIdeas);
  };

  const fetchMealDetails = async (mealId) => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    );
    const data = await response.json();
    return data.meals ? data.meals[0] : null;
  };

  const handleMealClick = async (mealId) => {
    if (expandedMealId === mealId) {
      // Collapse the section if it's already expanded
      setExpandedMealId(null);
    } else {
      // Expand and load the details for the selected meal
      const mealDetails = await fetchMealDetails(mealId);
      setMeals((prevMeals) =>
        prevMeals.map((meal) =>
          meal.idMeal === mealId ? { ...meal, details: mealDetails } : meal
        )
      );
      setExpandedMealId(mealId);
    }
  };

  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    }
  }, [ingredient]);

  return (
    <div>
      <div className="justify-left">
        <h2 className="text-white">Meal Ideas</h2>
        <p className="text-white">Select an item to see meal ideas</p>
      </div>

      {/* Display list of meal options */}
      {meals.map((meal) => (
        <section
          key={meal.idMeal}
          className="bg-zinc-700 w-60 m-2 cursor-pointer"
          onClick={() => handleMealClick(meal.idMeal)}
        >
          <p className="text-white font-bold text-l">{meal.strMeal}</p>

          {/* Conditionally render ingredients if this meal is expanded */}
          {expandedMealId === meal.idMeal && meal.details && (
            <div className="bg-zinc-800 text-white p-4 mt-2 rounded">
              <h3 className="font-bold text-lg">{meal.details.strMeal}</h3>
              <p>Ingredients needed:</p>
              <ul className="list-disc ml-4">
                {Array.from({ length: 20 }, (_, i) => i + 1).map((index) => {
                  const ingredient = meal.details[`strIngredient${index}`];
                  const measure = meal.details[`strMeasure${index}`];
                  return ingredient ? (
                    <li key={index}>
                      {ingredient} {measure ? `(${measure})` : ""}
                    </li>
                  ) : null;
                })}
              </ul>
            </div>
          )}
        </section>
      ))}
    </div>
  );
}
