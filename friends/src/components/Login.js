import React from "react";
import { axiosWithAuth } from "../auth/auth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "",
      password: "",
      isLoading: false,
    },
  };

  handleChange = (e) => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value,
      },
    });
  };

  fetchData = () => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        isLoading: true,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", this.state.credentials)
      .then((res) => {
        console.log("login", res.data.payload);
        localStorage.setItem("token", JSON.stringify(res.data.payload));
        this.props.history.push("/FriendsList");
      })
      .catch((err) => console.log(err));
    // axiosWithAuth()
    //   .post("/api/login", this.state.credentials)
    //   .then((res) => {
    //     // res.data.payload
    //     // redux - send the token to the redux store
    //     // browser storage - localStorage (this is probably the least secure choice)
    //     // cookies
    //     localStorage.setItem("token", JSON.stringify(res.data.payload));
    //     this.props.history.push("/protected");
    //   })
    //   .catch((err) => console.log({ err }));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.handleChange}
          />
          <button className="login"
          // onClick={this.fetchData}
          // disabled={this.state.credentials.isLoading}
          >
            log in
            {/* {this.state.credentials.isLoading && <span>Loading...</span>}
            {!this.state.credentials.isLoading && <span>Log in</span>} */}
          </button>
        </form>
      </div>
    );
  }
}

export default Login;
