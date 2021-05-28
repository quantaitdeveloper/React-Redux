import React, { Component } from 'react';
import { connect } from 'react-redux';
import Cart from '../components/Cart';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import * as MESS from "../constants/Message"
import * as actions from "../actions/index";

class CartContainer extends Component {
    showCartItem(cart){
        let result ="";
        if(cart.length>0){
            result = cart.map((cartItem, index)=>{
                return <CartItem key="index" cartItem={cartItem} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}></CartItem>
            })
        }
        else{
            result = MESS.MESS_CART_EMPTY;
        }
        return result;
    }
    showToTal(cart){
        let total= 0 ;
        for(let i=0 ; i< cart.length ; i++){
            total += cart[i].product.price*cart[i].quantity
        }
        return total
    }
    render() {
        return (
           <Cart>
               {this.showCartItem(this.props.cart)}
               <CartResult total={this.showToTal(this.props.cart)}></CartResult>
           </Cart>
        );
    }
}

const mapStateToProps = state =>{
    return{
        cart : state.cart
    }
}

const mapDispatchToProps = (dispatch,props) =>{
    return{
        onDelete  : (product) =>{
            dispatch(actions.deleteCart(product))
        },
        onUpdate : (product,quantity) =>{
            dispatch(actions.updateCart(product,quantity))
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (CartContainer);
