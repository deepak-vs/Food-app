import React from 'react'
import './Styles/FoodCard.css'
import { useNavigate } from 'react-router-dom'

const FoodCard = ({food}) => {
  const navigate=useNavigate();

  const showRecipe=()=>{
    navigate(`/${food.id}`)
  }

  return (
    <>
        <div className='card'>
            <img className='foodImage' src={food.image} alt="foodImage..." />
            <div className=' card-btn'>
            <h3>{food.title}</h3>
            <button onClick={showRecipe}>View Recipe</button>
            </div>
            
        </div>
        
    </>
  )
}

export default FoodCard