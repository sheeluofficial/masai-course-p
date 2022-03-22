import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Users() {
    const [users,setUsers] = useState([])
    useEffect(()=>{
      axios.get("https://reqres.in/api/users").then((data)=>{
      setUsers(data.data.data)
      })
    },[])

    return <div>
       {users.map(({id,first_name,last_name,avatar})=>{
           return <div key={id}>
              <Link to={`/user/${id}`}> {first_name} </Link>
           </div>
       })}
    </div>
}