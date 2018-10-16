import React, { Component } from 'react';
import mobileStore from '../store/mobile-store';
import Checkbox from '../view/checkbox.jsx';

class Filter extends Component {
    constructor(props) {
        super(props);
        this.state = this.getFilterList();
    };
    getFilterList() {
        return mobileStore.getFilterList().filterList;
    }
    render() {
        return (
            <div className="filters">
                <div className="filter-body">
                    <label>Filters</label>
                    <div className="filter-option">
                        <label>Price</label>
                        <Checkbox options={this.state.price}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>RAM</label>
                        <Checkbox options={this.state.ram}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Brand</label>
                        <Checkbox options={this.state.brand}></Checkbox>
                    </div>
                    <div className="filter-option">
                        <label>Screen Size</label>
                        <Checkbox options={this.state.screensize}></Checkbox>
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