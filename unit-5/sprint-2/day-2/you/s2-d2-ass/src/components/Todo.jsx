
import axios from "axios";
import React,{useEffect, useState} from "react";

import { CreateTodo } from "./CreateTodo";
import { ShowTodos } from "./ShowTodo";


 export function Todo() {

    const [todos,setTodos] = useState([])
    const [page,setPage] = useState(1)

    useEffect(()=>{
       getTodos()
    },[page])

    function getTodos() {
        axios.get(`http://localhost:3004/todos?_page=${page}&_limit=2`).then((res)=>{
            setTodos(res.data)
        })
    }

    function addTodo(data) {

        fetch("http://localhost:3004/todos",{
            method:"POST",

            body:JSON.stringify({
                task:data,
                done:"not Yet"
            }),
         
           headers:{

               "Content-Type":"application/json" 
           }
        }).then((res)=>{
            console.log(res)
        })

    }

    return (
        <div>
         <CreateTodo addTodo={addTodo} />
     ,<ShowTodos todos={todos} />
     <button onClick={()=>{setPage(page-1)}}>Pre</button>
     <button onClick={()=>{setPage(page+1)}}>Next</button>
        </div>
    )

 }