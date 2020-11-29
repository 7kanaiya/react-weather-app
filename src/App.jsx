import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Search from "./components/search";

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            tempData: [],
        }
    }
  
    getTempData = async (data) => {
        this.setState({ tempData: await axios.get(`http://api.weatherapi.com/v1/current.json?key=525b8493acf549e5968111244202911&q={${data}}`) })
        console.log(this.state.tempData.data.current.temp_c);
    }

    // getTempData = async (data) => {
    //     this.setState({ inputData: data });
    //     this.setState({ tempData: await axios.get(`http://api.weatherapi.com/v1/current.json?key=525b8493acf549e5968111244202911&q={${this.state.inputData}}`) })
    //     console.log(this.state.tempData.data.current.temp_c);
    // }

    render() {
        return (
            <div className="container">
                <Search input={this.getTempData} />           
            </div>
        )
    }
}
export default App;