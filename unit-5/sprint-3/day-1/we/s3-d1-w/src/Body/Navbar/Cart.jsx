import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


export function Cart() {
    const {cart} = useContext(CartContext)

    return <div>
        <h2>Cart item : {cart}</h2>
          </div>
}