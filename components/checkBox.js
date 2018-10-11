import React, { Component } from 'react';
class Checkbox extends Component {
    constructor() {
        super();
        this.generateOption = this.generateOption.bind(this);
        this.filterResult = this.filterResult.bind(this);
    };
    filterResult(evt, data){
        this.props.updateFilters(data, evt.target.checked);
    }
    generateOption() {
        let options = this.props.options;
        return options.map((data, index)=>
            <label key={data.value}>
                <input type="checkbox" name={data.name} value={data.value} onChange={evt => this.filterResult(evt, data)}></input>
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