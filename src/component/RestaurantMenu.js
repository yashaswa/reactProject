import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../../utils/constant";
import useRestauranMenu from "../../utils/useRestaurantMenu";

const RestaurantMenu = ()=> {
    
const {resId} = useParams();
//console.log(resId);

    // const [resinfo,setresinfo] = useState(null);

    // useEffect(()=>{
    //     fetchMenu();
        
    //     },[]);

    // const fetchMenu= async ()  =>{
    //     const data = await fetch(
    // `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1486975&lng=77.6100276&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    //         json =await data.json();
    //         console.log("hello");
    //         console.log(json);

    //         setresinfo(json.data);
    // }
   const resinfo =  useRestauranMenu(resId);
    if(resinfo===null ) return <Shimmer/>
   console.log(resinfo);
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;
    const  MenuCard  = resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    ||resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards 
    ||resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card?.itemCards //.itemCards[0].card.info.name;
   // console.log(MenuCard);

    return  (
        <div className="menu">
            <h1> {name}</h1>
            <h2>{costForTwoMessage}</h2>
            <ul>
                  <li>{cuisines?.join(" ,")}</li> <br></br>
                {MenuCard.map(e=><li key= {e.card.info.id}>{e.card.info.name}   -   { e.card.info.price/100||e.card.info.defaultPrice/100 }  Rs</li>)}
                
            </ul>
            
           
         
        </div>
    )
} 

export default RestaurantMenu;