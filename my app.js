import logo from './logo.svg';
import './App.css';
// import Button from './button';
// import Button2 from './button2';
// import Card from './card';
// import Usercard from './Usercard';
// import pro from './components/Product'
import style from './components/style.css';
import React, {useState} from 'react';
import Product from './components/Product';
import { findRenderedComponentWithType } from 'react-dom/test-utils';

function App() {

  const [count, setcount] = useState(0);
  const [isLog, setIslog] = useState(false);



  // const [count, setcount] = useState(0);

const handleClick = () => {
    setcount(count + 1);
    
};
const handleLogClick = () => {
  setIslog(!isLog);
};


const handleClick2 = () =>{
  setcount(count - 1);
}
    return (
      <div className="App">
{isLog ? (
<p> Logged in </p>
  ):( <p> you are logged out, please sign in </p>)}

<button onClick={ handleLogClick}>{isLog ? <span>Logout</span>:<span>Login</span>}</button>

      <Product count={count} handleClick={handleClick} handleClick2={handleClick2}/>
        </div>
    );
}
  

export default App;
