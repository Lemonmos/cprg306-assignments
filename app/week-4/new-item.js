"use client";

import {useState} from "react";

export default function NewItem() {

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
return (    
    <div className="flex justify-center items-center">
        <div className="w-40 bg-white m-1 flex justify-center items-center">
            <p className="w-20 bg-white text-center">{quantity}</p>
            <button className={ `text-white  w-10 rounded m-1 + ${quantity ===1 ? 'bg-gray-500':'bg-blue-500'}`} onClick={decrement}>-</button>
            <button className={ `text-white  w-10 rounded m-1 + ${quantity ===20 ? 'bg-gray-500':'bg-blue-500'}`} onClick={increment}>+</button>
        </div>
    </div>
);
}