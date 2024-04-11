import CartContext from "./carContext";
import { useState } from "react";
export default function CartContextProvider({children}){
    const [cartItems, setCartItems] = useState([])
    return(
        <CartContext.Provider value={{ cartItems , setCartItems}}>
            {children}
        </CartContext.Provider>
    )
}