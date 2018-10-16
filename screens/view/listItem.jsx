import React, { Component } from 'react';
import Filter from '../view/filters.jsx';

class Itembody extends Component {
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
                    {this.getProductDetail(this.props.products)}
                </div>
            </div>
        );
    }
}

module.exports = Itembody;