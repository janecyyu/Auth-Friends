import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from './components/Login';
import FriendList from './components/FriendsList';
import PrivateRoute from './components/ProtectedRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/FriendsList">FriendsList</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute path="/FriendsList" component={FriendList}/>
          <Route path="/login" component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
