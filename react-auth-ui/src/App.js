import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import SignUpForm from './pages/SignUpForm';
import SignInForm from './pages/SignInForm';
import Dashboard from './pages/Dashboard';
import Logout from './pages/Logout';

import './App.css';

class App extends Component {

  constructor() {
    super();

    let token = localStorage.getItem("jwtToken");
    let loginStatus = true;

    if(token === null){
      loginStatus = false
    }
      
    this.state = {
      loginStatus
    };
  }
  
  render() {
    console.log(this.state.loginStatus);
    return (
      <Router basename="/">
        <div className="App">
          <div className="App__Aside"></div>
          <div className="App__Form">

            {!this.state.loginStatus ? (
              <div>
                <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
              </div>
              ) : (
                <div>
                  <div className="PageSwitcher">
                    <NavLink exact to="/dashboard" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Dashboard</NavLink>
                    <NavLink exact to="/logout" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Logout</NavLink>
                  </div>
                </div>
              )}
              <Switch>
                <Route exact path="/" component={SignUpForm}></Route>
                <Route path="/sign-in" component={SignInForm}></Route>
                <Route path="/dashboard" component={Dashboard}></Route>
                <Route path="/logout" component={Logout}></Route>
              </Switch>
  
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
