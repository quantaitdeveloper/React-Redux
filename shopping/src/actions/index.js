import * as types from "../constants/ActionTypes";

export const addToCart = (product ,quantity) =>{
    return {
        type: types.ADD_TO_CART,
        product,
        quantity
    }
}
export const deleteCart = (product)=>{
    return {
        type :types.DELETE_CART,
        product,
    }
}
export const updateCart = (product,quantity)=>{
    return {
        type :types.UPDATE_CART,
        product,
        quantity
    }
}