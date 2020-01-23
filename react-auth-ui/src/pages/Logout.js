import React, { Component } from 'react'
import {Redirect} from 'react-router-dom';

export default class Logout extends Component {
    
    constructor() {
        super();

        let token = localStorage.clear();
        let loginStatus = true;

        if(token == null) {
            loginStatus = true
        }
        
        this.state = {
        loginStatus
        };
    }
    render() {
        if(this.state.loginStatus){
            return <Redirect to="/sign-in" />
        }
        return (
            <div>
                Loading...
            </div>
        )
    }
}
