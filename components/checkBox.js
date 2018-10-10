import React, { Component } from 'react';

class Checkbox extends Component {
    constructor() {
        super();
        this.generateOption = this.generateOption.bind(this);
    };
    generateOption() {
        let options = this.props.options;
        return options.map((data, index)=>
            <span key={data.value}>
                <label>{data.label}</label>
                <input type="checkbox" name={data.name} value={data.value}></input>
            </span>
        );
    }
    render() {
        return (
            <div className="">
                {this.generateOption()}
            </div>
        );
    }
}

export default Checkbox;