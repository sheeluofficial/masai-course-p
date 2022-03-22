import { createContext, useState } from "react";

const CartContext = createContext();


const CartContextProvider = ({children})=>{

    const [cart,setCart] = useState(12)

    function handleChange(value) {
        setCart(cart+value)
    }

  

    return <CartContext.Provider value={{cart,handleChange}}>{children}</CartContext.Provider>
}

export {CartContextProvider,CartContext}