import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "../reducers/loginReducer";
import { restaurantReducer } from "../reducers/restaurantReducer";
import { plateReducer } from "../reducers/plateReducer";
import { orderReducer } from "../reducers/orderReducer";
import { slideReducer } from "../reducers/slideReducer";

const reducer = {
    login: loginReducer,
    restaurants: restaurantReducer,
    plates: plateReducer,
    orders: orderReducer,
    slide: slideReducer
}

const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;
