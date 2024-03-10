import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState(resList)

  return (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)

          setListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {/* Restaurants Card */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body