import React, { Component } from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';
import Product from '../components/Product';
import * as actions from "../actions/index"

class ProductsContainer extends Component {
    showProducts(products){
        let result ="";
        
            result = products.map((product,index)=>{
                return <Product key={index} product={product} onAddToCart={this.props.onAddToCart}></Product>
            })
        
        return result;
    }
    render() {
        let {products} = this.props;
        return (
            <Home >
               {this.showProducts(products)}
            </Home>
        );
    }
}
const mapStateToProps = state =>{
    return{
        products : state.products
    }
}
const mapDispatchToProps =(dispatch , props)=>{
    return {
        onAddToCart:(product)=>{
            dispatch(actions.addToCart(product,1))
        }
    }
}   
export default connect(mapStateToProps,mapDispatchToProps)(ProductsContainer);

