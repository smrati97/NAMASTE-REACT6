import {IMG_CDN_URL} from "../Config";
const RestuarentCard = ({cloudinaryImageId, name, cuisines, deliveryTime}) =>{
    
    return(
        <div className="card">
            <img src={IMG_CDN_URL+ cloudinaryImageId} alt="logo"/>
            <h2>{name}</h2>
            <h3 className="cui">{cuisines.join(',')}</h3>
            <h4>{deliveryTime} minute</h4>
        </div>
    )
}

export default RestuarentCard;