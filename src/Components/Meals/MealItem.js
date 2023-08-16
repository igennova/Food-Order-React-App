import React,{useContext} from "react";
import CartContext from "../../Store/Cart-Context";
import b from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
const MealItem=(props)=>{
      const cartctx= useContext(CartContext)
    // const price=`$${props.price.toFixed(2)}`

    const AddtoCarthandler=(amount)=>{
        return(
            
            cartctx.addItem(
                {
                    id:props.id,
                    name:props.name,
                    amount:amount,
                    price:props.price

                }
            )
        )
    }
    
    return(
        <li  className={b.meal}>
            
        

        
        <div>
            <h3>{props.name}</h3>
            <div className={b.desc}> {props.desc}
                
            </div>
            <div className={b.price}>{props.price}</div>
        </div>
        <div>
            <MealItemForm id={props.id} onAddtocart={AddtoCarthandler}/>
        </div>
        </li>
        

    )
}
export default MealItem