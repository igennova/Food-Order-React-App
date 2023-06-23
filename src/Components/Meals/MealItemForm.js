import React,{useRef,useState} from "react";
import classes from './MealItemForm.module.css'
import Input from "../UI/Input";
const MealItemForm=props=>{
    const[wrong, setwrong]=useState(true)

    const amountref=useRef()
    const submithandler=(event)=>{
        
        event.preventDefault()

        const enteredamount=amountref.current.value
        const enteredamtno=+enteredamount

    if(enteredamount.trim().length===0 ||enteredamtno<0||enteredamtno>5){
        setwrong(false)
        return;
    }
    props.onAddtocart(enteredamtno)

    }
    return(
        <form className={classes.form}>
            <Input 
            ref={amountref}
            
            label="Amount" input={{
                id:"amount_"+props.id,
                type:"number",
                min:"1",
                max:"5",
                step:"1",
                defaultValue:"1"


            }}/>
            <button onClick={submithandler}>+ ADD</button>
            {!wrong&&<p>Write within the range</p>}
        </form>
    )

}
export default MealItemForm