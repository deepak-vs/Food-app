import React from 'react'
import './Styles/FoodContainer.css'
import FoodCard from './FoodCard'

const FoodContainer = ({foodArr,loading}) => {
  if(loading){

    return <span className="loader "></span>
  }  
  return (
    <>
    <hr />
    <h2 style={{textAlign:"center"}}>Available Food items</h2>
    <hr />
    <div className='foodContainer '>
        {foodArr.map((food)=>{
             return <FoodCard key={food.id} food={food}/>   
        })}
    </div>
    </>
  )
}

export default FoodContainer