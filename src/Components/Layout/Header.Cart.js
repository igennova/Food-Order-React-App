import React,{useContext,useEffect,useState} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Header.Cart.module.css"
import CartContext from "../../Store/Cart-Context";

// const CartButton = (props) => {
//     const cartctx = useContext(CartContext);
  
//     // Check if 'cartctx' or 'cartctx.items' is undefined
//     if (!cartctx || !cartctx.items) {
//       return (
//         <button className={classes.button} onClick={props.onClick}>
//           <span className={classes.icon}>
//             <CartIcon />
//           </span>
//           <span>My Cart</span>
//           <span className={classes.badge}>0</span>
//         </button>
//       );
//     }
  
//     const noofItems = cartctx.items.reduce((curno, items) => {
//       return curno + items.amount;
//     }, 0);
  
//     return (
//       <button className={classes.button} onClick={props.onClick}>
//         <span className={classes.icon}>
//           <CartIcon />
//         </span>
//         <span>My Cart</span>
//         <span className={classes.badge}> {noofItems} </span>
//       </button>
//     );
//   };
  
//   export default CartButton;
  



const CartButton = (props) => {
    const[buttonishighlighted,setbuttonhighlighted]=useState(false)
    

   
  const cartctx = useContext(CartContext);
  const noofItems = cartctx.items ? cartctx.items.reduce((curno, item) => {
      return curno + item.amount;
  }, 0) : 0;
  
const{items}=cartctx
  const classescart=`${classes.button} ${ buttonishighlighted?classes.bump:""}`
  
    useEffect(()=>{
        if (items.length===0){
            return
        }
        setbuttonhighlighted(true)
         const time=setTimeout(()=>{
            setbuttonhighlighted(false)
        },300)

        return()=>{
            clearTimeout(time)
        }
    },[items])

  return (
      <button className={classescart} onClick={props.onClick}>
          <span className={classes.icon}>
              <CartIcon />
          </span>
          <span>My Cart</span>
          <span className={classes.badge}> {noofItems} </span>
      </button>
  );
};

export default CartButton;
