import Navbar from "./Menu";
import bankingDomain from "./../image/banking-domain-stock-vector.png";
import tpBank from "./../image/y-nghia-cua-logo-tpbank.jpg";
import {Link, Redirect} from 'react-router-dom'
import { Button } from "antd";

export default function About(props) {
  
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            {props.menu}
          </div>

          {/*end menu*/}

        </div>
        <div className="row">

        
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <div className="container-fluid about">
              <div className="row">
                <div className="col-lg-11 col-md-10 col-9 about-content" id={1}>
                  <h1 className="about-icon">
                    <i className="far fa-user-circle" />
                    <span className="about-title">about me</span>
                  </h1>
                  <div className="section-title center">
                    <h2>
                      <i>Services</i>
                    </h2>
                  </div>
                  <div className="col-lg-12 section-content">
                    <div className="row">
                      <div className="col-lg-3">
                        <img
                          src={bankingDomain}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt=""
                        />
                        <p className="title-1">FULL STACK</p>
                        <p className="content-1">
                          I have ten years experience working as a full stack
                          developer. I am experience in font-end, back-end and
                          database technologies.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <img
                          src={bankingDomain}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">BANKING DOMAIN</p>
                        <p className="content-1">
                          I have two years working as an employee for a bank,
                          after that I have done many internet banking projects
                          for the banks in Vietnam.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <img
                          src={bankingDomain}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">MANAGEMENT</p>
                        <p className="content-1">
                          I write about web design. It is a long established
                          fact that a reader will be distracted by the readable
                          content.
                        </p>
                      </div>
                      <div className="col-lg-3">
                        <img
                          src={bankingDomain}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                        <p className="title-1">PROBLEM SOLVER</p>
                        <p className="content-1">
                          I have strong project management skills. It is a long
                          established fact that a reader will be distracted by
                          the readable content.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>Work-Process</i>
                    </h2>
                  </div>
                  <div className="col-lg-12 work-process">
                    <div className="col-lg-12 word-process-banner"></div>
                    <div className="row">
                      <div className="col-sm-2 col-xs-4 col-12">
                        <div className="process">
                          <i className="pe-7s-comment" />
                          <h4>DISCOVER</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4  col-12">
                        <div className="process">
                          <i className="pe-7s-light col-12" />
                          <h4>IDEA</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-vector" />
                          <h4>DESIGN</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-network" />
                          <h4>DEVELOP</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-browser" />
                          <h4>TEST</h4>
                        </div>
                      </div>
                      <div className="col-sm-2 col-xs-4 col-12 ">
                        <div className="process">
                          <i className="pe-7s-rocket" />
                          <h4>LAUNCH</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>Clients</i>
                    </h2>
                  </div>
                  <div className="row clients">
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <img
                          src={tpBank}
                          className
                          alt
                          width="150px"
                          height="50px"
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row clients">
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                    <div className=" col-xs-4 col-md-2">
                      <div className="client">
                        {" "}
                        <img
                          src={tpBank}
                          className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}"
                          alt
                        />
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>fun-fact</i>
                    </h2>
                  </div>
                  <div className="row col-fun">
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-map-2" />
                        </p>
                        <h4>24 Countries Visited</h4>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-news-paper" />
                        </p>
                        <h4>72 Articles Published</h4>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-coffee" />
                        </p>
                        <h4>20.000 Cups Of Coffee</h4>
                      </div>
                    </div>
                    <div className="col-sm-3 col-xs-6 col-12">
                      <div className="fun-fact">
                        <p>
                          <i className="pe-7s-medal" />
                        </p>
                        <h4>12 Awards Won</h4>
                      </div>
                    </div>
                  </div>
                  <div className="section-title center">
                    <h2>
                      <i>other-pages</i>
                    </h2>
                  </div>
                  <div className="row other-pages" id={404}>
                    <div className="col-lg-12 other-page-items">
                      <button>404</button>
                      <button>Blog</button>
                      <button>form-elements</button>
                      <button>grid</button>
                      <button>shortcodes</button>
                      <button>typographys</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    
  );
}
