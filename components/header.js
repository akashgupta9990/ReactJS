import React, { Component, Fragment } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            searchText: "" // Search field model value
        }
    };
    // Update the state value of search model
    // show all product list if search field is empty
    updateState(evt) {
        this.setState({
            searchText: evt.target.value,
        });
        if (!evt.target.value) {
            this.props.onSearch();
        }
    }
    render() {
        return (
            <div className="header">
                <div className="search">
                    <button onClick={evt => this.props.onSearch(this.state.searchText)}></button>
                    <input type="text" placeholder="Search..." value={this.state.searchText} onChange={evt => this.updateState(evt)}></input>
                </div>
            </div>
        );
    }
}

export default Header;