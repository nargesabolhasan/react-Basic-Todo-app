import React, { Component } from "react";
import { Form } from "react-bootstrap";
import Users from "./User";



class Radio extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: "1",
      profiles: [],
    };
  }
  componentDidMount() {
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => this.setState({ profiles:data}));
  }
    render() {
     
    return (
        <div>           
        <Form>
          {this.state.profiles.map((item) =>( 
             <Form.Check  onChange={(e)=>this.setState({currentUser:e.target.id})} label={item.name} name="radiouser" id={item.id} type='radio'/>
          ))}
            </Form>
            
            <Users user={this.state.currentUser}/>
      </div>
    );
  }
}

export default Radio;