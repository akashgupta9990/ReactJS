import React, { Component } from 'react';
import Select from './Select';
import Checkbox from './Checkbox';
class Filter extends Component {
    constructor() {
        super();
        this.filters = [];
        this.state = {
            price: [{name: "price", value: 'Upto 5000', label: "Upto 5000"},{name: "price", value: '5000-10000', label: "5000-10000"},{name: "price", value: '10000-20000', label: "10000-20000"},{name: "price", value: 'Above 30000', label: "Above 30000"}],
            brand: [{name: "brand", value: 'motorola', label: "Motorola"},{name: "brand", value: 'oppo', label: "Oppo"},{name: "brand", value: 'vivo', label: "Vivo"},{name: "brand", value: 'apple', label: "Apple"},{name: "brand", value: 'sony', label: "Sony"},{name: "brand", value: 'realme', label: "Realme"}],
            screensize: [{name: "screen", value:"4.0", label: "4.0"},{name: "screen", value:"4.5", label: "4.5"},{name: "screen", value:"5.0", label: "5.0"},{name: "screen", value:"5.5", label: "5.5"},{name: "screen", value:"6.0", label: "6.0"},{name: "screen", value:"6.5", label: "6.5"}],
            os: [{name: "os", value:"8.0", label: "Oreo (8.0)"},{name: "os", value:"7.0", label: "Nougat (7.0)"},{name: "os", value:"6.0", label: "Marshmallow (6.0)"},{name: "os", value:"ios", label: "ios Phones"}],
            ram: [{name: "ram", value:"2", label: "2 GB"},{name: "ram", value:"3.0", label: "3 GB"},{name: "ram", value:"4", label: "4 GB"},{name: "ram", value:"6", label: "6 GB"}]
        }
    };
    // fetchFilters() {
    //     let products = this.props.products;
    //     let filters = {ram: {name: 'ram', value:'', label: ''},
    //         price : {name: 'price', value:'', label: ''},
    //         brand :  {name: 'brand', value:'', label: ''},
    //         screenSize : {name: 'screen', value:'', label: ''},
    //         os : {name: 'os', value:'', label: ''},
    //         processorType : {name: 'processortype', value:'', label: ''},
    //         processorDetail : {name: 'processordetail', value:'', label: ''},
    //         memory : {name: 'memory', value:'', label: ''},
    //         rearCamera : {name: 'rearcamera', value:'', label: ''},
    //         frontCamera : {name: 'frontcamera', value:'', label: ''},
    //         battery : {name: 'battery', value:'', label: ''},
    //         display : {name: 'display', value:'', label: ''}
    //     }

    //     products.forEach(element => {
            
    //     });
    // };
    render() {
        return (
            <div className="filters">
                <div className="filter-body">
                    <label>Filters</label>
                    <div className="filter-option">
                        <label>RAM</label>
                        <Checkbox options={this.state.ram} onFilter={this.props.onFilter} products={this.props.products}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Brand</label>
                        <Checkbox options={this.state.brand} onFilter={this.props.onFilter} products={this.props.products}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Screen Size</label>
                        <Checkbox options={this.state.screensize} onFilter={this.props.onFilter} products={this.props.products}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>OS</label>
                        <Checkbox options={this.state.os} onFilter={this.props.onFilter} products={this.props.products}></Checkbox>
                    </div>
                </div>
            </div>
        );
    }
}

export default Filter;