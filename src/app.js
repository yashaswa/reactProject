import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header"
import Body from "./component/Body";



const Applayout = ()=>(
     (<div className="applayout">

     
    <Header/>
    <Body/>

   </div>)
)


const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render();
root.render(<Applayout/>);