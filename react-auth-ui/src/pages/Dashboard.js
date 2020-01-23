import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

export default class Dashboard extends Component {
    constructor() {
        super();

        let tokenis = localStorage.getItem("jwtToken");
        let loginStatus = true;

        if(tokenis == null) {
            loginStatus = false;
        }
        this.state ={
            loginStatus
        }
    }


    render() {

        if(this.state.loginStatus === false){
            return <Redirect to="/sign-in" />
        }
        return (
            <div>
                Dashboard!
            </div>
        )
    }
}
