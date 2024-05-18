import { useEffect, useState } from "react"
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom'
import { MENU_API_URL } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {


  const [showItems, setShowItems] = useState(0)
  const { resId } = useParams()

  const resInfo = useRestaurantMenu(resId)

  if (resInfo === null) {
    return <Shimmer />
  }


  const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    ?.filter((category) =>
      category?.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
    )

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">{cuisines.join(",")} - {costForTwoMessage}</p>
      {/* <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => <li key={item.card.info.id}>{item.card.info.name} Rs. {item.card.info.price / 100 || item.card.info.defaultPrice / 100}</li>)}
      </ul> */}
      {/* categories accordian */}

      {categories.map((category, index) => <RestaurantCategory
        key={index}
        data={category?.card?.card}
        showItems={index === showItems}
        setShowItems={() => index === showItems ? setShowItems(null) :setShowItems(index)}
      />)}
    </div>
  )
}


export default RestaurantMenu