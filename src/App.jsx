import './App.css'
import SearchBox from './Components/SearchBox'
import NavBar from './Components/NavBar'
import Recipe from './Components/Recipe'
import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Footer from './Components/Footer'

function App() {

  return (
    <>
       <Router>
          <NavBar/>

          <Routes>
            <Route path='/' element={ <SearchBox/>}/>
            <Route path='/:id' element={ <Recipe/>}/>
          </Routes>
          
          <Footer/>
       </Router>

    </>
  )
}

export default App
