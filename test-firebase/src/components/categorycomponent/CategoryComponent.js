// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import { getFilterPlateActionAsync } from "../../redux/actions/plateActions";
// import "./CategoryComponent.scss";

// const CategoryComponent = () => {
//   const dispatch = useDispatch();
//   const { restaurantId } = useParams();
//   const { plates } = useSelector((store) => store.plates);
//   const { restaurants } = useSelector((store) => store.restaurants);
//   const [filteredRestaurants, setFilteredRestaurants] = useState([]);

//   useEffect(() => {
//     // Filtrar los restaurantes iniciales por las categorías de los platos
//     const initialFilteredRestaurants = filterRestaurantsByCategory(restaurants, plates);
//     setFilteredRestaurants(initialFilteredRestaurants);
//   }, [restaurants, plates]);

//   const filterCategory = (category) => {
//     if (category) {
//       // Filtrar los restaurantes por la categoría seleccionada
//       const filteredRestaurants = filterRestaurantsByCategory(restaurants, plates, category);
//       setFilteredRestaurants(filteredRestaurants);
//     } else {
//       // Mostrar todos los restaurantes sin filtrar
//       setFilteredRestaurants(restaurants);
//     }
//   };

//   return (
//     <div className="categories">
//       <button className="category" onClick={() => filterCategory(null)}>
//         All
//       </button>
//       {categories.map((category) => (
//         <button
//           key={category.id}
//           className="category"
//           onClick={() => filterCategory(category.name)}
//         >
//           {category.name}
//         </button>
//       ))}
//     </div>
//   );
// };

// const filterRestaurantsByCategory = (restaurants, plates, category = null) => {
//   const filteredRestaurants = [];

//   if (category) {
//     // Filtrar los restaurantes por la categoría seleccionada
//     restaurants.forEach((restaurant) => {
//       const restaurantPlates = plates.filter((plate) => plate.restaurantId === restaurant.id);
//       const hasCategory = restaurantPlates.some((plate) => plate.category === category);

//       if (hasCategory) {
//         filteredRestaurants.push(restaurant);
//       }
//     });
//   } else {
//     // Mostrar todos los restaurantes sin filtrar
//     filteredRestaurants.push(...restaurants);
//   }

//   return filteredRestaurants;
// };

// export default CategoryComponent;


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilterPlateActionAsync } from "../../redux/actions/plateActions";
import "./CategoryComponent.scss"; // Asegúrate de tener el archivo CSS o SCSS correspondiente

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();
  const { plates } = useSelector((store) => store.plates);

  const filterCategory = (item) => {
    dispatch(getFilterPlateActionAsync(item, "category", restaurantId));
  };

  return (
    <div className="categories">
      <button
        className="category"
        onClick={() => filterCategory(null)}
      >
        All
      </button>
      <button
        className="category"
        onClick={() => filterCategory("Salads")}
      >
        Salads
      </button>
      <button
        className="category"
        onClick={() => filterCategory("Pizza")}
      >
        Pizza
      </button>
      <button
        className="category"
        onClick={() => filterCategory("Chicken")}
      >
        Chicken
      </button>
      <button
        className="category"
        onClick={() => filterCategory("Ice Cream")}
      >
        Ice Cream
      </button>
    </div>
  );
};

export default CategoryComponent;
