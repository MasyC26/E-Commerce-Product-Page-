import { useState } from "react";
import Head from "./header";
import PageContent from "./content";
import "./App.css";

function App() {
    const [cartItems, setCartItems] = useState([]); // { image, count }

    const addToCart = (item) => {
        console.log("addToCart reçu dans App:", item);
        setCartItems([item]);
    };

    const removeFromCart = () => {
        setCartItems([]);
    };

    const totalCount = cartItems.reduce((sum, item) => sum + item.count, 0);
    console.log("Rendu de App — totalCount:", totalCount, "cartItems:", cartItems);
    return (
        <div className="App">
            <Head
                cartItems={cartItems}
                totalCount={totalCount}
                removeFromCart={removeFromCart}
            />
            <PageContent addToCart={addToCart} />
        </div>
    );
}

export default App;