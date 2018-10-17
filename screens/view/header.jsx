import React, { Component } from 'react';
import MobileStore from '../store/mobile-store.js';
import MobileAction from '../actions/mobile-action.js';

class Header extends Component {
    // Wrapper to dispatch event from mobileAction for input value update
    changeSearchValue(evt) {
        MobileAction.resetSearch(evt.target.value)
    }
    // Wrapper to dispatch event from mobileAction for search click
    search() {
        MobileAction.searchList();
    }
    render() {
        return (
            <div className="header">
                <div className="search">
                    <button onClick={evt => this.search()}></button>
                    <input type="text" placeholder="Search..." defaultValue={MobileStore.getSearchValue()} onChange={evt => this.changeSearchValue(evt)}></input>
                </div>
            </div>
        );
    }
}

module.exports = Header;