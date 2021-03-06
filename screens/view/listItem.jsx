import React, { Component } from 'react';
import Filter from '../view/filters.jsx';
import MobileStore from '../store/mobile-store.js';

class Itembody extends Component {
    getFilters() {
        let filters = MobileStore.getFilters();
        return filters.map((data, index)=>
            <span className="filter-title" key={index}>
                {data.type}: <label>{data.label}</label>
            </span>
        );
    }
    // Create array of dynamic jsx for product details
    getProductDetail(list) {
        return list.map((data, index)=>
            <div key={index} className="product-detail">
                <div className="product-image">
                    <img src={data.imagePath}></img>
                </div>
                <div className="product-specs">
                    <div className="product-toprow">
                        <p>{data.summary.model}</p>
                        <p>Rs. {data.summary.price}</p>
                    </div>
                    <div className="product-bottomrow"><p>{data.summary.ram}, {data.summary.storage}, {data.summary.display}, {data.summary.processor}, {data.general.colors}</p></div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="products">
                <Filter></Filter>
                <div className="product-body">
                    <div className="product-body-filters-label">
                        {this.getFilters()}
                    </div>
                    <div className="product-body-content">
                        {this.getProductDetail(this.props.products)}
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = Itembody;