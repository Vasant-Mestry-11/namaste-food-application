import { useContext, useEffect, useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListOfRestaurants, setFilteredListOfRestaurants] = useState([])

  const [searchText, setSearchText] = useState('')

  // Whenever state variable updates, react triggers a reconsiliation cycle (re-render the component)


  // const isOnline = useOnlineStatus();

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard)

  useEffect(() => {
    fetchData()
  }, [])


  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.3017143&lng=72.8612405&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')

    const json = await data.json();

    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const { loggedInUser, setUserName } = useContext(UserContext)

  return listOfRestaurants.length === 0 ? <Shimmer /> : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input type="text" className="search-box border border-solid border-black" value={searchText} onChange={(e) => {
            setSearchText(e.target.value)
          }} />
          <button
            className="px-4 py-1 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()))
              setFilteredListOfRestaurants(filteredList)
            }}>
            Search
          </button>
        </div>
        <div className="search m-4 p-4 items-center">
          <button className="filter-btn px-4 py-1 bg-gray-100 m-4" onClick={() => {
            const filteredList = listOfRestaurants.filter((res) => res.info.avgRating > 4)

            setFilteredListOfRestaurants(filteredList)
          }}>
            Top Rated Restaurants
          </button>

          Username: <input className="border border-black p-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
        </div>

      </div>
      <div className="restaurant-container flex flex-wrap">
        {/* Restaurants Card */}
        {/* {
          isOnline ? filteredListOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
          )) : <p>You are offline</p>
        } */}
        {
          filteredListOfRestaurants.map((restaurant) => {
            const { isPromoted = Boolean(Math.floor(Math.random() * 2)) } = restaurant
            return (
              <Link
                key={restaurant.info.id}
                to={`/restaurants/${restaurant.info.id}`}
              >
                {isPromoted ? <RestaurantCardPromoted key={restaurant.info.id} resData={restaurant} /> : <RestaurantCard key={restaurant.info.id} resData={restaurant} />}
              </Link>
            )
          })
        }
      </div>
    </div>
  );
};

export default Body