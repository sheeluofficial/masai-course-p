import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";


export function User() {
    const {id}  = useParams()
    let error =useState(false);
    const [user,setUser]  = useState({})
    useEffect(()=>{
       axios.get(`https://reqres.in/api/users/${id}`).then((data)=>{
           setUser(data.data.data)
       }).catch((err)=>{
         error[1](true)
       })
    })

    if(error[0]) {
        return <Navigate to="/error"/>
    }

    return <div>
   <span>{user.first_name} </span>   <span>{user.last_name}</span>
   <img src={user.avatar} alt="" />
    </div>
}