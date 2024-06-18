import './App.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import {Layout, Home} from './router'
import Shop from './screen/shop/Shop'


function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={ <Layout/> }>
        <Route path='' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Shop/>}/>
        <Route path='/about' element={<Shop/>}/>
        <Route path='/services' element={<Shop/>}/>
        <Route path='/contact' element={<Shop/>}/>
      </Route>
    )
  )
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
