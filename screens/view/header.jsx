import React, { Component } from 'react';
import MobileStore from '../store/mobile-store.js';
import MobileAction from '../actions/mobile-action.js';

class Header extends Component {
    changeSearchValue(evt) {
        MobileStore.setSearchValue(evt.target.value)
    }
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