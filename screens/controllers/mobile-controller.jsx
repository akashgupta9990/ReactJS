import React, { Component } from 'react';
import Itembody from '../view/listItem.jsx';
import Header from '../view/header.jsx';

class MobileController extends Component {
    constructor(props) {
        super(props);
        this.getMobileStore = this.getMobileStore.bind(this);
        this.handleViewStateChanged = this.handleViewStateChanged.bind(this);
        this.state = {
            viewList: this.getMobileStore().getMobileJSON().mobileJSON  // to store search text box value
        }
        // this.availableLists = [];
        // this.lists = [];
        // this.filters = [];
    }
    getMobileStore(){
        return this.props.store;
    }
    handleViewStateChanged() {
        let viewList = this.getMobileStore().getViewList();
        let products = viewList.length > 0 ? viewList : this.getMobileStore().getMobileJSON().mobileJSON;
        this.setState({
            viewList: products,
        });
    }
    componentDidMount() {
        this.getMobileStore().on('change', this.handleViewStateChanged);
    }

    componentWillUnmount() {
        this.getMobileStore().on('change', this.handleViewStateChanged);
    }
    generateFilterList() {}
    render() {
        return (
            <div id="container">
                <Header></Header>
                {/* onSearch={this.filterList} updateSearchText={this.updateSearchText} */}
                <Itembody products={this.state.viewList}></Itembody>
            </div>
        );
    }
}
module.exports = MobileController;