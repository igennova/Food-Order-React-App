import React, { Fragment,useContext,useState } from "react";
import CartContext from "../../Store/Cart-Context";
import classes from './Cart.module.css';
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const[form,setform]=useState(false)
  const[isSumbit,setissubmit]=useState(false)
  const[didissubmit,setdidsubmit]=useState(false)


  const handleClick = () => {
    setform(true)
    
  };
  const submithandler=async (userData)=>{
    setissubmit(true)
     await fetch("https://react-https-a1940-default-rtdb.firebaseio.com/orders.json",{
      method:"POST",
      body:JSON.stringify({
        user:userData,
        orderedItems:cartctx.items
      })
    
    })
    setissubmit(false)
    setdidsubmit(true)
    cartctx.clearcart()

  }
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
const cartmodalcontent=<Fragment>
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
      {form && <Checkout onConfirm={submithandler}  onCancel={props.onHide}/>}
     
</Fragment>
const whensubmitting=<p>Sending order data......</p>
const whendone= <p> Order Sucessfull !!!</p>
  return (
    <Modal onHide={props.onHide}>
      {!isSumbit && !didissubmit && cartmodalcontent}
      {isSumbit&& whensubmitting}
      {!isSumbit&&didissubmit && whendone}
    
      
      </Modal> 
      
  );
;}
  
export default Cart;