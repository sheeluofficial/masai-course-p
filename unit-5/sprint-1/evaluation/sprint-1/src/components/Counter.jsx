
import { useState } from "react";

 
export function Counter({initial,addcls,remcls,totalcls,itemName,setTotal}) {

let [item,setItem]  = useState(initial)

function handleChange(value) {
    setItem((pre)=>{
        if(pre===0&&value===-1) {
            return 0
        }
        setTotal((pre)=>{
            return pre+value
        })
        return pre + value
    })
}

 return (  <div className="items">
        <span >{itemName}</span>
        <button onClick={()=>{
            handleChange(+1)
        }} className={addcls}>+</button>
        <button onClick={()=>{
            handleChange(-1)
        }} className={remcls}>-</button>
        <span className={totalcls}>{item}</span>
        </div>
  )
}

