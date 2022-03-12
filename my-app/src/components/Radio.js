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
  //----------------------
  componentDidMount() {
    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => this.setState({ profiles: data }));
  }
  //----------------------
  render() {
    return (
      <div>
        <Form>
          {this.state.profiles.map((item) => (
            <>
              <input
                onChange={(e) => this.setState({ currentUser: e.target.id })}
                name="radiouser"
                id={item.id}
                type='radio'
              />
              <label>
                {item.name}
              </label>
            </>
          ))}
        </Form>

        <Users user={this.state.currentUser} />
      </div>
    );
  }
}

export default Radio;