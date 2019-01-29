import React from "react";
import InputField from "./InputField";
import Message from "./Message";

class App extends React.Component {
    constructor(){
        super();
        this.addTodo = this.addTodo.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.state = {
            todos: {}
        };
    }
    componentWillMount() {
        const localStorageRef = localStorage.getItem('todos-ls');

        if(localStorageRef) {
            this.setState({
                todos: JSON.parse(localStorageRef)
            });
        }
    }

    componentWillUpdate(nextProps, nextState) {
        // console.log({nextProps, nextState});
        localStorage.setItem('todos-ls', JSON.stringify(nextState.todos));
    }
    
    addTodo(todo) {
        const todos = { ...this.state.todos};
        const timeStamp = Date.now();
        todos[`todo-${timeStamp}`] = todo;
        this.setState({
            todos: todos
        });
    }

    handleChange(details) {
        const Value = details.checked;
        details.checked = !Value;
        console.log(details);
        const todos = { ...this.state.todos };
        this.setState({
            todos: todos
        });
    }
    
    handleDelete(index) {
        const todos = {...this.state.todos};
        delete todos[index];
        this.setState({
            todos: todos
        })

    }

    render(){
        return(
            <div >
                <InputField addTodo={this.addTodo}/>
                <div className="todolist">
                    <ul>
                        {
                            Object.keys(this.state.todos).map(key => 
                                <Message key = {key} 
                                details = {this.state.todos[key]} 
                                handleChange = {this.handleChange}
                                handleDelete = {this.handleDelete}
                                index = {key}/> )
                        }       
                    </ul>
                </div>
            </div>
        )
    }
}
export default App;