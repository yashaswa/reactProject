import Restaurantcard from "./Resturantcard";
import resList from "../../utils/Mock_data"
import { useState } from "react";


const Body = ()=>{
  
  const [ListOfResturant,setListOfResturant ]= useState(resList);
    return (

            <div className="body">
                <div className="filter">
                  <button className="filter-btn" onClick={
                    ()=>{
                     const filteredlist = ListOfResturant.filter(
                      
                      (resturant)=>{ return  resturant.info.avgRating>4.3}// dekh yanha par tu bracket me return nahi likh raha tha to fas raha tha dhyan rakhan
                         
                      );
                      setListOfResturant(filteredlist);
                    }
                  }>Top Rated Restaurants</button>

                  </div>
                    <div className="res-container">
               
                
                {
                 ListOfResturant.map((resturant) =>(<Restaurantcard key = {resturant.info.id} resdata = {resturant}/>))
                }   
                   
                     </div>
            </div>

    )
}

export default Body;