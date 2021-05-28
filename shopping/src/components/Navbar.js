import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <div className="header">
                <h2 className="logo">Shopping</h2>
                <input type="checkbox" id="chk" />
                <label htmlFor="chk" className="show-menu-btn">
                    <i className="fas fa-ellipsis-h" />
                </label>
                <ul className="menu">
                    <NavLink to="/home" >Home</NavLink>
                    <a href="aa">Products</a>
                    <NavLink to="/cart"><i class="fas fa-shopping-cart"></i> Shopping Cart</NavLink>
                    
                    <a href="aaa">Contact</a>                   
                    <label htmlFor="chk" className="hide-menu-btn">
                        <i className="fas fa-times" />
                    </label>
                </ul>
              
            </div>

        );
    }
}

export default Navbar;
