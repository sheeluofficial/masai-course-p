import { useNavigate } from "react-router-dom"


export function Error() {
const navigate=useNavigate()
    return <div>Something went wrong
        <button onClick={()=>{
            navigate("/")
        }}>go to home page</button>
    </div>
}