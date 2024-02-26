import React from 'react'
import './Styles/IngredCard.css'
import IngredCard from './IngredCard'

const Ingredients = ({items}) => {
  return (
    <div className='ingred'>
        <h1>Ingrediants</h1>
        <div className='ingred-container'>
            {items.map((item,index)=>{
                return <IngredCard key={index} item={item}/>
            })}
            
        </div>

    </div>
  )
}

export default Ingredients