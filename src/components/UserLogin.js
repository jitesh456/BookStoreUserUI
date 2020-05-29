import React, { Component } from 'react';
import '../css/UserLogin.css';
import loginimage from '../assets/images/Login.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import {Tab,Tabs,TabList,TabPanel} from 'react-tabs';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import booklogo from '../booklogo.png';
import { purple } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#B0002A',
      
      },
    },
  });
export default class UserLogin extends Component {
    constructor(props){
        super(props);
        this.state={
            password:'',
            showpassword:false,
            tabValue:'',
            email:'',
            nameError: '',
            emailError: '',
            mobileError: '',
            passwordError: '',
            loginChecked:true,
            signupChecked:false,
            validateform: false
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleClickShowPassword=this.handleClickShowPassword.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleMouseDownPassword=this.handleMouseDownPassword.bind(this);
    }

    validate = (type) => {

      var mobilePattern=/[7-9]{1}[0-9]{9}$/;
      var namePAttern = /[A-Z]{1}[a-zA-Z]{2,}$/;
      var name = /[a-zA-Z]{1,}$/;
      var number = /[0-9]{1,}$/;
      var emailPattern=/^[a-zA-Z]{3,}([-|+|.|_]?[a-zA-Z0-9]+)?[@]{1}[A-Za-z0-9]+[.]{1}[a-zA-Z]{2,4}([.]{1}[a-zA-Z]+)?$/;
       var passwordPattern =  /[a-zA-Z0-9]{1,}$/;
      let nameError = '';
      let emailError = '';
      let mobileError = ''; let passwordError = '';

      switch (type) {

          case 'email':
              if (!emailPattern.test(this.state.email)) {
                  emailError = "Enter valid email (eg. example@gmail.com)";
                }
                if (emailPattern.test(this.state.email)) {
                    emailError = "";
                  }
                break;
          case 'fullName':
              if (number.test(this.state.fullName)) {
                  nameError=" Only letters allowed";
                }
                if (this.state.fullName.length<3 && this.state.fullName.length>1) {
                    nameError=" Min 3 characters";
                  }
                if( this.state.fullName.slice(0,1)===" ")
                {
                    nameError =" Name should not start with space";
                }
                if(this.state.fullName.slice(0,1)!==this.state.fullName.slice(0,1).toUpperCase())
                {
                    nameError ="First letter must be capital";
                }
                if (namePAttern.test(this.state.name)) {
                    nameError="";
                  }
                break;
          case 'password':
              if (this.state.password.length<8 && this.state.password.length>1) {
                  passwordError=" Min 8 characters";
                }
              if (!passwordPattern.test(this.state.password)) {
                  passwordError = "Enter proper password";
              }
              // if (passwordPattern.test(this.state.password)) {
              //     passwordError="";
              //   }
              break;
          case 'mobileNumber':
             
          if (this.state.mobileNumber==='0' && this.state.mobileNumber.length===1) {
              mobileError = " Number should not start with zero";
            }
            if (this.state.mobileNumber.slice(0,1)<7) {
              mobileError = " Number should start with 7,8 or 9";
            }else{
              if (this.state.mobileNumber.length<10 && this.state.mobileNumber.length>0) {
                  mobileError = " Number must be of 10 digits";
                }
            }
            if (this.state.mobileNumber.length>9) {
              mobileError = " Number must be of 10 digits";
            }    
          if (name.test(this.state.mobileNumber) && this.state.mobileNumber.length>0) {
            mobileError = " Only number allowed";
          }
          if (this.state.mobileNumber===" " && this.state.mobileNumber.length===1) {
              mobileError = " Number should not start with space";
            }
            if (mobilePattern.test(this.state.mobileNumber) && this.state.mobileNumber.length===10) {
              mobileError = "";
            }
          break;
          default:
              break;
      }
        
      if (nameError || emailError || mobileError || passwordError) {
        this.setState({
            nameError: nameError,
            emailError: emailError,
            mobileError: mobileError,
            passwordError: passwordError,
        })
        return false;
    }
    return true;
}

      handleChange(field,event) {
        this.setState({ [event.target.name]: event.target.value }
          , () => this.validate(field));
    
        this.setState({
          emailError: '',
          nameError:'',
          mobileError:'',
          passwordError:'',
          validateform:false
        });
      }
    
    handleClickShowPassword = () => {
        this.setState({showPassword: !this.state.showPassword });
      };
    
    handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
      handleTabSelection=({target})=>{
        if([target.name]=="login"){
            this.setState({loginChecked:true,signupChecked:false})
        }
        if([target.name]=="signup"){
            this.setState({loginChecked:false,signupChecked:true})
        }
    }
      componentDidMount(){
          this.setState({
            emailError: '',
            validateform: false
          });
      }

      handleSubmit(event){
        event.preventDefault();
        this.validate("name");
      }

      handleTabSelection=({target})=>{
        if([target.name]=="login"){
            this.setState({loginChecked:true,signupChecked:false})
        }
        if([target.name]=="signup"){ 
            this.setState({loginChecked:false,signupChecked:true})
        }
    }

    render(){
        const displayData=(
            <Tabs defaultIndex={0} onSelect={index=>console.log(index)}>
                <TabList className="tablist" style={{marginTop:"5%"}}>
                    <Tab style={{marginRight: "20%"}}><input id="tab-1" type="radio" name="login" className="sign-in" checked={this.state.loginChecked} onClick={this.handleTabSelection} /><label htmlFor="tab-1" className="tab1">Login</label></Tab>
                    <Tab><input id="tab-2" type="radio" name="signup" className="sign-up" checked={this.state.signupChecked} onClick={this.handleTabSelection}/><label htmlFor="tab-2" className="tab2">SignUp</label></Tab>
                </TabList>
                <TabPanel className="tabpanel-content">
                <div className="login-field-container">
                        <div className="login-fields">
                        <div className="div_content">
                            <TextField
                                label="Email id"
                                id="outlined-start-adornment"
                                variant="outlined"
                                className="info"          
                                style={{width:"100%"}}
                                color="secondary"
                                name="email"
                                onChange={this.handleChange.bind(this,'email')}                      
                                disabled={this.props.disableform}
                                required
                            />
                            <p
                                style={{
                                color: "red",
                                fontSize: "12px",
                                marginTop: "3%",
                                marginBottom: "-3em",
                                
                            }}
                            >
                                {this.state.emailError}
                            </p>
                            </div>
                            <div style={{height:"35px"}}></div>
                            <FormControl style={{width:"100%"}}>
                            <div className="div_content">
                            <InputLabel htmlFor="outlined-adornment-password" color="secondary" variant="outlined">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={this.state.showPassword ? 'text' : 'password'}
                                value={this.state.password}
                                color="secondary"
                                name="password"
                                style={{width:"100%"}}
                                onChange={this.handleChange.bind(this,'password')}
                                required
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                        {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }   
                                labelWidth={70}
                            />
                            <p
                                style={{
                                color: "red",
                                fontSize: "12px",
                                marginTop: "1%",
                                marginBottom: "-3em",
                                
                            }}
                            >{this.state.passwordError}
                            </p>
                            </div>
                            </FormControl>
                            
                        
                        <div className="foot-lnk">
                            <a href="#forgot">Forgot Password?</a>
                        </div>
                        <Button  type="submit" id="login-button" variant="contained">Login</Button>
                        </div>
                        
                    </div>
                </TabPanel>
                <TabPanel className="tabpanel-content">
                <div className="signup-field-container">
                        <div className="login-fields">
                            <div className="div_content">
                                <TextField
                                    label="Full Name"
                                    id="outlined-start-adornment"
                                    variant="outlined"
                                    className="info"
                                    style={{ width: "100%" }}
                                    color="secondary"
                                    name="fullName"
                                    onChange={this.handleChange.bind(this, 'fullName')}
                                    disabled={this.props.disableform}
                                    required
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",

                                    }}
                                >{this.state.nameError}
                                </p>
                                
                            </div>
                            <div style={{ height: "25px" }}></div>
                            <div className="div_content">
                                <TextField
                                    label="Email id"
                                    id="outlined-start-adornment"
                                    variant="outlined"
                                    className="info"
                                    style={{ width: "100%" }}
                                    color="secondary"
                                    name="email"
                                    onChange={this.handleChange.bind(this, 'email')}
                                    disabled={this.props.disableform}
                                    required
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",

                                    }}
                                >{this.state.emailError}
                                </p>
                               
                            </div>
                            
                            <div style={{ height: "25px" }}></div>
                            <div className="div_content">
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel htmlFor="outlined-adornment-password" color="secondary" variant="outlined">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={this.state.showPassword ? 'text' : 'password'}
                                        value={this.state.password}
                                        color="secondary"
                                        name="password"
                                        style={{ width: "100%"}}
                                        onChange={this.handleChange.bind(this, 'password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={this.handleClickShowPassword}
                                                    onMouseDown={this.handleMouseDownPassword}
                                                >
                                                    {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        labelWidth={70}
                                    /> 
                                    <p
                                        style={{
                                            color: "red",
                                            fontSize: "12px",
                                            marginTop: "1%",
                                            marginBottom: "-3em",

                                        }}
                                    >{this.state.passwordError}
                                    </p>

                                </FormControl>
                               
                            </div>
                            <div style={{ height: "25px" }}></div>
                            <div className="div_content">
                                <TextField
                                    label="Mobile Number"
                                    id="outlined-start-adornment"
                                    variant="outlined"
                                    className="info"
                                    style={{ width: "100%" }}
                                    color="secondary"
                                    name="mobileNumber"
                                    onChange={this.handleChange.bind(this, 'mobileNumber')}
                                    disabled={this.props.disableform}
                                    required
                                />
                                <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",

                                    }}
                                >{this.state.mobileError}
                                </p>  
                            </div>
                            <div style={{ height: "15px" }}></div>
                            <Button type="submit" id="login-button" variant="contained">Signup</Button>
                        </div>

                    </div>
                </TabPanel>
            </Tabs>
        );
        return(
            <div className="main-style">
                
            <div className="page">
            <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>  
                    </div >
                </header>
                <div className="main-container">
                    <img src={loginimage} alt="asd" className="login-image"/>
                    <h3 style={{marginLeft:'14%'}}>Bug Busters Store</h3>
                </div>
                <div className="login-container">
                <ThemeProvider theme={theme}>
                    {displayData}
                    </ThemeProvider>
                </div>
                <footer className='app_footer'>
                        <div className='admin_footer'>
                            <p> © Bug Busters Store.All Rights Reserved.</p>
                        </div>
                    </footer>
            </div>
            </div>
        );
    }
}