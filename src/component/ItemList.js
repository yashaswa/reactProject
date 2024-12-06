import { CDN_URL } from "../../utils/constant";

const ItemList =({data})=>(


    <div>
        
    { data.itemCards.map((ele)=>    <div  className="  mx-5 px-5 border-b text-left flex" key = {ele?.card?.info?.id}>
    <div className="w-9/12 ">
      <div className=" mb-2 ">
        <span className=" font-semibold">{ele?.card?.info?.name}  -  </span > 
        <span className=" font-semibold text-gray-700">{ele?.card?.info?.price/100||ele?.card?.info?.defaultPrice/100} Rs</span> 
        </div >

        <p>{ele?.card?.info?.description}</p>
        </div >
       
        <div className = "  w-2/12 p-2">
        <div className="absolute"> <button className="  bg-black  text-white ml-4 rounded-lg  " > Add +</button> </div>
         <img src = {CDN_URL+ele?.card?.info?.imageId}></img>
      
        </div>
 </div> )
}
</div>
)
export default ItemList;