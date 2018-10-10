import React, { Component } from 'react';
import Select from './Select';
import Checkbox from './Checkbox';
class Filter extends Component {
    constructor() {
        super();
        this.state = {
            price: [{name: "price", value: 'Upto 5000', label: "Upto 5000"},{name: "price", value: '5000-10000', label: "5000-10000"},{name: "price", value: '10000-20000', label: "10000-20000"},{name: "price", value: 'Above 30000', label: "Above 30000"}],
            brand: ['Motorola', 'Oppo', 'Vivo', 'Apple', 'Sony', 'Realme'],
            screensize: [{name: "screen", value:"4.0", label: "4.0"},{name: "screen", value:"4.5", label: "4.5"},{name: "screen", value:"5.0", label: "5.0"},{name: "screen", value:"5.5", label: "5.5"},{name: "screen", value:"6.0", label: "6.0"},{name: "screen", value:"6.5", label: "6.5"}],
            os: [{name: "os", value:"8.0", label: "Oreo (8.0)"},{name: "os", value:"7.0", label: "Nougat (7.0)"},{name: "os", value:"6.0", label: "Mrshmallow (6.0)"},{name: "os", value:"ios", label: "ios Phones"}]
        }
    };
    render() {
        return (
            <div className="itemFilter">
                <h3>Filters</h3>
                <div className="filterList">
                    <div>
                        <label>Price</label>
                        <Checkbox options={this.state.price}  onFilter={this.props.onFilter}></Checkbox>
                    </div>
                    <div className="">
                        <label>Brand</label>
                        <Select options={this.state.brand}></Select>
                    </div>
                    <div className="">
                        <label>Screen Size</label>
                        <Checkbox options={this.state.screensize}></Checkbox>
                    </div>
                    <div>
                        <label>OS</label>
                        <Checkbox options={this.state.os}></Checkbox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;