import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { getTodo, getTodoData, getTodoError, getTodoLoading } from "../Redux/Todo/action"
export const Todo  = ()=>{
const [todo,setTodo] = useState("")
    const {todos,loading,error} = useSelector((store)=>store.todo)
    const dispatch = useDispatch()
    
    const getTodos = ()=>{
     dispatch(getTodoData())
    }

    useEffect(()=>{
        getTodos()
    },[])

    const addTodos = ()=>{
        axios.post("http://localhost:8080/todos",({title:todo,status:false})).then(()=>{
            getTodos()
        })
    }
    return  loading?"...loading":error?"error occurred": (
        <div>
        <input value={todo} type="text" onChange={(e)=>{
            setTodo(e.target.value)
        }} />
         <button onClick={()=>{
            addTodos()
             setTodo("")
         }}>
             getTodo
         </button>

         <div>
             {
             todos.map((todo)=><h3 key={todo.title}>{todo.title}</h3>)
             }
         </div>

        </div>
    )
}