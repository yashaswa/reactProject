import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategory = ({data,showItems,setshowIndex})=>{
   
   

    const handleClick = ()=>{
        
      
      setshowIndex();
    }

   

   return (
        <div>
            {/* {header} */}
            
           <div className=" mx-auto my-3 Header w-5/12 bg-gray-50 shadow-lg p-2  ">
           <div className="justify-between flex cursor-pointer" onClick={handleClick}>
            <span className=" font-bold text-lg">{data?.title} ({data.itemCards.length})</span>
            <span>🔻</span>
            </div>

            
           {/* {Itemslist} */}
        { showItems && <ItemList data = {data} />}
          
              
           
           </div>

         
        </div>
    )
}
export default RestaurantCategory;