import React, { useContext } from 'react'
import './FoodDisplay.css'
import FoodItem from '../FoodItem/FoodItem'
import { StoreContext } from '../../Context/StoreContext'

const FoodDisplay = ({category}) => {

  const { food_list, searchQuery } = useContext(StoreContext);

  const filteredList = food_list.filter((item) => {
    const matchesCategory = category === "All" || category === item.category;
    const matchesSearch = !searchQuery || 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      {filteredList.length === 0 ? (
        <p className="no-food-found">No dishes found matching "{searchQuery}"</p>
      ) : (
        <div className='food-display-list'>
          {filteredList.map((item) => (
            <FoodItem key={item._id} image={item.image} name={item.name} desc={item.description} price={item.price} id={item._id}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default FoodDisplay
