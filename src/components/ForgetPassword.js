import React from 'react';
import booklogo from '../booklogo.png';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/ForgetPassword.css';

export default class ForgetPassword extends React.Component {
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange=()=>{

    }

    render(){
        return(
            <div>
                <AppBar id="app-header">
                   <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>
                    </div >
                </AppBar>
                <div className="header">
                    <div className="header_content">
                        <h2>Forget Your Password?</h2>
                    </div>
                </div>
                <div className="password">
                    <div className="forget_password">
                        <div className="forget_message forget_content"> 
                            <span className="message">Enter your email address and we will send you a link to reset password </span>
                        </div>
                        <div className="forget_content">
                            <TextField id="outlined-basic" label="Email" variant="outlined" 
                            style={{width:"100%"}}/>
                        </div>
                        <div className="forget_content" >
                            <Button id="forget_button" variant="filled" 
                            onclick={this.handleChange}>Send Email</Button>
                        </div>
                    </div>
                    <div className="create_account">
                        <a href="/user/login" id="anchor">CREATE ACCOUNT</a>
                    </div>
                </div>
            </div>
        );
    }
}