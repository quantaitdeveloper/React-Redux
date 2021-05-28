import React, { Component } from 'react';
import { MESS_DELETE_SUCCESS } from '../constants/Message';
import product from "../reducers/product";


class CartItem extends Component {
    constructor() {
        super();
        this.state={
            quantity: 1
        }
    }
    onDelete=(product)=>{
        let check = window.confirm("Xác Nhận Xóa ?");
        if(check===true){
            this.props.onDelete(product);
        }
        
    }
    onhandleChange=(e)=>{
        const {product} = this.props.cartItem;
        if(e.target.value>0){
            this.setState({
                quantity: e.target.value
            },()=> this.props.onUpdate(product,this.state.quantity))
        }
        else{
            return;
        }

    }
    render() {
        let {cartItem} = this.props;
        return (
            <tr>
                <td>
                    <div className="cart-info">
                        <img src={cartItem.product.image} alt="" />
                        <div>
                            <p>{cartItem.product.name}</p>
                            <small> {cartItem.product.discription}</small><br></br>
                            <strong>Price $ {cartItem.product.price}</strong>
                            
                            <br />
                            <button className="btn-danger" onClick={()=>this.onDelete(cartItem.product)}>Remove</button>
                        </div>
                    </div>
                </td>
                <td><input type="number" defaultValue={cartItem.quantity} min="1" max="99" onChange={this.onhandleChange}/></td>
                <td>${cartItem.product.price * cartItem.quantity}</td>
            </tr>

        );
    }
}

export default CartItem;
