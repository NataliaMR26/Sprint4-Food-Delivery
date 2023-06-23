import { restaurantTypes } from "../types/restaurantTypes";
import { getItemsActionAsync, getFilterItemsActionAsync, getItemsByIdActionAsync } from '../../services/crudColection';

export const getRestaurantActionAsync = () => {
  return async (dispatch) => {
    try {
      const restaurants = await getItemsActionAsync("restaurants");
      dispatch(getRestaurantAction(restaurants));
    } catch (error) {
      dispatch(getRestaurantAction([]));
    }
  };
};

const getRestaurantAction = (restaurants) => {
  return {
    type: restaurantTypes.GET_RESTAURANTS,
    payload: [...restaurants],
  };
};

export const getFilterRestaurantActionAsync = (item, filter) => {
  return async (dispatch) => {
    try {
      let restaurants;
      if (item && filter) {
        restaurants = await getFilterItemsActionAsync("restaurants", [filter, '==', item]);
      } else {
        restaurants = await getItemsActionAsync("restaurants");
      }
      dispatch(getFilterRestaurantAction(restaurants));
    } catch (error) {
      dispatch(getFilterRestaurantAction([]));
    }
  };
};

const getFilterRestaurantAction = (restaurants) => {
  return {
    type: restaurantTypes.GET_FILTERED_RESTAURANTS,
    payload: [...restaurants],
  };
};

export const getRestaurantByIdActionAsync = (id) => {
  return async (dispatch) => {
    try {
      const restaurant = await getItemsByIdActionAsync("restaurants", id);
      dispatch(getRestaurantByIdAction(restaurant));
    } catch (error) {
      dispatch(getRestaurantByIdAction(null));
    }
  };
};

const getRestaurantByIdAction = (restaurant) => {
  return {
    type: restaurantTypes.GET_RESTAURANT_BY_ID,
    payload: restaurant,
  };
};
