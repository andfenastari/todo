import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Todo extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="input-group form-group"> 
                    <input className="form-control" type="text" value={this.props.text} />
                <div className="input-group-append">
                    <button className="btn btn-danger" onClick={() => this.props.handleDelete(this.props.id)}>
                        Delete
                    </button>
                </div>
            </div>
        )
    }
}

class TodoContainer extends Component {
    constructor(props) {
        super();
        

        this.state = {todos: {}, nextId: 0, text: ""};

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    renderTodos() {
        return Object.entries(this.state.todos).map( (obj) => obj[1]);
    }

    handleDelete(todoId) {
        this.setState((state) => {
            delete state.todos[todoId];
            return state;
        });
    }

    handleAdd() {
        this.setState((state) => {
            let todoId = state.nextId;
            let todo = <Todo handleDelete={this.handleDelete} id={todoId} text={state.text}/>;
            state.todos[todoId] = todo;
            state.nextId += 1;
            return state; 
        });
    }

    handleInputChange(event) {
        this.setState({text: event.target.value});
    }

    render() {
        return (
            <div id="todo-container" className="container">
                <div className="input-group form-group">
                    <div className="input-group-prepend">
                        <button type="button" className="btn btn-info" onClick={this.handleAdd}>Add todo</button>
                    </div>
                    <input type="text" class="form-control" value={this.inputText} onChange={this.handleInputChange} />
                </div>
                <div id="todos">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default TodoContainer;