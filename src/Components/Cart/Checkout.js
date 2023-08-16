import React,{useRef, useState} from 'react';
import classes from './Checkout.module.css';

const isEmpty=value=>value.trim()===""
const is5chars=value=>value.trim().length===5
const Checkout = (props) => {
  const nameref=useRef()
  const streetref=useRef()
  const postalref=useRef()
  const cityref=useRef()
  const[formisvalid,setformisvalid]=useState({
    name:true,
    street:true,
    postal:true,
    city:true
  })
  const confirmHandler = (event) => {
     event.preventDefault();
  
  const name=nameref.current.value
  const street=streetref.current.value
  const postal=postalref.current.value
  const city=cityref.current.value

  const validname=!isEmpty(name)
  const validstreet=!isEmpty(street)
  const validpostal=is5chars(postal)
  const validcity=!isEmpty(city)
  setformisvalid({
    name:validname,
    street:validstreet,
    postal:validpostal,
    city:validcity

  })

  const formvalid=
  validcity&&
  validpostal&&
  validname&&
  validstreet

  if(!formvalid){
    return
  }
  props.onConfirm({
    name:name,
    street:street,
    postal:postal,
    city:city

    
    
  })}

  // const stylename=`${classes.control}${formisvalid.name ?"" : classes.invalid}`
  // const stylestreet=`${classes.control}${formisvalid.street ?"" : classes.invalid}`
  // const stylepostal=`${classes.control}${formisvalid.postal ?"" : classes.invalid}`


  // const stylecity=`${classes.control}${!formisvalid.city ?classes.invalid :"" }`


  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameref} />
        {!formisvalid.name&&<p>Please enter a valid name</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetref}/>
        {!formisvalid.street&&<p>Please enter a valid house no</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalref} />
        {!formisvalid.postal&&<p>Please enter a valid postal</p>}
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityref} />
        {!formisvalid.city&&<p>Please enter a valid city</p>}
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;