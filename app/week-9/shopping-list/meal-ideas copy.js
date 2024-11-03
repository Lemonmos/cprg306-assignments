"use client";

import { useState, useEffect } from "react";

export default function MealIdeas({ meals, handleClickMeal }) {
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
          onClick={handleClickMeal}
        >
          <p className="text-white font-bold text-l">{meal.strMeal}</p>
        </section>
      ))}
      ;
    </div>
  );
}
