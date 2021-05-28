import { combineReducers } from "redux";
import products from "./product";
import cart from "./cart"
const appReducer = combineReducers({
    products,
    cart
})

export default appReducer;

