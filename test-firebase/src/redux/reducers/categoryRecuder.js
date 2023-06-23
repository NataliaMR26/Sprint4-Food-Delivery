import { categoryTypes } from "../types/categoryTypes";

const initialState = {
  categories: [],
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case categoryTypes.GET_CATEGORIES:
      return {
        ...state,
        categories: [...action.payload],
      };    
    default:
      return state;
  }
};
