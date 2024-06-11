import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from '../pages/Login.jsx'
import Profile from '../pages/Profile.jsx'
import Homepage from '../pages/Homepage.jsx'


import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"


export default function Router(){ 

const router = createBrowserRouter([
  {
  path: "/",
  element: <Homepage/>
 }
 ,
 {
    path: "/Login",
    element: <Login/> 
 }
,
 {
    path: "/Profile",
    element: <Profile/> 
 }

])

return (
   
  <RouterProvider router={router}/>
 
)

}