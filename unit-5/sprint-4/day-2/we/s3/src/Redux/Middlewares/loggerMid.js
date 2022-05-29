
export const loggerMid = (store)=>(next)=>(action)=>{
    if(action.type==="ADD_TODO") {
        // action.payload += "hi"
    }
    // console.log(action)
    if(typeof action ==="function") {

      return  action(store.dispatch)
    }
// console.log("hi",store.getState())
next(action)
}