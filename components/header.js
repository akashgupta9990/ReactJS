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
                <input type="text" value={this.state.searchText} onChange={evt => this.updateState(evt)}></input>
                <button onClick={evt => this.props.onFilter(this.state.searchText)}>Search</button>
            </div>
        );
    }
}

export default Header;