import React, { Component } from 'react';
import Select from './Select';
import Checkbox from './Checkbox';
class Filter extends Component {
    constructor() {
        super();
        this.filters = {};
        this.state = {
            price: [{ name: "price", value: '4999', label: "0-4999" }, { name: "price", value: '5000-9999', label: "5000-9999" }, { name: "price", value: '10000-19999', label: "10000-19999" }, { name: "price", value: '20000-29999', label: "20000-29999" }, { name: "price", value: '30000', label: "30000 & above" }],
            brand: [{ name: "brand", value: 'motorola', label: "Motorola" }, { name: "brand", value: 'oppo', label: "Oppo" }, { name: "brand", value: 'vivo', label: "Vivo" }, { name: "brand", value: 'apple', label: "Apple" }, { name: "brand", value: 'sony', label: "Sony" }, { name: "brand", value: 'realme', label: "Realme" }],
            screensize: [{ name: "screen", value: "4.0", label: '4.0"' }, { name: "screen", value: "4.5", label: '4.5"' }, { name: "screen", value: "5.0", label: '5.0"' }, { name: "screen", value: "5.5", label: '5.5"' }, { name: "screen", value: "6.0", label: '6.0"' }, { name: "screen", value: "6.5", label: '6.5"' }],
            os: [{ name: "os", value: "8.0", label: "Oreo (8.0)" }, { name: "os", value: "7.0", label: "Nougat (7.0)" }, { name: "os", value: "6.0", label: "Marshmallow (6.0)" }, { name: "os", value: "ios", label: "ios Phones" }],
            ram: [{ name: "ram", value: "2gb", label: "2 GB" }, { name: "ram", value: "3gb", label: "3 GB" }, { name: "ram", value: "4gb", label: "4 GB" }, { name: "ram", value: "6gb", label: "6 GB" }]
        }
        this.updateFilters = this.updateFilters.bind(this);
    };
    updateFilters(data, isSelected) {
        let newList = [];
        if (isSelected) {
            if (!this.filters[data.name]) this.filters[data.name] = [];
            this.filters[data.name].push(data.value);
            let products = this.props.allProducts;
            let type = data.name;
            switch (type) {
                case 'price':
                    products.forEach(p => {
                        if (p.summary.price < value) {

                        }
                    })
                    break;
                case 'screen':
                this.filters[data.name].forEach(f => {
                    products.forEach(p => {
                        let displaySize = parseFloat(p.display.screen_size);
                        if ((displaySize <= parseFloat(f)) && (displaySize > (f-0.5))) {
                            newList.push(p);
                        }
                    })
                })
                    break;
            }
        } else {
            this.filters[data.name] = this.filters[data.name].filter(function(a){
                return a != data.value
            })
        }
        this.props.onFilter(newList);
    }
    render() {
        return (
            <div className="filters">
                <div className="filter-body">
                    <label>Filters</label>
                    <div className="filter-option">
                        <label>RAM</label>
                        <Checkbox options={this.state.ram} updateFilters={this.updateFilters}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Brand</label>
                        <Checkbox options={this.state.brand}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Screen Size</label>
                        <Checkbox options={this.state.screensize} updateFilters={this.updateFilters}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>OS</label>
                        <Checkbox options={this.state.os}></Checkbox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;