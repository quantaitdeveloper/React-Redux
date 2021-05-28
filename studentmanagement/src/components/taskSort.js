import React from 'react';
class Sort extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            sort :{
                by :'',
                value : 1
            }
        }
    }
    
    render() {
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6 ml-15 text-center">

                <div className="dropdown open">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="triggerId" data-toggle="dropdown"
                        aria-haspopup="true" aria-expanded="false">
                        Sắp Xếp
                </button>
                    <div className="dropdown-menu" aria-labelledby="triggerId">
                        <button className="dropdown-item"  onClick={()=>this.props.onSort('name',1)}>Thêm đầu tiên</button>
                        <button className="dropdown-item" onClick={()=>this.props.onSort('name',-1)}>Thêm cuối cùng</button>
                       

                        
                    </div>
                </div>

            </div>

        )
    }
}

export default Sort;