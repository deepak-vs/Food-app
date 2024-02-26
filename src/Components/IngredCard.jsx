import React from 'react'

const IngredCard = ({item}) => {
  return (
    <div className='ingred-card'>
        <img src={`https://spoonacular.com/cdn/ingredients_100x100/${item.image}`} alt="" />
        <div className='ingredients'>
            <h3>{item.name}</h3>
            <span>{item.amount} {item.unit}</span>
            <span>Items : {item.aisle}</span>
        </div>
    </div>
  )
}

export default IngredCard