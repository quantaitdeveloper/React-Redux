import React, { Component } from 'react';
import CartItem from './CartItem';
import CartResult from './CartResult';
import Navbar from './Navbar';


class Cart extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="container-fluid">

                        <div className="row">
                            <div className="col-lg-12">
                                <Navbar></Navbar>
                            </div>
                        </div>


                    </div>
                    {/* cart items details */}
                    <div className="small-container cart-page">
                        <table>
                            <tbody>
                            <tr>
                                <th>Product</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                            </tr>
                               {this.props.children}

                            </tbody>
                        </table>
                        
                    </div>


                </div>

            </div>
        );
    }
}

export default Cart;
