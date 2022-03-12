import '../App.css';
import TodoList from'./Todo.js';
// import TimerFunction from'./TimerFunc';
import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      currentUSer:''
    }
  }
  render (){
    return (
      <div className="App">
        <header className="App-header">
          <TodoList currentUSer={this.state.currentUSer}/>
          {/* <TimerFunction/> */}
        </header>
      </div>
    );
  }
  
}

export default App;
