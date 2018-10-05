import React, { Component } from 'react';
var divCss;
class App extends Component {
    constructor() {
        super()
        this.state = { background: "black" }
        this.onClick = this.handleClick.bind(this);
    }
    handleClick(event) {
        let divColor = this.state.background == 'black' ? "blue" : "black";
        this.setState({
            background: divColor
        });
      }
    render() {
        divCss = {
            background: this.state.background,
            width: "100px",
            height: "100px"
        }
        return (
            <div style={divCss} onClick={this.onClick}>
            </div>
        );
    }
}
export default App;