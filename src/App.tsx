import "./index.css"
import {Route, Routes} from "react-router-dom";
import {Navbar} from "./components/Navbar.tsx";
import {Home} from "./components/Home.tsx";
import {Shop} from "./components/Shop.tsx";
import {Cart} from "./components/Cart.tsx";
import {useState} from "react";
import {Error} from "./Error.tsx";

export interface Item {
    id: number,
    name: string,
    price: number,
    amount?: number
}

function App() {
    const [cartItems, setCartItems] = useState<Item[]>([]);

    return (
        <>
            <div className="md:mt-16"></div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<Shop setCart={setCartItems}/>}/>
                <Route path="/cart" element={<Cart cartItems={cartItems} setCartItems={setCartItems}/>}/>
                <Route path="/*" element={<Error/>}/>
            </Routes>
            <Navbar cartSize={cartItems.length}/>
        </>
    );
}

export default App
