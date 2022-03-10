// import logo from './logo.svg';
import './App.css';
import React from 'react';
 import { Timer } from './components/timer';
function App() {
const [show,setShow] = React.useState(true) 

  return (
    <div className="App">
   {show?<Timer/>:""}

     <button onClick={()=>{
       setShow((pre)=>{
             return   show?false:true;
       })
     }}> click</button>
    </div>
  );
}

export default App;
