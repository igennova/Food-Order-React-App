import React, { Fragment,useContext,useState } from "react";
import CartContext from "../../Store/Cart-Context";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = () => {
    setErrorMessage('Sorry, we are facing an error.');
  };
  const cartctx=useContext(CartContext)
  const totalAmount=`$${cartctx.totalAmount.toFixed(2)}`
  const hasitem=cartctx.items.length>0
  const additemh=(item)=>{cartctx.addItem({...item,amount:1})}
  const removeitemh=(id)=>{cartctx.deleteItem(id)}
  const cartItems = (
    <ul className={classes['cart-items']}>
 

      {cartctx.items.map((item) => (
        <CartItem key={item.id} amount={item.amount} price={item.price} name={item.name}
        onRemove={removeitemh.bind(null,item.id)} onAdd={additemh.bind(null,item)}/>
       
      ))}
    </ul>
  );

  return (
    <Modal onHide={props.onHide}>
    
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button  onClick ={props.onHide}className={classes['button--alt'] }>Close</button>
        { hasitem &&<button className={classes.button} onClick={handleClick}>Order</button>}
        {errorMessage && <p>{errorMessage}</p>}
      </div>
      </Modal> 
      
  );
;}
  
export default Cart;