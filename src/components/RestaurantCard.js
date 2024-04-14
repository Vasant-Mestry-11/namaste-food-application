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
    <div className="restaurant-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300" onClick={() => navigate(`/restaurants/${id}`)}>
      <img
        alt="food logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        className="restaurant-logo rounded-lg"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <p>{cuisines.join(",")}</p>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard