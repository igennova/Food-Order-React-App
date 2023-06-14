import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./Header.Cart.module.css"
const CartButton =(props)=>{
    return(
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>My Cart</span>
            <span className={classes.badge}> 5</span>
        </button>
    )

}
export default CartButton