import React, { Component, Fragment } from 'react';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            searchText: ""
        }
    };
    updateState(evt) {
        this.setState({
            searchText: evt.target.value,
        });
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