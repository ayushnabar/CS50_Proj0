import React from 'react'
import { render } from 'react-dom'
import Hello from './Hello';

const styles = {
    fontFamily: 'sans-serif',
    textAlign: 'center',
};

const Todo = props =>(
    <li>
        <input type = "checkbox" />
        <button>delete</button>
        <span>{props.todo.text}</span>
    </li>
)

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            todos: [],
        }
    }

    addTodo(){
        const text = prompt("Todo text")
        //1.15
        this.setState({
            // ... creates a reference with this.state's elements, changing the reference, but keeping the values
            todos: [...this.state.todos, {text: text}], 
        })
    }

    render(){
        return(
        <div>
            <button onClick = {() => this.addTodo()}> ADD TODO </button>
            <ul>
                {this.state.todos.map(todo => <Todo todo = {todo} />)}
            </ul>
        </div>
        )
    }
}

render(<App />, document.getElementById('root'))