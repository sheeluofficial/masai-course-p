import axios from "axios"


export const GET_TODO = "GET_TODO"
export const GET_TODO_LOADING = "GET_TODO_LOADING"
export const GET_TODO_ERROR = "GET_TODO_ERROR"

export const getTodo = (todo)=>({type:GET_TODO,payload:todo})
export const getTodoLoading = ()=>({type:GET_TODO_LOADING})
export const getTodoError = ()=>({type:GET_TODO_ERROR})

export const getTodoData = ()=>(dispatch)=>{
    dispatch(getTodoLoading())
    axios.get("http://localhost:8080/todos").then(({data})=>{
        dispatch(getTodo(data))
    }).catch(()=>{
        dispatch(getTodoError())
    })
}