import React, { Component } from 'react';
import Footer from './Footer';


import Navbar from './Navbar';


class Home extends Component {
    componentDidMount() {

        const colorButtons = document.querySelectorAll('.colors button');

        colorButtons.forEach(item => {
            item.addEventListener('click', function () {

            })
        })


    }
    render() {
        return (
            <div>
                <div className="container-fluid">

                    <div className="row">
                        <div className="col-lg-12">
                            <Navbar></Navbar>
                        </div>
                    </div>


                </div>
                <div className="container-fluid products">
                    <div className="row">
                        <div className="col-12 mb-15">
                            <h1 className="title text-center" >Danh Sách Sản Phẩm</h1>
                        </div>
                    </div>
                    <div className="row">
                
                            {this.props.children}
                        

                    </div>
                </div>
                <div className="col-12 mb-15 contact">
                        <Footer></Footer>
                </div>
                
            </div>

        );
    }
}

export default Home;
