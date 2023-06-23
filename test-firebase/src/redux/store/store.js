import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/loginReducer";
import { restaurantReducer } from "../reducers/restaurantReducer";
import { plateReducer } from "../reducers/plateReducer";
import { orderReducer } from "../reducers/orderReducer";
import { slideReducer } from "../reducers/slideReducer";
// import MOCK_RESTAURANTS from "../../services/mockData"; modo local de emergencia
import homecardsReducer from "../reducers/homecardsReducer";

const reducer = {
    login: loginReducer,
    restaurants: restaurantReducer,
    plates: plateReducer,
    orders: orderReducer,
    slide: slideReducer,
    homecards: homecardsReducer

}

const store = configureStore({
    reducer,
    //     preloadedState: initialState, // Pasamos el estado inicial con los datos de los restaurantes si quiero el modo local de emergencia
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;