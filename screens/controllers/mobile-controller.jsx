import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.availableLists = [];
        this.updateProductList = this.updateProductList.bind(this);
        this.filterList = this.filterList.bind(this);
        this.updateSearchText = this.updateSearchText.bind(this);
        this.generateFilterList = this.generateFilterList.bind(this);
        this.lists = [];
        this.filters = [];
    }
}