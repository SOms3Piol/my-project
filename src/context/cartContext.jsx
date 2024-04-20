import CartContext from "./carContext";
import { useState } from "react";
export default function CartContextProvider({children}){
    const [cartItems, setCartItems] = useState([])
    const total = cartItems.length;
    return(
        <CartContext.Provider value={{ cartItems , setCartItems , total}}>
            {children}
        </CartContext.Provider>
    )
}