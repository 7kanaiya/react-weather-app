import React, { Component } from "react";
class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:""
        }
    }

    onFormSubmit = (e) => {
        this.props.input(this.state.data);
        e.preventDefault();
        
    }
render(){
    return (
        <div className="row" align-center>
            <div className="col-md-6">
                <form onSubmit={this.onFormSubmit}>
                    <div class="form-group">
                    <input type="text"
                            class="form-control" name="" id="" aria-describedby="helpId" placeholder="Enter city"
                            onChange={(event) => this.setState({ data: event.target.value })}
                            style={{boxShadow:"5"},{borderRadius:"50px"}}
                        />

                        {this.state.data}
                    </div>
                </form>
            </div>
        </div>
    )}
}
export default Search;