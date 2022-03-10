import { useState } from "react";

export function CreateTodo({addTodo}) {
 
    const [task,setTask] = useState("")


    return <div>
        <input type="text" onChange={(e)=>{setTask(e.target.value)}} />
        <button onClick={()=>{addTodo(task)}}>Add Todo</button>
    </div>

}