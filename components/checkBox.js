import React, { Component } from 'react';
class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.generateOption = this.generateOption.bind(this);
    };
    generateOption() {
        let options = this.props.options;
        return options.map((data, index)=>
            <label key={data.value}>
                <input type="checkbox" name={data.name} value={data.value} onChange={evt => this.props.updateFilters(evt, data)}></input>
                {data.label}
            </label>
        );
    }
    render() {
        return (
            <div className="checkbox">
                {this.generateOption()}
            </div>
        );
    }
}

export default Checkbox;