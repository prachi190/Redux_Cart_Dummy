import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Cart from './component/Cart';
import RootLayout from './RootLayout';

const App = () => {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<RootLayout></RootLayout>}>
      <Route index element ={<Dashboard/>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    </Route>
  ))

  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App