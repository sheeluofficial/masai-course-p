import { useContext} from "react";
import { CartContext } from "../../context/CartContext";


export function Button() {

    const data = useContext(CartContext)
console.log(data)
    return <button onClick={()=>{
      data.handleChange(1)
    }}>click me</button>
}