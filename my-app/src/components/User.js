import React, { PureComponent } from 'react';

class Users extends PureComponent {
    constructor() {
        super()
        this.state = {
            list:[]
        }
    }
    //----------------------
    updateHarry=()=>{
        fetch('/todo.json').then(res => res.json())
        .then(data=>this.setState({list:data}))
        // console.log('updateHarry')
    }
    //----------------------
    updateFarbod=()=>{
        fetch('/todo-farbod.json').then(res => res.json())
        .then(data=>this.setState({list:data}))        
    }
    //----------------------
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.props.user);
        if (this.props.user !== prevProps.user) {
            if (this.props.user === "1") {
                this.updateHarry()
                
            } else {
                this.updateFarbod()
                 console.log('updateHarry')
            }
        }
    }
    render() {
        return (
            <div>
                <ul>
                    {this.state.list.map(item => (<li>{item.todo}</li>))}
                </ul>
            </div>
        );
    }
}

export default Users;