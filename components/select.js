import React, { Component, Fragment } from 'react';

class Select extends Component {
    constructor() {
        super();
        this.generateOption = this.generateOption.bind(this);
    };
    generateOption() {
        let options = this.props.options;
        return options.map((data, index)=>
            <option value={data.value ? data.value : data} key={index}>{data.name ? data.name : data}</option>
        );
    }
    render() {
        return (
            <Fragment>
                <select>{this.generateOption()}</select>
            </Fragment>
        );
    }
}

export default Select;