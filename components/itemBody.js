import React, { Component, Fragment } from 'react';
import Filter from './filter';

class Itembody extends Component {
    constructor() {
        super();
    };
    getProductDetail() {
        let products = this.props.products;
        return products.map((data, index)=>
            <div key={index} className="productDetail">
                <div className="productImage">
                    <img src=""></img>
                </div>
                <div className="productSpecs">
                    <div className="leftColumn">
                        <ul>
                            <li>{data.summary.model}</li>
                            <li>{data.summary.display}</li>
                            <li>{data.summary.storage}</li>
                            <li>{data.summary.camera}</li>
                        </ul>
                    </div>
                    <div className="rightColumn">
                        <ul>
                            <li>{data.summary.battery}</li>
                            <li>{data.summary.ram}</li>
                            {/* <li>{data.summary.storage}</li> */}
                            {/* <li>{data.summary.camera}</li> */}
                        </ul>
                    </div>
                </div>
            </div>
        );
    };
    render() {
        return (
            <div className="products">
                <Filter products={this.props.products} onFilter={this.props.onFilter}></Filter>
                <div>
                    {this.getProductDetail()}
                </div>
            </div>
        );
    }
}

export default Itembody;