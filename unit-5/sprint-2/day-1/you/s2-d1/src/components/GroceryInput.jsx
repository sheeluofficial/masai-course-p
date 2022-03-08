
import { useState } from "react";

export const GroceryInput = ({addItem})=>{

    const [item,setItem] = useState("")

    return (
        <div>
            <input type="text" onChange={(e)=>{

            setItem(e.target.value)

            }} />

            <button onClick={()=>{
         
          addItem(item)
            }}>Add Item</button>
        </div>
    )
}