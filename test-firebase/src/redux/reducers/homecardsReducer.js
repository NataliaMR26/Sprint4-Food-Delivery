import { restaurantTypes } from "../types/restaurantTypes";

const initialState = {
  restaurants: [],
  currentRestaurant: null,
};

const homecardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantTypes.GET_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case restaurantTypes.GET_FILTERED_RESTAURANTS:
      return {
        ...state,
        restaurants: action.payload,
      };
    case restaurantTypes.GET_RESTAURANT_BY_ID:
      return {
        ...state,
        currentRestaurant: action.payload,
      };
    default:
      return state;
  }
};

export default homecardsReducer;
