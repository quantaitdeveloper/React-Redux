import Navbar from "./Menu";

<<<<<<< HEAD
import React, { Component } from "react";
=======
import React, { Component } from 'react';
>>>>>>> 0cc21d503e40d43ad3c38ecc96d38258376851e3

class Home extends Component {
  constructor(props) {
    super(props);
<<<<<<< HEAD
    this.state = {
      menu: <Navbar></Navbar>,
    };
  }

  render() {
    return (
      <div>
        {() => this.props.render(this.state.menu)}
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 ">
              {this.state.menu}
            </div>

            {/*end menu*/}
          </div>
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12 qlsv"
              style={{ paddingTop: "20px" }}
            >
              
            </div>
=======
    this.state ={
      navbar : <Navbar></Navbar>
    }
  }
  
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
                {this.props.render(this.state.navbar)}
          </div>
          <div className="col-lg-12">
            <h1 > Welcome to My Web</h1>
>>>>>>> 0cc21d503e40d43ad3c38ecc96d38258376851e3
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
