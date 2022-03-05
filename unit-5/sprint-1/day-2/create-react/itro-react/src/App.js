import logo from './logo.svg';
import './App.css';

function App() {

  let data = [
    { "name": "sheelu", age: 20 },
    { "name": "anmol", age: 22 },
    { "name": "ankit", age: 23 },
  ]

  return (
    <div className="App">
      {data.map((user) => {
        return <Compo name={user.name} age={user.age} />;
      })}
    </div>
  );
}


function Compo({ name, age }) {
  return (<div className='myStyle'>
    <h2>name{'>'} {name}</h2>
    <h3> Age{'>'} {age}</h3>
  </div>
  )
}

export default App;
