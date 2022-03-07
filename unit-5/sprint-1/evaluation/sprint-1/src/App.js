// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Counter } from './components/Counter';
function App() {


  const [total,setTotal] = useState(145)

  return (
    <div className="App">
     <Counter initial={13} itemName={"Books:"} addcls={"addBook"} remcls={"remBook"} totalcls={"totalBooks"} settotal={setTotal} />
     <Counter initial={10} itemName={"Pens:"} addcls={"addPen"} remcls={"remPen"} totalcls={"totalPens"} settotal={setTotal} />
     <Counter initial={44} itemName={"Notebooks:"} addcls={"addNotebook"} remcls={"remNotebook"} totalcls={"totalNotebooks"} settotal={setTotal} />
     <Counter initial={78} itemName={"Inkpens:"} addcls={"addInkpen"} remcls={"remInkpen"} totalcls={"totalInkpens"} settotal={setTotal} />

     <div className="total">{total}</div>
    </div>
  );
}

export default App;
