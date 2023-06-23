import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRestaurantActionAsync } from "../../redux/actions/homecardsActions";
import Rating from '@mui/material/Rating';
import './Homecards.scss';

const Homecards = () => {
  const dispatch = useDispatch();
  const { restaurants } = useSelector((state) => state.homecards);

  useEffect(() => {
    dispatch(getRestaurantActionAsync());
  }, [dispatch]);

  useEffect(() => {
    // Guardar los restaurantes en el local storage
    localStorage.setItem("restaurants", JSON.stringify(restaurants));
  }, [restaurants]);

  return (
    <div className="homecards-container">
      {restaurants.map((restaurant) => (
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
      ))}
    </div>
  );
};

export default Homecards;
