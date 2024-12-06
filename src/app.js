import React,{lazy, Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"
import Body from "./component/Body";
import About from "./component/About";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import Contact from "./component/Contact";
import ErrorPage from "./component/Errorpage.js";
import RestaurantMenu from "./component/RestaurantMenu.js";
import UserContext from "../utils/UserContext.js";
const Grocery = lazy(()=> import("./component/Grocery.js") )

const Applayout = ()=>{
  
   const [userName,setuserName] = useState();

useEffect(()=>{
   const data ={
      name: " user : yashaswa"
   }
   setuserName(data.name);
})


  return   (
      <UserContext.Provider value = {{loggedInUser: userName}}>
     <div className="applayout">

     
    <Header/>
    <Outlet/>

   </div>
   </UserContext.Provider>
   )
   
}

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
               path:"/grocery",
               element:  <Suspense fallback = "loading...."> <Grocery/> </Suspense>
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