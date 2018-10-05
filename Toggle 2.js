import React, { Component } from 'react';
var blue, black;
class App extends Component {
    constructor() {
        super()
        this.state = { background: "black" }
        blue = { background: "blue", width: "100px", height: "100px" };
        black = { background: "black", width: "100px", height: "100px" };
        this.onClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            background: this.state.background == 'black' ? "blue" : "black"
        });
    }
    render() {
        
        return (
            <div style={this.state.background == "black" ? blue : black} onClick={this.onClick}></div>
        );
    }
}
export default App;