import { useState } from "react"
import {GroceryInput} from "./GroceryInput"
import { GroceryList } from "./GroceryList"


export const Grocery = () =>{

const [items,setItems] = useState([])

const addItem=(text)=>{

    let obj = {
        item:text,
        id:Math.random()
    }

    setItems([obj,...items])
    console.log(items)
} 

const deleteItem=(id)=>{

    setItems(items.filter((one)=>one.id!==id))

}

    return (
        <div>
   <GroceryInput addItem={addItem} />
   <GroceryList items = {items} deleteItem={deleteItem} />
        </div>
    )

}