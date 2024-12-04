import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import ErrorPage from "./component/Errorpage.js";
import RestaurantMenu from "./component/RestaurantMenu.js";




const Applayout = ()=>(
     (<div className="applayout">

     
    <Header/>
    <Outlet/>

   </div>)
)

const appRouter = createBrowserRouter([
   {
      path: "/",
      element: <Applayout/>,
      children: [
         {
            path:"/",
            element: <Body/>
         },
         {
            path: "/about",
            element: <About/>,
         },
         {
            path:"/contact",
            element:<Contact/>
         },
       
         {
            path : "/restaurant/:resId",
            element: <RestaurantMenu/>
         },
      ],
     errorElement:<ErrorPage/>
   },
  
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render();
root.render(<RouterProvider router = {appRouter}/>);