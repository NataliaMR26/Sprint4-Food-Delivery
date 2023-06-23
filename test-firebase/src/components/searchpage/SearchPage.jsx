import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedRestaurants = JSON.parse(localStorage.getItem("restaurants"));
    if (storedRestaurants) {
      setRestaurants(storedRestaurants);
    }
  }, []);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    setSearched(value !== "");
  };

  const handleRestaurantClick = (id) => {
    navigate(`/restaurant/${id}`);
  };

  const filteredRestaurants = restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar restaurantes..."
        onChange={handleSearch}
      />
      <div>
        {searched ? (
          filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                onClick={() => handleRestaurantClick(restaurant.id)}
              >
                <h3>{restaurant.name}</h3>
                <p>{restaurant.description}</p>
              </div>
            ))
          ) : (
            <p>No hay restaurantes a mostrar</p>
          )
        ) : (
          <p>No se ha realizado ninguna búsqueda</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
