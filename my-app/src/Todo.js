import React, { Component } from 'react';
import Timer from './Timer';
import TodoItem from './TodoItem'
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'TODO',
            list: [],
            done: []
    
        }
        this.list2 = ['homeWorks']
        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }
    //----------------------
    addTodo() {
        this.setState({ list: [...this.state.list, this.state.value], value: '' })
    }
    //----------------------
    removeTodo(todo) {
        let list = this.state.list.filter(l => l !== todo);
        this.setState({ list: list })
    }
    //----------------------
    doneTodo(todo) {
        this.removeTodo(todo)
        this.setState({ done: [todo, ...this.state.done] })
    }
    //----------------------
    componentDidMount(){
        fetch('/todo.json')
        .then((res) =>
            res.json()
        ).then((data) =>{
            const todo=data.map(item=>item.todo)
            this.setState({ list: [...todo, ...this.state.list]})
            // console.log(data)
        })
    }
    //--------------------------------------------------
    render() {
        return (
            <div>
                <span>
                    <Timer/>
                </span>
                <ul>
                    <li>
                        <input type="text" placeholder={this.state.value} onChange={e => {
                            this.setState({ value: e.target.value })
                        }} />
                        <button onClick={this.addTodo}>add</button>
                    </li>
                    {this.state.list.map((todo, i) => <TodoItem
                        index={i + 1} title={todo}
                        remove={() => this.removeTodo(todo)}
                        doneTodo={() => this.doneTodo(todo)}
                    />)}
                    {this.list2.map(todo => <li>{todo}</li>)}
                    {this.state.done.map(d => <li>{d}</li>)}
                </ul>
            </div>
        )
    }
}
export default TodoList;

