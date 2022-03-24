import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {addCount} from "../Redux/action"
export  function Counter() {

  const count = useSelector(store=>store.count)
  const dispatch = useDispatch()

  return (
    <div>
     <h1>{count}</h1>

<button onClick={()=>{
  dispatch(addCount(3))
}}>increase</button>
    </div>
  )
}
