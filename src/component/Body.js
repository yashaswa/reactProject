import Restaurantcard from "./Resturantcard";
import { useState ,useEffect} from "react";
import Shimmer from "./shimmer";

let fixed  = [];
const Body = ()=>{
  
  const [ListOfResturant,setListOfResturant ]= useState([]);
  const [searchText,setsearchText] = useState("");

  useEffect(()=>{
    fetchData();
    console.log("use effect called");
  },[])
  console.log("body called");

  const fetchData = async ()=>{
      const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1486975&lng=77.6100276&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json =await data.json();
      console.log(json);
     setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
     fixed = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
   
    
  }
 
  
  // conditional rendering {if length ===0 to shimmer nahi to render normal code}
  

  

    return ListOfResturant.length===0 ? <Shimmer /> : (
        
            <div className="body">
                <div className="filter">
                  
                <div className="search">
                 
                  <input 
                  className="search-box" 
                  value = {searchText}
                  onChange={(e)=>{ setsearchText(e.target.value)}}></input>

                  <button onClick={()=>{
                     
                   const filteredlist = fixed.filter((restaurants)=>{
                     return restaurants.info.name.toLowerCase().includes(searchText.toLowerCase());
                  })
                    setListOfResturant(filteredlist);
                    
                  }}>Search</button>
                </div>

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
                 ListOfResturant.map((resturant) =>(<Restaurantcard key = {resturant.info.id} resdata = {resturant}/>))// this is how you pass value to props 
                   //similar to how we pass argument to function resdata is argument and we are passing it to Restaurantcard function
                   // easy way me tune Resturantcard function ko call kiya hai resdata argument ke sath or key(unique id ) nhi pass ki hai
                }   
                   
                     </div>
            </div>

    )
}

export default Body;