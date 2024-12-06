import {CDN_URL} from "../../utils/constant"
const Restaurantcard=(props)=>{
    const {resdata } = props;
   
    const {cloudinaryImageId,name,cuisines,avgRating}=resdata?.info;
    const  {deliveryTime} = resdata?.info?.sla;
        return(
            <div className="res-card m-4 p-4 w-[300px] rounded-xl bg-neutral-200  hover:bg-neutral-400 hover:scale-105 ">
                <img  className ="res-logo rounded-xl w-[300px] h-[200px]" src={CDN_URL+cloudinaryImageId}/>
                <h3 className=" font-bold py-4 text-lg  ">{name}</h3>
           
                <h4 className=" font-semibold">{cuisines.join(" ,")}</h4>
                <h4 className=" font-semibold">{avgRating} stars</h4>
                <h4 className=" font-semibold">{deliveryTime} min ETA</h4>
             
            </div>
        )
    }


    export const WithPromotedLable = (Restaurantcard)=>{
        return (props)=>{
            return(
                <div>
                    <lable className = " absolute bg-black text-yellow-100   rounded-md ml-4 hover:scale-125">Promoted</lable>
                    <Restaurantcard {...props}/>
                </div>
            )
        }
    }

    export default Restaurantcard; 