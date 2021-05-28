import React, { Component } from 'react';
import { Redirect } from 'react-router';
import * as MESS from "../constants/Message";
class Product extends Component {
    showRating(product){
        let result = [] ; 
        for(let i=0 ; i<product.rating ; i++){
         
            result.push( <i key={i} className="fa fa-star rating"></i>)
            
        }
        for(let j=0 ; j<5-product.rating ; j++){
         
            result.push(<i key={j+111} className="fa fa-star-o rating"></i>)
            
        }
        return result;
    }
    onAddToCart(product){
        this.props.onAddToCart(product);
        alert(MESS.MESS_SUCCESS);
        
    }
    render() {
        let { product } = this.props;
        return (
            <div className="col-md-6 col-xl-4 col-lg-6 col-12 product">
                {/* <div className="card" style={{ width: 400 }}>
                    <div className="text-center">
                        <img className="card-img-top" src={product.image} alt="Card image" />
                    </div>
                    <div className="card-body">
                        <h4 className="card-title center">{product.name}</h4>
                        <p className="card-text">{product.discription}</p>
                        <p className="card-text">{product.price}</p>
                        <a href="#" className="btn btn-primary center">Add To Cart</a>
                    </div>
                </div> */}
                <div className="item-container">
                    <div className="img-container product-img">
                        <img src={product.image} alt="" />
                        
                    </div>
                    <div className="info">
                        <div className="colors">
                            <button id="yellow" />
                            <button id="blue" />
                            <button id="green" />
                            <button id="red" />
                        </div>
                        <p className="name">{product.name}</p>
                        <p className="description">{product.discription} <br></br>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laudantium sapiente asperiores sint magnam, expedita nihil rem explicabo et sunt.</p>
                        <p className="description">{this.showRating(product)} </p>
                        <div className="cart">
                            <p className="price">{product.price} $</p>
                            <button className="action" onClick={()=>this.onAddToCart(product)}>Add to cart</button>
                        </div>
                    </div>
                </div>

            </div>

        );
    }
}

export default Product;
