import { withRouter } from "react-router-dom";
import Navbar from "./Menu"

function Detail(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
          <Navbar></Navbar>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12  pt-10">
          <div>
            <h2>ID : {props.match.params.id}</h2>
            <h2>StudentID : {props.match.params.stdID}</h2>
            <h2>Name : {props.match.params.name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(Detail);
