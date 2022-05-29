import {  GET_TODO, GET_TODO_ERROR, GET_TODO_LOADING } from "./action";
let inItState = {
    todos:[],
    loading:false,
    error:false
}

export const todoReducer = (store=inItState,{type,payload})=>{
    switch(type) {
   
        case GET_TODO:return {...store,todos:[...payload],
        loading:false,
        error:false
        };
        case GET_TODO_LOADING: return {
            ...store,
            loading:true
        };
        case  GET_TODO_ERROR: return {
            ...store,
            error:true,
            loading:false
        }
        default:
            return store;
    }
}