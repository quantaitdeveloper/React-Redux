import React from 'react';
import Search from './taskSearch';
import Sort from './taskSort';
class FormControl extends React.Component {
    render() {
        return (
            <div>
               
                <div className="row mt-15 mb-15">
                    {/*search*/}
                    <Search onSearch={this.props.onSearch} onDate={this.props.onDate}></Search>
                    {/*sort*/}
                    <Sort onSort={this.props.onSort}></Sort>
                </div>

            </div>

        )
    }
}

export default FormControl;