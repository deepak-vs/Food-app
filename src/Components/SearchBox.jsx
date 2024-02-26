import React, { useEffect, useState } from 'react';
import './Styles/SearchBox.css'
import { FaMagnifyingGlass } from "react-icons/fa6";
import Banner from './Banner';
import FoodContainer from './FoodContainer';
import Pagination from './Pagination';

const SearchBox = () => {

  const URL='https://api.spoonacular.com/recipes/complexSearch';
  const apiKey=import.meta.env.VITE_API_KEY;

  const [query,setQuery]=useState("");
  const [foodArr,setFoodArr]=useState([]);
  const [loading,setLoading]=useState(false);
  const [currentPage,setCurrentPage]=useState(1);
  const [foodPerPage,setFoodPerPage]=useState(5);
  
  const lastIndex=currentPage*foodPerPage;
  const firstIndex=lastIndex-foodPerPage;

  const currentArr=foodArr.slice(firstIndex,lastIndex);


const handleInput=(e)=>{
  setQuery(e.target.value);
}

const searchFood=()=>{
  window.scrollTo(0,550);
  setLoading(true);
  getFoodItems(query);
  setQuery("");
}

async function getFoodItems(query){
  let response;
  if(!query){
     response=await fetch(`${URL}?apiKey=${apiKey}&number=25`)
  }  
  else{
     response=await fetch(`${URL}?query=${query}&apiKey=${apiKey}&number=25`)
  }
  const data=await response.json();

  if(data.results!==undefined){
    setFoodArr(data.results);
  }
  setLoading(false);
}

useEffect(()=>{ 
    setLoading(true);
    getFoodItems();
},[])

useEffect(()=>{
  window.scrollTo(0,450);
},[currentPage])



  return (
    <>

      <Banner/>

    <div className='container'>
      <h2>Search For Recipes </h2>
      <div className="search">
        <input type="text" value={query} onChange={handleInput} placeholder='Search your recipe here....' />
        <FaMagnifyingGlass className='icons' onClick={searchFood} />
      </div>
    </div>

    
    {foodArr.length===0 && <h2 style={{textAlign:"center"}}>No Data Available !</h2>}
    {foodArr.length!==0 && <FoodContainer foodArr={currentArr} loading={loading}/>}

    <Pagination totalFood={foodArr.length} foodPerPage={foodPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>


    </>
  )
}

export default SearchBox