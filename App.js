import React, { Component } from 'react';
import Header from './components/header';
import Itembody from './components/itemBody';
class App extends Component {
    constructor() {
        super();
    };
    render() {
        return (
            <div id="container">
                <Header></Header>
                <Itembody></Itembody>
            </div>
        );
    }
}

export default App;