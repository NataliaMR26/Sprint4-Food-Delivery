import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantActionAsync } from "../../redux/actions/homecardsActions";
import Rating from '@mui/material/Rating'; // Importa el componente Rating
import './Homecards.scss'; // Importa el archivo de estilos
import { useNavigate } from "react-router-dom";

const Homecards = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.homecards);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getRestaurantActionAsync());
  }, [dispatch]);

  return (
    <div className="homecards-container">
      {restaurants.map((restaurant) => (
      <button onClick={()=> navigate(`/restaurant/${restaurant.id}`)}>
        <div className="card-restaurant" key={restaurant.id}>
          <figure>
            <img src={restaurant.photo} alt="Restaurant" />
          </figure>
          <div className="information">
            <h2 className="title">{restaurant.name}</h2>
            <p className="description">{restaurant.description}</p>
            <div className="rating">
              <Rating size="small" value={restaurant.stars} readOnly />
              <span className="duration">{restaurant.time}</span>
            </div>
          </div>
        </div>
     </button>
      ))}
    </div>
  );
};

export default Homecards;
