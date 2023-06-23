import React,{Fragment} from "react";
import classes from "./Header.module.css"
import food from "../../Asse/food.jpg"
import CartButton from "./Header.Cart";

const Header=(props)=>{
    return(
    <Fragment>
        <header className={classes.header}>
       
        <h1>LUCKY MEALS</h1>
        <CartButton onClick={props.onShow}/>
        </header>
        <div className={classes.mainimage}>
            <img src={food} alt="i of food"></img>
            
        </div>
    
    </Fragment>)
}
export default Header