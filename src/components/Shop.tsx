import data from "../shopData.json"
import {Card} from "./Card.tsx";
import {Item} from "../App.tsx";
import React from "react";

export function Shop({setCart}: { setCart: React.Dispatch<React.SetStateAction<Item[]>> }) {
    return (
        <div className="min-h-screen bg-base-200">
            <div className="flex flex-col md:flex-row flex-wrap gap-3 p-3">
                {data.items.map((item: Item) => {
                    return <Card setCart={setCart} key={item.id} {...item}></Card>
                })}
            </div>
        </div>
    );
}
