import { CDN_URL } from "../utils/constants";
import { useNavigate } from 'react-router-dom'

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    id,
    sla: { deliveryTime },
  } = resData?.info;

  const navigate = useNavigate();
  return (
    <div className="restaurant-card" onClick={()=> navigate(`/restaurants/${id}`)}>
      <img
        alt="food logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        className="restaurant-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard