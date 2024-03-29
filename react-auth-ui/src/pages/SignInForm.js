import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

class SignInForm extends Component {
    constructor() {
        super();

        let tokenis = localStorage.getItem("jwtToken");
        let loginIn = true;
        
        if(tokenis == null) {
          loginIn = false;
        }

        this.state = {
            email: '',
            password: '',
            loginIn
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const loginUser = {
          email: this.state.email,
          password: this.state.password
        };

        const appURL = "http://192.168.0.104:5000";
        
        axios
        .post(appURL+"/api/users/login", loginUser)
        .then(res => {
          console.log(res);

          const { token } = res.data;
          localStorage.setItem("jwtToken", token);
          
          this.setState({loginIn: true });
        })
        .catch(err =>
          console.log(err)
        );        
    }

    render() {

        if(this.state.loginIn) {
          return <Redirect to="/dashboard" />
        }
        return (
          <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields">
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;
