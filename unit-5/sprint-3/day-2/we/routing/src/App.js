import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Welcome from './Components/Welcome';
import About from './Components/About';
import { Navbar } from './Components/Navbar';
import { ProductDetails } from './Components/productDetails';
import { Users } from './Components/Users';
import { User } from './User';
import {Error} from "./Components/Error"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
     <Routes>
       <Route path="/" element={<Welcome></Welcome>} />
       <Route path="/about" element={<About></About>} />
       <Route path="/product/:id" element={<ProductDetails> </ProductDetails>}/>
       <Route path='/users' element={<Users/>} / >
       <Route path='/user/:id' element={<User></User>} / >
         <Route path='/error' element={<Error/> } />
     </Routes>
    </div>
  );
}

export default App;
