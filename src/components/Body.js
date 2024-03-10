import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3017143&lng=72.8612405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
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