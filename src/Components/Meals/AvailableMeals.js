import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem";

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Sushi',
//       description: 'Finest fish and veggies',
//       price: 22.99,
//     },
//     {
//       id: 'm2',
//       name: 'Schnitzel',
//       description: 'A german specialty!',
//       price: 16.5,
//     },
//     {
//       id: 'm3',
//       name: 'Barbecue Burger',
//       description: 'American, raw, meaty',
//       price: 12.99,
      
//     },
//     {
//       id: 'm4',
//       name: 'Green Bowl',
//       description: 'Healthy...and green...',
//       price: 18.99,
//     },
//   ];

const AvailableMeals=(props)=>{
  const[meals,setmeals]=useState([])
  const[loading,isloading]=useState(true)
  useEffect(()=>{
    const fetchmeals=async()=>{
      const response= await fetch("https://react-https-a1940-default-rtdb.firebaseio.com/Meals.json")
    const data=await response.json()
    const loadedmeals=[]
    for(const key in data){
    loadedmeals.push({
      id:key,
      name:data[key].name,
      description:data[key].Description,
      price:data[key].Price,
    })
  }  
  setmeals(loadedmeals)
  isloading(false)
  
  
  }

    fetchmeals()
  },[])
  if(loading){
    return(
    <section className={classes.mealloading}>
      <p>Loading....</p>
    </section>)
  }

  const meallist=meals.map((meal)=>(<MealItem 
  key={meal.id}
  id={meal.id}
  name={meal.name}
  desc={meal.description}
  price={meal.price}
  
  
  
  />))
    return(
            
         
            <section className={classes.meals}>
          <Card>   
            <ul>
                {meallist}
              
            </ul>
            </Card>
            
            
              
            </section>
            

    )
}
export default AvailableMeals