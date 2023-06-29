import {Item} from "../App.tsx";
import {Link} from "react-router-dom";

export function Cart({cartItems, setCartItems}: {cartItems: Item[], setCartItems: React.Dispatch<React.SetStateAction<Item[]>>}) {
    function handleInput(e: any, id: number) {
        setCartItems(prevState => {
            prevState[id].amount = e.target.value;
            return [...prevState];
        });
    }

    return (
        <div className="min-h-screen bg-base-200 relative">
            <div className="flex flex-col flex-wrap gap-3 p-3">
                {cartItems.map(item => {
                    return (
                        <div key={item.id} className="card flex-row bg-base-100/60 shadow-sm p-4">
                            <div className="flex-1">
                                <h2 className="text-lg">{item.name}</h2>
                                <p className="text-sm">${item.price * (item.amount ?? 1)}</p>
                            </div>
                            <input className="w-16 rounded p-3" type="number" onChange={(e) => handleInput(e, item.id)} value={item.amount}/>
                        </div>
                    )
                })}
            </div>
            <Link to={"/checkout"} className="btn bg-base-100 absolute bottom-20 right-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </Link>
        </div>
    );
}
