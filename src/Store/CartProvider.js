import React,{useReducer} from "react";
import CartContext from "./Cart-Context";
const defauCart={
    items:[],
    totalAmount:0

}
const CartReducer=(state,action)=>{
    if(action.type==="ADD"){
        const updatedamount=state.totalAmount+action.item.price*action.item.amount

        const exisitingitemindex=state.items.findIndex(item=>item.id===action.item.id)
        const existingitem=state.items[exisitingitemindex]
        
        let updateditems

        if (existingitem){
             const updatedItem={
                ...existingitem,
                amount:existingitem.amount+action.item.amount
            }
            updateditems=[...state.items]
            updateditems[exisitingitemindex]=updatedItem
        }
        else{
            updateditems=state.items.concat(action.item)
     
        }
       


       
        return(
            
            {
                items:updateditems,
                totalAmount:+updatedamount
           }
        )
    }

    if(action.type==="REMOVE"){
        const exisitingitemindex=state.items.findIndex(item=>item.id===action.id)
        const existingitem=state.items[exisitingitemindex]
        const updatedamount=state.totalAmount-existingitem.price
        let updateditems
        if(existingitem.amount===1){
            updateditems=state.items.filter(item=>item.id!==action.id)
        }
        else{
            const updatedItem={...existingitem,amount:existingitem.amount-1}
            updateditems=[...state.items]
            updateditems[exisitingitemindex]=updatedItem

        }
        
        return(
            
            {
                items:updateditems,
                totalAmount:+updatedamount
           }
        )
        


    }
    if(action.type==="CLEAR"){
        return defauCart
    }
    
    return(
        defauCart
    )
}
const CartProvider=props=>{

     const[cartState,dispCartfn]=useReducer(CartReducer,defauCart)

    const addItem=(item)=>{
        dispCartfn({
            type:"ADD",
            item:item
        })
    }
    const deleteItem=(id)=>{
        dispCartfn({
            type:"REMOVE",
            id:id
        })
    }
    const clearcart=()=>{
        dispCartfn({
            type:"CLEAR"
        })
    }

    const cartcon={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItem,
        deleteItem:deleteItem,
        clearcart:clearcart

    }
    return(
        <CartContext.Provider value={cartcon}>
            {props.children}  </CartContext.Provider>
    )

}
export default CartProvider