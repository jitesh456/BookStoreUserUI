import React, { Component } from 'react';
import '../css/UserLogin.css';
import LoginBox from "./LoginBox";
export default class UserLogin extends Component {
  
    render() {
       
        return (
            <body >
            <div className= "login-page">
                <LoginBox/>
             </div>
            </body>
        );
    }
}