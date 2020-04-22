import React, { use } from "react";
import { axiosWithAuth } from "../auth/auth";

class FriendList extends React.Component {
  state = {
    person: [],
    name: "",
    age: "",
    email: "",
    id : 7
  };
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate() {
    this.getData();
  }

  getData = () => {
    //request data with the token
    //set the data to state
    axiosWithAuth()
      .get("/api/friends/")
      .then((res) => {
        //console.log("friend", res.data);
        this.setState({
          person: res.data,
        });
        //console.log(this.state.person);
      })
      .catch((err) => console.log("friend", { err }));
  };
  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  changeAge = (e) => {
    this.setState({
      age: e.target.value,
    });
  };
  changeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
  };

  addFriend = () => {
    axiosWithAuth()
      .post("/api/friends/", {
        id: this.state.id++,
        name: this.state.name,
        age: this.state.age,
        email: this.state.email,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  render() {
    return (
      <div>
        {this.state.person.map((p) => (
          <p>{p.name}</p>
        ))}
        <from onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="name"
            value={this.state.name}
            onChange={this.changeName}
          />
          <input
            type="number"
            placeholder="age"
            value={this.state.age}
            onChange={this.changeAge}
          />
          <input
            type="email"
            placeholder="email"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <button className="add" onClick={this.addFriend}>add a friend</button>
        </from>
      </div>
    );
  }
}
export default FriendList;
