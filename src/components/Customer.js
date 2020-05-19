import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import "../css/cartstyle.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';



export default class Customer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            nameError: "",
            phoneNumber: "",
            phoneNumberError: "",
            pincode: "",
            pincodeError: "",
            locality: "",
            city: "",
            country: "",
            address:"",
            emailId: "",
            emailError: "",
            cityError: "",
            disableForm: false,
            ordersummarybutton:'block'
        }

        this.handleChange=this.handleChange.bind(this);

    }

    handleForm(){
        this.setState({
            disableForm:!this.state.disableForm,
            ordersummarybutton:'none'
        })
    }

    validate = (type) => {


        var phonePattern=/[7-9]{1}[0-9]{9}$/;
        var namePAttern = /[A-Z]{1}[a-zA-Z]{2,}$/;
        var pincodePattern=/^[0-9]{6}$|^[0-9]{3}\\s{1}[0-9]{3}$/;
        var cityPattern=/[A-Z][a-z]{2,}$/;
        var emailPattern=/^[a-zA-Z]{3,}([-|+|.|_]?[a-zA-Z0-9]+)?[@]{1}[A-Za-z0-9]+[.]{1}[a-zA-Z]{2,4}([.]{1}[a-zA-Z]+)?$/;

        let nameError = '';
        let phoneNumberError = '';
        let pincodeError = '';
        let cityError = '';
        let emailError = '';
        switch (type) {
    
          case 'name':
            if (!namePAttern.test(this.state.name)) {
              nameError = "Please Enter proper Name";
            }
            break;
          case 'pincode':
            if (!pincodePattern.test(this.state.pincode)) {
              pincodeError = "Please enter proper pincode";
            }
            break;
          case 'phoneNumber':
            if (!phonePattern.test(this.state.phoneNumber)) {
              phoneNumberError = "Invalid Phone Number";
            }
            break;
          case 'city':
            if (!cityPattern.test(this.state.city)) {
              cityError = "Enter Proper City Name";
            }
            break;
          case 'emailId':
            if (!emailPattern.test(this.state.emailId)) {
              emailError = "Please Enter Proper Email"
            }
            break;
          default:
            break;
        }
    
    
        if (nameError || phoneNumberError || pincodeError || cityError || emailError) {
          this.setState({
            nameError: nameError,
            phoneNumberError: phoneNumberError,
            pincodeError: pincodeError,
            cityError: cityError,
            emailError: emailError,
          })
          return false;
        }
        return true;
    
      }
    
    handleChange(field,event) {
        this.setState({ [event.target.name]: event.target.value }
          , () => this.validate(field));
    
        this.setState({
          nameError: '',
          phoneNumberError: '',
          pincodeError: '',
          cityError: '', emailError: ''
        });
      }
    
    
    componentDidMount() {
        this.setState({
            nameError: '',
            phoneNumberError: '',
            pincodeError: '',
            cityError: '', emailError: ''
          });
    }

    render() {
        let im=[]
        if(this.props.show) {                 
        im=<div style={{height:"20%",width:"100%",paddingLeft:"2%"}}>
                <div>
                <div style={{display:"flex"}}>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Name"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"          
                        style={{width:"100%"}}
                        name="name"                      
                        onChange={this.handleChange.bind(this, 'name')}
                        disabled={this.props.disableform}
                        />
                        <p
                            style={{
                                color: "red",
                                fontSize: "12px",
                                marginTop: "1%",
                                // marginBottom: "-3em",
                                paddingLeft: "3em"
                            }}
                        >
                            {this.state.nameError}
                        </p>
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Phone Number"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        name="phoneNumber"
                        style={{width:"100%"}}
                        onChange={this.handleChange.bind(this, 'phoneNumber')}
                        disabled={this.props.disableform}
                    />
                    <p
                                style={{
                                    color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                    {this.state.phoneNumberError}
                                </p>
                    </div>
                </div>
                <div style={{height:"10px"}}></div>
                <div style={{display:"flex"}}>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Pincode"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        name="pincode"  
                        style={{width:"100%"}}                              
                        onChange={this.handleChange.bind(this, 'pincode')}
                        disabled={this.props.disableform}
                    />
                    <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                    {this.state.pincodeError}
                                </p>
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Locality"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        name="locality"
                        style={{width:"100%"}}
                        onChange={this.handleChange.bind(this, 'locality')}
                        disabled={this.props.disableform}
                    />
                    <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                </p>
                    </div>
                </div>
                <div style={{height:"55px"}}></div>
                <div style={{display:"flex"}}>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="City"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info" 
                        name="city"
                        style={{width:"100%"}}                               
                        onChange={this.handleChange.bind(this, 'city')}
                                disabled={this.props.disableform}
                        />
                        <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                    {this.state.cityError}
                                </p>
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Country"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        name="country"
                        style={{width:"100%"}}
                        onChange={this.handleChange.bind(this, 'country')}
                        disabled={this.props.disableform}
                    />
                    <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                </p>
                    </div>
                </div>
                <div style={{height:"55px"}}></div>
                <div style={{display:"flex"}}>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Address"
                        id="outlined-start-adornment"
                        variant="outlined"
                        style={{borderColor:"maroon"}}
                        className="info" 
                        name="address"
                        style={{width:"100%"}}
                        onChange={this.handleChange.bind(this, 'address')}
                        disabled={this.props.disableform}
                        />
                        <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                </p>
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Email"
                        id="outlined-start-adornment"
                        variant="outlined"
                        style={{width:"100%",borderColor:"maroon"}}
                        className="info"
                        name="emailId" 
                        onChange={this.handleChange.bind(this, 'emailId')}
                        disabled={this.props.disableform}
                        />
                        <p
                                    style={{
                                        color: "red",
                                        fontSize: "12px",
                                        marginTop: "1%",
                                        marginBottom: "-3em",
                                        paddingLeft: "3em"
                                    }}
                                >
                                    {this.state.emailError}
                                </p>
                    </div>
                </div>
                <div style={{height:"55px"}}></div>
                
                <div style={{display:"flex",justifyContent:"flex-end",paddingBottom:"2%",marginRight:"5%"}}>
                    <div style={{width:"87%"}}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Type</FormLabel>
                        <RadioGroup row aria-label="position" name="position" defaultValue="home">
                            <FormControlLabel value="home"
                            control={<Radio color="primary" />}
                            label="Home"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="work"
                            control={<Radio color="primary" />}
                            label="Work"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="other"
                            control={<Radio color="primary" />}
                            label="Other"
                            labelPlacement="end"
                            />
                        </RadioGroup>
                    </FormControl>
                    </div>
                    <div>
                        <Button style={{display:this.props.ordersummary,background:"maroon",color:"white"}} variant="filled"
                        onClick={()=>{this.props.onClick();}}>Continue</Button>
                    </div>
                </div>
                </div>
            </div>
        }else{
            im=<div></div>
        }
        console.log("Customer"+im);
    return ( im );
    }
}