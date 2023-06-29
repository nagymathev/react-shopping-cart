import React from "react";
import {Item} from "../App.tsx";

export function Card({name, price, id, setCart}: {
    name: string,
    id: number,
    price: number,
    setCart: React.Dispatch<React.SetStateAction<Item[]>>
}) {
    function handleAdd(item: Item) {
        setCart(prev => {
            const elem = prev.find(e => e.id === item.id);
            if (elem === undefined) return [item, ...prev];
            elem.amount!++;
            return [...prev];
        })
    }

    return (
        <>
            <div className="card shadow-sm p-5 bg-base-100/50 gap-4 md:w-96">
                <div className="bg-base-300 h-32 flex justify-center items-center rounded">Placeholder Image</div>
                <div className="flex">
                    <div className="flex-1">
                        <h2 className="text-xl">{name}</h2>
                        <p className="text-sm">${price}</p>
                    </div>
                    <button onClick={() => handleAdd({id, name, price, amount: 1})} className="btn">Add to cart</button>
                </div>
            </div>
        </>
    );
}
