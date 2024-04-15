import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './component/NavBar'
import {Provider} from 'react-redux'
import store from './store/store'

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
   <NavBar></NavBar>
   <main>
    <Outlet/> {/** using outlet so that what ever component we are nabiiagting should nvitage in this area */}
   </main>
   </Provider>
   </>
   
  )
}

export default RootLayout