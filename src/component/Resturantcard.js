import {CDN_URL} from "../../utils/constant"
const Restaurantcard=(props)=>{
    const {resdata } = props;
    const {cloudinaryImageId,name,cuisines,avgRating}=resdata?.info;
    const  {deliveryTime} = resdata?.info?.sla;
        return(
            <div className="res-card">
                <img  className ="res-logo" src={CDN_URL+cloudinaryImageId}/>
                <h3>{name}</h3>
                <h4>{cuisines.join(" ,")}</h4>
                <h4>{avgRating} stars</h4>
                <h4>{deliveryTime} min ETA</h4>
            </div>
        )
    }

    export default Restaurantcard;