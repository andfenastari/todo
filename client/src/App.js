import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super();
        //inicializar o estado do componente
        this.state = {text: ""};
        this.handleDelete = props.handleDelete;
        //colocar a variavel "this" no escopo da funcao
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        //pegar o texto associado ao evento e atualizar o estado
        alert(event.target.value);
        let text = event.target.value;
        this.setState({text: text});
    }

    render() {
        return (
            <div>
                <input type="text" value={this.state.text} onChange={this.handleChange} />
                <h2>{this.props.id}</h2>
                <button onClick={() => this.handleDelete(this.props.id)}>Delete todo</button>
            </div>
        )
    }
}

class TodoContainer extends Component {
    constructor(props) {
        super();
        

        this.state = {todos: {}, nextId: 0};

        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
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
            let todo = <Todo handleDelete={this.handleDelete} id={todoId} />;
            state.todos[todoId] = todo;
            state.nextId += 1;
            return state; 
        });
    }

    render() {
        return (
            <div id="todo-container">
                <button onClick={this.handleAdd}>Add todo</button>
                <div id="todos">
                    {this.renderTodos()}
                </div>
            </div>
        )
    }
}

export default TodoContainer;