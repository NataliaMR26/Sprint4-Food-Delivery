// src/components/Restaurant.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsActionAsync } from '../firebase/crudCollection'; // Importa la función para obtener los restaurantes de Firebase
import { setCategory } from '../../redux/actions/restaurantActions';
import './Restaurant.scss';

const Restaurant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const restaurants = await getItemsActionAsync('restaurants'); // Reemplaza 'restaurants' con el nombre de tu colección en Firebase
        dispatch(getRestaurants(restaurants));
      } catch (error) {
        console.error('Error al obtener los restaurantes de Firebase:', error);
      }
    };

    fetchRestaurants();
  }, [dispatch]);

  const restaurants = useSelector(state => state.restaurant.restaurants);
  const category = useSelector(state => state.restaurant.category);

  const categories = [...new Set(restaurants.map(restaurant => restaurant.dish.category))];

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
  };

  const filteredRestaurants = category ?
    restaurants.filter(restaurant => restaurant.dish.category === category) :
    restaurants;

  return (
    <div className="restaurant">
      <div className="category-container">
        <div className="category-scroll">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-button ${category === cat ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="card-container">
        {filteredRestaurants.map(restaurant => (
          <button key={restaurant.name} className="card">
            <div className="card-content">
              <div className="card-image">
                <img src={restaurant.image} alt={restaurant.name} />
              </div>
              <div className="card-details">
                <h2>{restaurant.name}</h2>
                <img src={restaurant.rating} alt="rating" />
                <p>{restaurant.hours}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Restaurant;


// USANDO MOCK

// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRestaurants, setCategory } from '../../redux/actions/restaurantActions';
// import './Restaurant.scss';

// const Restaurant = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getRestaurants());
//   }, [dispatch]);

//   const restaurants = useSelector(state => state.restaurant.restaurants);
//   const category = useSelector(state => state.restaurant.category);

//   const categories = [...new Set(restaurants.map(restaurant => restaurant.dish.category))];

//   const handleCategoryChange = (category) => {
//     dispatch(setCategory(category));
//   };

//   const filteredRestaurants = category ?
//     restaurants.filter(restaurant => restaurant.dish.category === category) :
//     restaurants;

//   return (
//     <div className="restaurant">
//       <div className="category-container">
//         <div className="category-scroll">
//           {categories.map(cat => (
//             <button
//               key={cat}
//               className={`category-button ${category === cat ? 'active' : ''}`}
//               onClick={() => handleCategoryChange(cat)}
//             >
//               {cat}
//             </button>
//           ))}
//         </div>
//       </div>

//       <div className="card-container">
//         {filteredRestaurants.map(restaurant => (
//           <button key={restaurant.name} className="card">
//             <div className="card-content">
//               <div className="card-image">
//                 <img src={restaurant.image} alt={restaurant.name} />
//               </div>
//               <div className="card-details">
//                 <h2>{restaurant.name}</h2>
//                 <img src={restaurant.rating} alt="rating" />
//                 <p>{restaurant.hours}</p>
//               </div>
//             </div>
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Restaurant;