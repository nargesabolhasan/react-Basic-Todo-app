import React ,{PureComponent} from 'react';
export default class TodoItem extends PureComponent {
    render() {
        return (
            <li  style={{background:'pink',color:'black',textAlign:'end',listStyle:'none',padding:'5px'}}>
                {this.props.title}
                <button onClick={this.props.remove} style={{margin:'5px'}}>X</button>
                <button onClick={this.props.doneTodo}>done</button>
                </li>
            )
    }
}