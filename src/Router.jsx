import React from 'react'
import Root from './Root';
import SearchBox from './Components/SearchBox'
import Recipe from './Components/Recipe';
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root/>,
      children: [
        {
            path: "/",
            element: <SearchBox/>,
            index:true,
        },
        {
          path: "/:id",
          element: <Recipe/>,
        }
      ]
    }  
  ]);



export default router