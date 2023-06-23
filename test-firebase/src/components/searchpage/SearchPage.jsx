import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./SearchPage.scss"; // Importa el archivo de estilos personalizado

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
    <div className="search-page">
      <input
        type="text"
        placeholder="Buscar restaurantes..."
        onChange={handleSearch}
      />
      <div className="restaurant-list">
        {searched ? (
          filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <div
                key={restaurant.id}
                className="restaurant-card"
                onClick={() => handleRestaurantClick(restaurant.id)}
              >
                <h3>{restaurant.name}</h3>
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
