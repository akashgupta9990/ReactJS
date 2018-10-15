import React, { Component } from 'react';
import Select from './Select';
import Checkbox from './Checkbox';
class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: [
                { name: "price", value: '0-4999', label: "0-4999" },
                { name: "price", value: '5000-9999', label: "5000-9999" },
                { name: "price", value: '10000-19999', label: "10000-19999" },
                { name: "price", value: '20000-29999', label: "20000-29999" },
                { name: "price", value: '30000-999999', label: "30000 & above" }
            ],
            brand: [
                { name: "brand", value: 'motorola', label: "Motorola" },
                { name: "brand", value: 'oppo', label: "Oppo" },
                { name: "brand", value: 'vivo', label: "Vivo" },
                { name: "brand", value: 'apple', label: "Apple" },
                { name: "brand", value: 'sony', label: "Sony" },
                { name: "brand", value: 'xiaomi', label: "xiaomi" }
            ],
            screensize: [
                { name: "screen", value: "0-4.0", label: '4.0"' },
                { name: "screen", value: "4.01-4.5", label: '4.5"' },
                { name: "screen", value: "4.51-5.0", label: '5.0"' },
                { name: "screen", value: "5.01-5.5", label: '5.5"' },
                { name: "screen", value: "5.51-6.0", label: '6.0"' },
                { name: "screen", value: "6.01-6.5", label: '6.5"' }
            ],
            os: [
                { name: "os", value: "8.0-8.99", label: "Oreo (8.0)" },
                { name: "os", value: "7.0-7.99", label: "Nougat (7.0)" },
                { name: "os", value: "0-6.99", label: "Marshmallow (6.0)" },
                { name: "os", value: "10-10.99", label: "Ios 10" }
            ],
            ram: [
                { name: "ram", value: "2gb", label: "2 GB" },
                { name: "ram", value: "3gb", label: "3 GB" },
                { name: "ram", value: "4gb", label: "4 GB" },
                { name: "ram", value: "6gb", label: "6 GB" }
            ]
        }
    };
    render() {
        return (
            <div className="filters">
                <div className="filter-body">
                    <label>Filters</label>
                    <div className="filter-option">
                        <label>Price</label>
                        <Checkbox options={this.state.price} updateFilters={this.props.onFilter}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>RAM</label>
                        <Checkbox options={this.state.ram} updateFilters={this.props.onFilter}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Brand</label>
                        <Checkbox options={this.state.brand} updateFilters={this.props.onFilter}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Screen Size</label>
                        <Checkbox options={this.state.screensize} updateFilters={this.props.onFilter}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>OS</label>
                        <Checkbox options={this.state.os} updateFilters={this.props.onFilter}></Checkbox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;