import React, { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = { 
            inputVal: '',
            lists: []
        }
    };
    updateInputValue(evt) {
        this.setState({
            inputVal: evt.target.value
        });
    }
    render() {
        console.log("Rendering search")
        // let lists = this.state.lists;
        return (
            <div>
                {/* <div style={{display: "inlineBlock"}}> */}
                    <input type="text" value={this.state.inputVal} onChange={evt => this.updateInputValue(evt)} />
                    <Add element={this.state.inputVal} lists={this.state.lists}></Add>
                {/* </div> */}
                {/* <List lists={lists}></List> */}
            </div>
        );
    }
}

class Add extends Component {
    constructor() {
        super();
        this.state = {lists: []}
    }
    addElementtoList() {
        if (this.props.element) {
            this.props.lists.push(this.props.element);
            this.setState({
                lists: this.props.list
            })
        }
    }
    render() {
        console.log("Rendering add")
        return (
            <div>
                <button onClick={evt => this.addElementtoList(evt)}>Add</button>
                <List lists={this.props.lists}></List>
            </div>
        );
    }
}

class List extends Component {
    createList(){
        return this.props.lists.map((list, index)=>
            <li key={index}>{list} &nbsp;&nbsp;&nbsp;&nbsp; <ListAction index={index} lists={this.props.lists}></ListAction></li>
        );
    }
    render() {
        console.log("Rendering list")
        return (
            <ul>
                {this.createList()}
            </ul>
        );
    }
}

class ListAction extends Component {
    deleteList() {
        window.a = this
        this.props.lists.splice(this.props.index, 1);
    }
    shuffleList() {

    }
    render() {
        return (
            <span>
                <i className="fas fa-trash-alt fa-xs" onClick={evt => this.deleteList(evt)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-random fa-xs" onClick={evt => this.shuffleList(evt)}></i>
            </span>
        );
    }
}

class Shuffle extends Component {
    constructor() {
        super();
    };
    render() {
        <button>Shuffle</button>
    }
}

export default App;