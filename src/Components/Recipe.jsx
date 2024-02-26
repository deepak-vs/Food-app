import React, { useEffect,useState } from 'react'
import './Styles/Recipe.css'
import { useParams } from 'react-router-dom'
import Ingredients from './Ingredients';

const Recipe = () => {

    const [food,setFood]=useState({});
    const [loading,setLoading]=useState(true);
    
    const id=useParams().id;


    const URL=`https://api.spoonacular.com/recipes/${id}/information`;
    const apiKey=import.meta.env.VITE_API_KEY;

    const fetchrecipe=async()=>{

        const response=await fetch(`${URL}?apiKey=${apiKey}`)
        const data=await response.json();
        console.log(data);
        setFood(data);
        setLoading(false);
    }

 useEffect(()=>{
       fetchrecipe(); 
    console.log(food);
 },[])   

 if(loading){
    if(loading){
        return <span className="loader "></span>
      }
 }

  return (
    <div className='recipe-box'>

        <div className="food">
            <img className='food-image' src={food.image} alt="foodItem...." />
            <div className='food-info'>
                <h2>{food.title}</h2>
                <span>⏱️{food.readyInMinutes} Minutes</span>
                <span>👨‍👩‍👧‍👦 Servings : {food.servings}</span>
                <span>{food.vegetarian?"🥕 Vegetarain":"🍖 Non-Vegetarian"}</span>
                <span>💵Price: {food.pricePerServing}/- per serving</span>
            </div>
        </div>

        
        <Ingredients items={food.extendedIngredients}/>

        <h1>Instructions</h1>    
        <div className="instructions ">
            {food.analyzedInstructions[0].steps.map((item,index)=>{
               return  <li key={index}>{item.step}</li>
            })}
        </div>



    </div>
  )
}

export default Recipe