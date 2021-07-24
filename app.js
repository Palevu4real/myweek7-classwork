import logo from './logo.svg';
import './App.css';
// import Button from './button';
// import Button2 from './button2';
// import Card from './card';
// import Usercard from './Usercard';
// import pro from './components/Product'
import React, {useState} from 'react';
import Product from './components/Product';

function App() {

  const [count, setcount] = useState(0);

const handleClick = () => {
    setcount(count + 1);
    
};
const handleClick2 = () =>{
  setcount(count - 1);
}
    return (
      <div className="App">

      <Product count={count} handleClick={handleClick} handleClick2={handleClick2}/>
        </div>
    );
}

export default App;
