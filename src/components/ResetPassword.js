import React from 'react';
import booklogo from '../booklogo.png';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/ForgetPassword.css';
import Service from '../service/Service';
export default class ResetPassword extends React.Component {
    constructor(props){
        super(props);
        this.state={
            password1 : '', password2 : '',
        }
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange=(field,event)=>{
        this.setState({ [event.target.name]: event.target.value })
    }


    componentDidMount(){
     
        console.log((this.props.location.search).substring(1))
        
    }

    resetPassword=()=>{
       
        // String token =this.props.location.search;
        let password = this.state.password2;
        Service.resetPassword(password,(this.props.location.search).substring(1)).then(
            (response)=>{
                console.log(response)
            }
        ).catch(error => {
            console.log(error.data);
        })
        
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
                        <h2>Reset Password</h2>
                    </div>
                </div>
                <div className="password">
                    <div className="reset_password">
                        <div className="forget_message forget_content"> 
                            <span className="message">Enter new password</span>
                        </div>
                        <div className="forget_content">
                            <TextField id="outlined-basic" label="Password" variant="outlined" 
                            name= "password1" onChange={this.handleChange.bind(this,"password1")}
                            style={{width:"100%"}}/>
                        </div>
                        <div className="forget_content">
                            <TextField id="outlined-basic" label="Confirm Password" variant="outlined" 
                            name= "password2" onChange={this.handleChange.bind(this,"password1")}
                            style={{width:"100%"}}/>
                        </div>
                        <div className="forget_content" >
                            <Button id="reset_button" variant="filled" 
                            onClick={this.resetPassword}>Reset Password</Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}