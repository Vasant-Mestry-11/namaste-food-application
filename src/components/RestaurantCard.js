import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import { useNavigate } from 'react-router-dom'
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const {
    cloudinaryImageId = '',
    name,
    cuisines,
    avgRating,
    costForTwo,
    id,
    sla: { deliveryTime },
  } = resData?.info;

  const navigate = useNavigate();

  const { loggedInUser } = useContext(UserContext)
  return (
    <div className="restaurant-card m-4 p-4 w-[250px] bg-gray-100 rounded-lg hover:bg-gray-300" onClick={() => navigate(`/restaurants/${id}`)}>
      <img
        alt="food logo"
        src={
          CDN_URL + cloudinaryImageId
        }
        className="restaurant-logo rounded-lg"
      />
      <h3 className="font-bold py-4 text-xl">{name}</h3>
      <p>{cuisines.join(",")}</p>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
      <h4>{loggedInUser}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return <div>
      <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
      <RestaurantCard {...props} />
    </div>
  }
}

export default RestaurantCard