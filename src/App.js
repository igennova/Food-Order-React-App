import React,  { Fragment,useState } from "react";
import Meal from "./Components/Meals/Meal";
import Header from "./Components/Layout/Header"
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";


function App() {
  const[modalshow,setmodelshow]=useState(false)
  const Carthandler=()=>{
    setmodelshow(true);

  }
  const Carthider=()=>{
    setmodelshow(false);

  }
  return (
    <CartProvider>
     { modalshow && <Cart onHide={Carthider}/>}
      <Header onShow={Carthandler}
      />
      <main>
        <Meal/>
      </main>
  </CartProvider>)
}

export default App;
