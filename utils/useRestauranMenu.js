
import { useEffect, useState } from "react";
import { MENU_URL } from "./constant";
const useRestauranMenu = (resId) =>{
    const [resinfo,setresinfo] = useState(null);

    const fetchData = async ()=>{
        const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.1486975&lng=77.6100276&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
        const json = await data.json();
     
        setresinfo(json.data);
       
    }

    useEffect(()=>{
      fetchData();
    } ,[])



    return resinfo;
}
export default useRestauranMenu;