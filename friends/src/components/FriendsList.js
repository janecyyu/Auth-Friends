import React from "react";
import axios from "axios";

class FriendList extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
    email: "",
  };
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    //request data with the token
    //set the data to state
    axios
      .get("http://localhost:5000/api/friends")
      .then((res) => {
        //state of hawaii or US and gasoline - regular
        // this.setState({
        // });
        console.log("friend", res);
      })
      .catch((err) => console.log("friend",{ err }));
  };
  render() {
    return (
      <div>
        <h3>name:{this.state.name}</h3>
      </div>
    );
  }
}
export default FriendList;
