import { categoryTypes } from "../types/categoryTypes";
import { getItemsActionAsync } from '../../services/crudColection';

export const getCategoriesActionAsync = () => {
  return async (dispatch) => {
    try {
      const categories = await getItemsActionAsync("categories");
      console.log("Categories:", categories); // Agregar este console.log para verificar los datos obtenidos
      dispatch(getCategoriesAction(categories));
    } catch (error) {
      console.error(error);
      dispatch(getCategoriesAction([]));
    }
  };
};


const getCategoriesAction = (categories) => {
  return {
    type: categoryTypes.GET_CATEGORIES,
    payload: [...categories],
  };
};
