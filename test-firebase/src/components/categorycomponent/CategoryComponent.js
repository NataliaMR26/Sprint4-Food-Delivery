
import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilterPlateActionAsync } from "../../redux/actions/plateActions";
import "./CategoryComponent.scss"; // Asegúrate de tener el archivo CSS o SCSS correspondiente

const CategoryComponent = () => {
  const dispatch = useDispatch();
  const { restaurantId } = useParams();

  const filterCategory = (item) => {
    dispatch(getFilterPlateActionAsync(item, "category", restaurantId));
  };

  return (
    <div>
      <div>
        <p>Restaurants and cafes</p>
      </div>
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
    </div>
  );
};

export default CategoryComponent;
