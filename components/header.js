import React, { Component, Fragment } from 'react';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="search">
                    <button onClick={evt => this.props.onSearch(this.props.searchText)}></button>
                    <input type="text" placeholder="Search..." value={this.props.searchText} onChange={evt => this.props.updateSearchText(evt)}></input>
                </div>
            </div>
        );
    }
}

export default Header;