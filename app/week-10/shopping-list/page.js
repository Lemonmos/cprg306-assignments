"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
// import itemsData from "./items.json";
import { useState, useEffect } from "react";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "./_utils/auth-context";
import { getItems, addItem } from "./_services/shopping-list-service";

export default function Page() {
  const { user } = useUserAuth();

  if (!user) {
    return <div>Not authorized</div>;
  }

  const loadItems = async () => {
    console.log("====user.uid======");
    console.log("user.uid" + user.uid);
    getItems(user.uid).then((items) => {
      console.log("====loadItems======");
      console.log("items" + JSON.stringify(items));

      setItems(items);
    });
  };

  const [items, setItems] = useState([]);
  // const [mealIdeas, setMealIdeas] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (item) => {
    setItems([...items, item]);
    addItem(user.uid, item);
  };

  // const handleItemClick = (item) => {
  //   console.log("----");
  //   console.log(JSON.stringify(item));
  //   setMealIdeas([...item]);
  // };

  const handleItemSelect = (item) => {
    console.log("====");
    console.log(item);
    setSelectedItemName(
      item.replace(
        /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
        ""
      )
    );
  };

  useEffect(() => {
    loadItems();
  }, []);

  // useEffect(() => {
  //   console.log("====");
  //   console.log("Updated mealIdeas:", mealIdeas);
  // }, [mealIdeas]);

  return (
    <main className="bg-zinc-950 p-4">
      <h1 className="text-white font-bold text-2xl mb-5">Shopping List</h1>
      <div className="flex">
        <div className="justify-left">
          <NewItem onSubmit={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="justify-left">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
