import React from 'react';
import './App.css';
import {NavTop} from "./components/NavTop";
import "./services/firebase";
import {ShopPage} from "./pages/ShopPage";
import {useLocalStorage} from "./hooks/useLocalStorage";


function App() {
  const [cart, setCart] = useLocalStorage("cart", []);


  return (
      <div className="App">
        <NavTop cart={cart}/>
        <header className="App-header">
          <ShopPage cart={cart} setCart={setCart}/>
        </header>
      </div>
  );
}


export default App;