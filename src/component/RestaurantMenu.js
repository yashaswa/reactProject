import { useState,useEffect } from "react";
import Shimmer from "./shimmer";
import { useParams } from "react-router";
import { MENU_URL } from "../../utils/constant";
import useRestauranMenu from "../../utils/useRestauranMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu = ()=> {
const [showIndex ,setshowIndex] = useState(-1)
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
  // console.log(resinfo);
    const {name,cuisines,cloudinaryImageId,costForTwoMessage} = resinfo?.cards[2]?.card?.card?.info;
    const MenuCard = resinfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((e)=>e?.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
   // console.log(MenuCard);
    
    return  (
        <div className="menu text-center ">
            <h1 className="font-bold m-5 text-3xl"> {name}</h1>
            <p className=" font-semibold text-xl">{cuisines.join(" ,")}</p>

            {MenuCard.map((category,index)=>(
                <RestaurantCategory
                 key ={category?.card?.card?.title}
                 data = {category?.card?.card}
                 showItems = {index===showIndex?true:false}
                 setshowIndex = {()=> setshowIndex(index)}/>
                 
            ))}
           
            
           
         
        </div>
    )
} 

export default RestaurantMenu;