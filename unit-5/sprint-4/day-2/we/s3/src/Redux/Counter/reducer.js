import { ADD_COUNT } from "./action";
let inItState = {count:0}
export const counterReducer = (store=inItState,{type,payload})=>{
    switch(type) {
        case ADD_COUNT:return {...store,count:store.count+payload};
        default:
            return store;
    }
}