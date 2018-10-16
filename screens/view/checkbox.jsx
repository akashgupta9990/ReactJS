import React, { Component } from 'react';
import MobileAction from '../actions/mobile-action.js';

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.generateOption = this.generateOption.bind(this);
    };

    checkBoxOnChange(evt, data) {
        MobileAction.checkListOnchange(evt, data)
    }

    generateOption(options) {
        return options.map(data=>
            <label key={data.value}>
                <input type="checkbox" name={data.name} value={data.value} onChange={evt => this.checkBoxOnChange(evt, data)}></input>
                {data.label}
            </label>
        );
    }
    render() {
        return (
            <div className="checkbox">
                {this.generateOption(this.props.options)}
            </div>
        );
    }
}

module.exports = Checkbox;