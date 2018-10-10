import React, { Component } from 'react';
class Checkbox extends Component {
    constructor() {
        super();
        this.generateOption = this.generateOption.bind(this);
        this.filterResult = this.filterResult.bind(this);
        this.state = {
            checked: false
        }
    };
    filterResult(evt, data) {
        this.setState({
            checked: !this.state.checked,
        });
        if (this.state.checked) {
            let value = parseFloat(data.value);
            let products = this.props.products;
            let type = this.props.options[0].name;
            let newList = [];
            switch (type) {
                case 'price':
                    products.forEach(p => {
                        if (p.summary.price < value) {

                        }
                    })
                    break;
                case 'screen':
                    products.forEach(p => {
                        let displaySize = parseFloat(p.display.screen_size);
                        if (displaySize <= parseFloat(value) && displaySize > (value-0.5)) {
                            newList.push(p);
                        }
                    })
                    break;
            }
            this.props.onFilter(newList);
        }
    }
    generateOption() {
        let options = this.props.options;
        return options.map((data, index)=>
            <span key={data.value}>
                <label>{data.label}</label>
                <input type="checkbox" name={data.name} value={data.value} onChange={evt => this.filterResult(evt, data)}></input>
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