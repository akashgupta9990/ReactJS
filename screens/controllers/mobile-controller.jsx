import React, { Component } from 'react';
import Itembody from '../view/listItem.jsx';
import Header from '../view/header.jsx';
import Footer from '../view/footer.jsx';

class MobileController extends Component {
    constructor(props) {
        super(props);
        this.getMobileStore = this.getMobileStore.bind(this);
        this.handleViewStateChanged = this.handleViewStateChanged.bind(this);
        this.state = {
            viewList: this.getMobileStore().getMobileJSON().mobileJSON  // to store search text box value
        }
    }
    // Returns class props store value
    getMobileStore(){
        return this.props.store;
    }
    // update the JSX dom
    handleViewStateChanged() {
        let viewList = this.getMobileStore().getViewList();
        let products = viewList.length > 0 ? viewList : this.getMobileStore().getMobileJSON().mobileJSON;
        this.setState({
            viewList: products,
        });
    }
    // Add an eventlistener on change event to update dom
    componentDidMount() {
        this.getMobileStore().on('change', this.handleViewStateChanged);
    }
    // Remove an eventlistener on change event
    componentWillUnmount() {
        this.getMobileStore().on('change', this.handleViewStateChanged);
    }
    render() {
        return (
            <div id="container">
                <Header></Header>
                <Itembody products={this.state.viewList}></Itembody>
                <Footer></Footer>
            </div>
        );
    }
}
module.exports = MobileController;