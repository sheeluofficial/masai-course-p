import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import {useState} from  "react"
function App() {
  
 const  [toggle,setToggle] = useState("Add House")

  return (
    <div className="App">
      <button className="toggleForm" onClick={()=>{
        setToggle((pre)=>{
         return  pre==="Show Rentals"?"Add House":"Show Rentals"
        })
      }} >
{toggle}
        {/* Show text Add House or Show Rentals based on state */}
      </button>
      {toggle==="Add House"?<Rentals/>: <AddHouse/>}
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
