import './App.css'
import ReactDOM from 'react-dom';
import {RouterProvider} from "react-router-dom";
import router from './Router'

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
