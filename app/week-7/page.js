"use client";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-zinc-950 p-4">
      <h1 className="text-white font-bold text-2xl mb-5">Shopping List</h1>
      <NewItem onSubmit={addItem} />
      <ItemList items={items} />
      <h2>Week 3</h2>
    </main>
  );
}
