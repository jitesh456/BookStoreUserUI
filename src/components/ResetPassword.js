import React from 'react';
import booklogo from '../booklogo.png';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/ForgetPassword.css';
import '../css/ResetPassword.css';
import Service from '../service/Service';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";





export default class ResetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            password1: '', password2: '', showPassword1: false,showPassword2: false,
            alertShow: false,
            alertResponse: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (field, event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    closeAlertBox = () => {
        this.setState({ alertShow: false });
    };

    showAlert = (severity, alertShow, alertResponse) => {
        let alertResponseVar = alertResponse;
        this.setState({
            severity: severity,
            alertShow: alertShow,
            alertResponse: alertResponse
        })
        this.props.dialogResponce(this.alertResponseVar);
        console.log(alertResponseVar);
    }

   handleClickShowPassword1 = () => {
        this.setState({ showPassword1: !this.state.showPassword1 });
    };

    handleMouseDownPassword1 = (event) => {
        event.preventDefault();
    };


    handleClickShowPassword2 = () => {
        this.setState({ showPassword2: !this.state.showPassword2 });
    };

    handleMouseDownPassword2 = (event) => {
        event.preventDefault();
    };


    componentDidMount() {

        console.log((this.props.location.search).substring(1))

    }

    resetPassword = () => {
        let password = this.state.password2;

        this.setState({
            password1:"",
            password2:'',
        })
        Service.resetPassword(password, (this.props.location.search).substring(1)).then(
            (response) => {
                console.log(response)
               
                if (response.data.statusCode === 200) {
                    this.setState({
                        severity: "success",
                        alertShow: true,
                        alertResponse: response.data.message
                    });
                    this.clearFieldsData();
                } else {
                    this.setState({
                        severity: "error",
                        alertShow: true,
                        alertResponse: response.data.message
                    });
                }
            }
        ).catch(error => {
            console.log(error.data);
        })

    }

    render() {
        return (
            <div>
                <AppBar id="app-header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>
                    </div >
                </AppBar>
                <div className="MainHeader">
                <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={this.state.alertShow}
                    autoHideDuration={6000} onClose={this.closeAlertBox}>
                    <Alert onClose={this.closeAlertBox} severity={this.state.severity} variant={"filled"}>
                        {this.state.alertResponse}
                    </Alert>
                </Snackbar>

                <div className="resetBox">
                    <div className="resetHeader">
                        <div className="Resetheader_content">
                            <h2>Reset Password</h2>
                        </div>
                    </div>
                    <div className="password">
                        <div className="reset_password">
                            <div className="forget_message forget_content">
                                <span className="message">Enter new password</span>
                            </div>
                            <div className="forget_content">
                                {/* <TextField id="outlined-basic" label="Password" variant="outlined"
                                    name="password1" onChange={this.handleChange.bind(this, "password1")}
                                    style={{ width: "100%" }} /> */}
                                <FormControl
                                    variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={this.state.showPassword1 ? 'text' : 'password'}
                                        value={this.state.password1} name="password1"
                                        onChange={this.handleChange.bind(this, "password1")}
                                        
                                        className="reset-password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword1}
                                                    onMouseDown={this.handleMouseDownPassword1}
                                                    edge="end"
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>

                           </div>
                            <div className="forget_content">
                                <FormControl
                                    variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={this.state.showPassword2 ? 'text' : 'password'}
                                        value={this.state.password2} name="password2"
                                        onChange={this.handleChange.bind(this, "password2")}
                                        className="reset-password"
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword2}
                                                    onMouseDown={this.handleMouseDownPassword2}
                                                    edge="end"
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    />
                                </FormControl>


                            </div>
                            <div className="forget_content" >
                                <Button id="reset_button" variant="filled"
                                    onClick={this.resetPassword}>
                                       <div className="buttonText"> Reset Password</div>
                                        </Button>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
                <footer className='app1_footer'>
                <div className='admin_footer'>
                    <p> © Bug Busters Store.All Rights Reserved.</p>
                </div>
                </footer>
           
            </div>
        );
    }
}