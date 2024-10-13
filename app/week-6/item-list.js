"use client";
import Item from "./item";
import items from "./items.json";
import { useState } from "react";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let reducedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  console.log("items");
  console.log(reducedItems);

  const sortItems = () => {
    items.sort((a, b) => {
      if (sortBy === "name") {
        return a.name.localeCompare(b.name);
      } else if (sortBy === "category") {
        return a.category.localeCompare(b.category);
      }
    });
    if (sortBy === "groupedCategory") {
      reducedItems = items.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
    }
  };

  sortItems();

  const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const clickHandle = (value) => {
    if (value === sortBy) {
      return;
    }
    setSortBy(value);
    sortItems();
  };

  return (
    <div className="m-3">
      <div>
        <label htmlFor="sort" className="text-white">
          Sort by:
        </label>
        <button
          className={`p-1 m-2 w-28 text-white ${
            sortBy === "name" ? "bg-orange-400" : "bg-orange-700"
          }`}
          onClick={() => clickHandle("name")}
        >
          Name
        </button>
        <button
          className={`p-1 m-2 w-28 text-white ${
            sortBy === "category" ? "bg-orange-400" : "bg-orange-700"
          }`}
          onClick={() => clickHandle("category")}
        >
          category
        </button>
        <button
          className={`p-1 m-2 w-28 text-white ${
            sortBy === "groupedCategory" ? "bg-orange-400" : "bg-orange-700"
          }`}
          onClick={() => clickHandle("groupedCategory")}
        >
          Grouped Category
        </button>
      </div>
      {sortBy !== "groupedCategory"
        ? items.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))
        : Object.entries(reducedItems).map(([category, items]) => (
            <div key={category} style={{ marginBottom: "20px" }}>
              <h2 className="text-white text-2xl ">{category}</h2>
              {items.map((item) => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </div>
          ))}
    </div>
  );
}
