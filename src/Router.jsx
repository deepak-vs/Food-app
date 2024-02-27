import React,{Suspense,lazy} from 'react'
import Root from './Root';
// import SearchBox from './Components/SearchBox'
// import Recipe from './Components/Recipe';
import {createBrowserRouter} from "react-router-dom";

const SearchBox = lazy(() => import('./Components/SearchBox'));
const Recipe = lazy(() => import('./Components/Recipe'));

const router = createBrowserRouter([
    {
      path: "/",
      element:  <Root/>,
      children: [
        {
            path: "/",
            element: (
              <Suspense fallback={<span className="loader "></span>}>
                <SearchBox />
              </Suspense>
            ),
            index:true,
        },
        {
          path: "/:id",
          element:(
            <Suspense fallback={<span className="loader "></span>}>
              <Recipe />
            </Suspense>
          ),
        }
      ]
    }  
  ]);



export default router