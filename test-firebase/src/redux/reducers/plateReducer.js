import { platesTypes } from "../types/platesTypes";
const initialState = {
  plates: [],
  status: "loading",
  current: {},
};

export const plateReducer = (state = initialState, action) => {
  switch (action.type) {
    case platesTypes.GET_PLATES:
      return {
        ...state,
        plates: [...action.payload],
      };
    case platesTypes.CURRENT_PLATE:
      return {
        ...state,
        current: action.payload,
      };
    default:
      return state;
  }
};