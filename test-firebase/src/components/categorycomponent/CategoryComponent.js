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
