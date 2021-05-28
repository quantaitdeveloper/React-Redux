import React from 'react';
class Search extends React.Component {
    constructor(props) {
        super(props);
        
        this.state={
            keyword : '',
            dateS: "",
            dateE: "",
            getyearS: 0,
            getyearE: 0,
            getmonthS: 0,
            getmonthE: 0,
            getdateS: 0,
            getdateE: 0,
        }
    }
    onChange=(e)=>{
        this.setState({
            [e.target.name] : e.target.value
        })
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        let dateS = this.state.dateS.split("-");
        let dateE = this.state.dateE.split("-");
        let getyearS = parseInt(dateS[0]);
        let getyearE = parseInt(dateE[0]);
        let getmonthS = parseInt(dateS[1]);
        let getmonthE = parseInt(dateE[1]);
        let getdateS = parseInt(dateS[2]);
        let getdateE = parseInt(dateE[2]);
    
        
        this.setState(
          {
            getyearS: getyearS,
            getyearE: getyearE,
            getmonthS: getmonthS,
            getmonthE: getmonthE,
            getdateS: getdateS,
            getdateE: getdateE,
          },()=>  this.props.onDate(
            this.state.getyearS,
            this.state.getyearE,
            this.state.getmonthS,
            this.state.getmonthE,
            this.state.getdateS,
            this.state.getdateE));
         
      };
    onSearch=()=>{
        this.props.onSearch(this.state.keyword)
    }
    render() {
        
        return (
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 col-6">
                <div className="row ">
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 col-4">
                        <div className="form-group">
                            <input type="text" className="form-control ml-5" name="keyword" value={this.state.keyword}
                                style={{float:'right',marginLeft:'5px'}} placeholder="Nhập Mã Sinh Viên..."  onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 col-3">
                        <button type="button" className="btn btn-primary" onClick={this.onSearch}><i className="fas fa-search"></i> Tìm</button>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5 col-5 text-center bg-light pd-5">
                    <form onSubmit={this.onSubmit}>
                    <label style={{fontSize :'20px'}}><b>Tìm Theo Ngày</b> </label>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="dateS"
                      value={this.state.dateS}
                      placeholder="Từ Ngày"
                      onChange={this.onChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      name="dateE"
                      value={this.state.dateE}
                      placeholder="Đến Ngày"
                      onChange={this.onChange}
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-primary"
                    onClick={this.onDate}
                    value="Tìm"
                  />
                </form>
                    </div>
                </div>
                

            </div>

        )
    }
}

export default Search;