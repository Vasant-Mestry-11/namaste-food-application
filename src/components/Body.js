import { useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])

  const [searchText, setSearchText] = useState('')

  // Whenever state variable updates, react triggers a reconsiliation cycle (re-render the component)


  const isOnline = useOnlineStatus();

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3017143&lng=72.8612405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setFilteredListOfRestaurants(filteredList)
          }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => {
          const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)

          setFilteredListOfRestaurants(filteredList)
        }}>Top Rated Restaurants</button>
      </div>
      <div className="restaurant-container">
        {/* Restaurants Card */}
        {
          isOnline ? filteredListOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )) : <p>You are offline</p>
        }
      </div>
    </div>
  );
};

export default Body