import React from 'react'
import './Styles/NavBar.css'
import Banner from './Banner'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {

  const navigate=useNavigate();

  const goTOHome=()=>{
    navigate('/');
  }

  return (
   
     <div className='nav'>
        <img onClick={goTOHome} className='title-image' src="src/Components/Images/logo.png" alt="FoodFiesta" />
    </div>
       
  )
}

export default NavBar