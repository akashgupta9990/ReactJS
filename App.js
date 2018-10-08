import React, { Component } from 'react';
class App extends Component {
    constructor() {
        super();
        this.state = { 
            inputVal: '',
            lists: ['abcd', 'efgh', 'ijkl', 'mnop']
        }
        this.updateList = this.updateList.bind(this);
        this.checkOccurence = this.checkOccurence.bind(this);
        this.resetInput = this.resetInput.bind(this);
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
    resetInput() {
        this.setState({
            inputVal: ""
        });
    }
    render() {
        let lists = this.state.lists;
        return (
            <div id="body">
                <div style={{display: "inline-flex"}} className="container">
                    <div className="inputField">
                        <input type="text" value={this.state.inputVal} onChange={evt => this.updateInputValue(evt)} />
                    </div>
                    <div className="addButton">
                        <Add element={this.state.inputVal} lists={lists} onAddClick={this.resetInput} onListChange={this.updateList}></Add>
                    </div>
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
            this.props.onAddClick();
        }
    }
    render() {
        return (
            <button onClick={evt => this.addElementtoList(evt)}>Add</button>
        );
    }
}

class List extends Component {
    constructor() {
        super();
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
        this.allowDrop = this.allowDrop.bind(this);
    }
    allowDrop(ev) {
        ev.preventDefault();
    }
    drag(ev) {
        ev.dataTransfer.setData("text", ev.target.id);
    }
    
    drop(ev) {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.target.parentElement.appendChild(document.getElementById(data));
    }
    createList(){
        return this.props.lists.map((list, index)=>
            <div className="listView" key={index} draggable="true" onDragStart={this.drag} onDrop={this.drop} onDragOver={this.allowDrop} id={index}>
                <p className="listName">{list}
                </p>
                <ListAction index={index} lists={this.props.lists} onListChange={this.props.onListChange}></ListAction>
            </div>
        );
    }
    render() {
        return (
            <div className="list">
                {this.createList()}
            </div>
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
            <span className="listAction">
                <i className="fas fa-trash-alt fa-xs listDelete" onClick={evt => this.deleteList(evt)}></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <i className="fas fa-random fa-xs listShuffle" onClick={evt => this.shuffleList(evt)}></i>
            </span>
        );
    }
}

export default App;