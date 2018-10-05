import React, { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = { 
            inputVal: '',
            lists: []
        }
        this.updateList = this.updateList.bind(this);
        this.checkOccurence = this.checkOccurence.bind(this);
        this.availableLists = [];
    };
    updateInputValue(evt) {
        this.checkOccurence(evt.target.value)
        this.setState({
            inputVal: evt.target.value,
        });
    }
    checkOccurence(element) {
        if (element) {
            this.availableLists = [];
            this.state.lists.forEach((list) => {
                if (list.indexOf(element)>-1) {
                    this.availableLists.push(list);
                }
            })
        } else {
            this.availableLists = [];
        }
    }
    updateList(lists) {
        this.setState({
            lists: lists
        });
    }
    render() {
        let lists = this.state.lists;
        return (
            <div>
                <div style={{display: "inline-block"}}>
                    <input type="text" value={this.state.inputVal} onChange={evt => this.updateInputValue(evt)} />
                    <Add element={this.state.inputVal} lists={lists} onListChange={this.updateList} onAdd={this.checkOccurence}></Add>
                </div>
                <List lists={this.availableLists.length > 0 ? this.availableLists : lists} onListChange={this.availableLists.length > 0 ? undefined : this.updateList}></List>
            </div>
        );
    }
}

class Add extends Component {
    addElementtoList() {
        if (this.props.element) {
            let lists = this.props.lists;
            lists.push(this.props.element);
            this.props.onListChange(lists)
            this.props.onAdd(this.props.element);
        }
    }
    render() {
        return (
            <button onClick={evt => this.addElementtoList(evt)}>Add</button>
        );
    }
}

class List extends Component {
    createList(){
        return this.props.lists.map((list, index)=>
            <li key={index}>{list} &nbsp;&nbsp;&nbsp;&nbsp; 
                <ListAction index={index} lists={this.props.lists} onListChange={this.props.onListChange}></ListAction>
            </li>
        );
    }
    render() {
        return (
            <ul>
                {this.createList()}
            </ul>
        );
    }
}

class ListAction extends Component {
    deleteList() {
        let lists = this.props.lists;
        lists.splice(this.props.index, 1);
        this.props.onListChange && this.props.onListChange(lists)
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

export default App;