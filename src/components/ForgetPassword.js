import React from 'react';
import booklogo from '../booklogo.png';
import AppBar from '@material-ui/core/AppBar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../css/ForgetPassword.css';
import Service from '../service/Service';
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary: {

            main: purple[500],
        },
        secondary: {
            main: '#B0002A',

        },
    },
});

export default class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            alertShow: false,
            alertResponse: "",
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (field, event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    clearFieldsData = () => {
        this.setState({
            email: "",
        });
    };

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

    forgetPassword = () => {
        console.log(this.state.email)
        let email = this.state.email;
        Service.forgetPassword(email).then(
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
                <div className="header">
                    <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'right' }} open={this.state.alertShow}
                        autoHideDuration={6000} onClose={this.closeAlertBox}>
                        <Alert onClose={this.closeAlertBox} severity={this.state.severity} variant={"filled"}>
                            {this.state.alertResponse}
                        </Alert>
                    </Snackbar>
                    <div style={{ height: "2%", marginTop: "2%" }}></div>
                    <div className="header_content1">
                        <h2>Forget Your Password?</h2>
                    </div>
                </div>
                <div className="password1">
                    <div className="forget_password">
                        <div className="forget_message forget_content">
                            <span className="Email-message">Enter your email address and we will send you a link to reset password </span>
                        </div>
                        <div className="forget_content">
                            <ThemeProvider>
                                <TextField id="outlined-basic" color="secondary" label="Email" variant="outlined"
                                    name="email"
                                    onChange={this.handleChange.bind(this, 'email')}
                                    style={{ width: "100%" }} />
                            </ThemeProvider>
                        </div>
                        <div className="forget_content" >
                            <Button id="forget_button" variant="filled"
                                onClick={this.forgetPassword}>Send Email</Button>
                        </div>
                    </div>
                    <div className="create_account">
                        <a href="/user/login" id="anchor">CREATE ACCOUNT</a>
                    </div>
                </div>
                <footer className='app_footer2'>
                    <div className='admin_footer'>
                        <p> © Bug Busters Store.All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}