"use client";

import {useState} from "react";

export default function NewItem() {
    
        const [name , setName] = useState("");
        const [category , setCategory] = useState("produce");
        const [quantity , setQuantity] = useState(1);
        const increment = () => {
            if (quantity >= 20) {
                return;
            }
            setQuantity(quantity + 1);
        }
        const decrement = () => {
            if (quantity <= 1) {
                return;
            }
            setQuantity(quantity - 1);
        }
        
        const handleSubmit = (event) => {
            event.preventDefault();

            const item = {
                name,
                category,
                quantity
            }
            
            console.log(item);
            alert("Added name: " + name + " category: " + category + " quantity: " + quantity);
            reset();
        }

        const printItem = () => {
            console.log(name, category, quantity);
        }

        const reset = () => {
            setName("");
            setCategory("produce");
            setQuantity(1);
        }

        const categoryOptions = ["Produce", "Dairy", "Bakery", "Meat", "Frozen Foods", "Canned Goods", "Dry Goods", "Beverages", "Snacks", "Household", "Other"];

    return (
        <div className="bg-black h-screen flex justify-center">
            <div className=" h-32">
                <form onSubmit={handleSubmit} className="bg-slate-600 p-2 m-4">
                    <input type="text" className="mb-4 rounded-md w-full p-2" value={name} onChange={(event) => setName(event.target.value)} placeholder="Item Name"  required/>
                    <div className="mb-4 flex justify-between items-center">
                        <div className="bg-white w-36  rounded-md mt-1 p-2"> 
                            <div className="flex justify-between">
                                <span className="bg-white">{quantity}</span>
                                <div className="flex">   
                                    <button type="button" className={ `text-white  w-8 rounded + ${quantity ===1 ? 'bg-gray-500':'bg-blue-500'}`} onClick={decrement}>-</button>
                                    <button type="button" className={ `text-white  w-8 rounded ml-1 + ${quantity ===20 ? 'bg-gray-500':'bg-blue-500'}`} onClick={increment}>+</button>                       
                                </div>
                            </div>
                        </div>
                        <select className="rounded-md p-3" value={category} onChange={(event) => setCategory(event.target.value)}>
                            {categoryOptions.map((categoryOption) => {
                                return <option key={categoryOption} value={categoryOption}>{categoryOption}</option>
                            })}
                        </select>
                    </div>
                    <button type="submit" className="py-2 px-4 rounded-md w-full block text-white bg-blue-500 hover:bg-blue-400" >+</button>
                </form>
            </div>
        </div>
    );

}