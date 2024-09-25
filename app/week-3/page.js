import ItemList from "./item-list";

export default function Page() {
    return (
        <main  className="bg-zinc-950 p-4">
            <h1 className="text-white font-bold text-2xl mb-5">Shopping List</h1>
            <ItemList/>
            <h2>Week 3</h2>
        </main>
    );
}