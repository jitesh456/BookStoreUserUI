import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import TextField from '@material-ui/core/TextField';

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
        var namePattern = /[A-Z]{1}[a-zA-Z]{2,}$/;
        var name = /[a-zA-Z]{1,}$/;
        var number = /[0-9]{1,}$/;
        var pincodePattern=/^[0-9]{6}$|^[0-9]{3}\\s{1}[0-9]{3}$/;
        var cityPattern=/[A-Z][a-z]{2,}$/;
        var localityPattern=/[A-Za-z0-9]{2,}$/
        var emailPattern=/^[a-zA-Z]{3,}([-|+|.|_]?[a-zA-Z0-9]+)?[@]{1}[A-Za-z0-9]+[.]{1}[a-zA-Z]{2,4}([.]{1}[a-zA-Z]+)?$/;

        let nameError = '';
        let phoneNumberError = '';
        let pincodeError = '';
        let cityError = '';
        let localityError='';
        let countryError='';
        let emailError = '';
        switch (type) {
    
          case 'name':
            if (number.test(this.state.name)) {
              nameError=nameError.concat(" Only letters allowed");
            }
            if (this.state.name.length<3 && this.state.name.length>1) {
                nameError=nameError.concat(" Min 3 characters");
              }
            if(this.state.name.length===1 && this.state.name===" ")
            {
                nameError =nameError.concat(" Name should not start with space");
            }
            if(this.state.name.length===1 && this.state.name!==this.state.name.toUpperCase())
            {
                nameError =nameError.concat(" First letter must be capital");
            }
            if (namePattern.test(this.state.name)) {
                nameError="";
              }
            break;
          case 'pincode':
            if (this.state.pincode.length===1 && this.state.pincode===" " ) {
                pincodeError = " Pincode should not start with space";
            }
            if (this.state.pincode.length===1 && this.state.pincode==='0' ) {
                pincodeError = " Pincode should not start with zero";
              }
            if (!pincodePattern.test(this.state.pincode) && this.state.pincode.length>1) {
              pincodeError = " Pincode must be of 6 digits";
            }
            if (pincodePattern.test(this.state.pincode)) {
                pincodeError = "";
              }
            break;
          case 'phoneNumber':
            
              if (this.state.phoneNumber==='0' && this.state.phoneNumber.length===1) {
                phoneNumberError = " Number should not start with zero";
              }
              if (this.state.phoneNumber<7 && this.state.phoneNumber.length>=1) {
                phoneNumberError = " Number should start with 7,8 or 9";
              }else{
                if (this.state.phoneNumber.length<10 && this.state.phoneNumber.length>0) {
                    phoneNumberError = " Invalid number";
                  }
              }
              if (this.state.phoneNumber.length>10) {
                phoneNumberError = " Number must be of 10 digits";
              }    
            if (name.test(this.state.phoneNumber) && this.state.phoneNumber.length>0) {
              phoneNumberError = " Only number allowed";
            }
            if (this.state.phoneNumber===" " && this.state.phoneNumber.length===1) {
                phoneNumberError = " Number should not start with space";
              }
              if (phonePattern.test(this.state.phoneNumber) && this.state.phoneNumber.length>0) {
                phoneNumberError = "";
              }
            break;
          case 'city':
            if (number.test(this.state.city)) {
                cityError=" Only letters allowed";
              }  
              if (this.state.city===" " && this.state.city.length===1) {
                cityError = "City name should not start with space";
              }
              if (!cityPattern.test(this.state.city) && this.state.city.length>1) {
              cityError = "Enter valid city name";
            }
            if (cityPattern.test(this.state.city)) {
                cityError = "";
              }
            break;
          case 'emailId':
            if (!emailPattern.test(this.state.emailId)) {
              emailError = "Enter valid email";
            }
            if (emailPattern.test(this.state.emailId)) {
                emailError = "";
              }
            break;

         case 'locality':
            if (this.state.locality===" " && this.state.city.length===1) {
                localityError = "Locality name should not start with space";
            }
            if (!localityPattern.test(this.state.locality) && this.state.locality.length>1) {
                localityError = "Enter valid locality name";
            }
            if (localityPattern.test(this.state.locality)) {
                localityError = "";
            }
            break;
        case 'country':
            if (!namePattern.test(this.state.country) && this.state.country.length>1) {
                countryError = "Enter valid country name";
                }
            if (name.test(this.state.country)) {
                countryError = "";
              }
            break;
          default:
            break;
        }
    
    
        if (nameError || phoneNumberError || pincodeError || cityError || emailError || localityError || countryError) {
          this.setState({
            nameError: nameError,
            phoneNumberError: phoneNumberError,
            pincodeError: pincodeError,
            cityError: cityError,
            emailError: emailError,
            localityError:localityError,
            countryError:countryError
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
                    <div style={{width:"40%",height:"0px"}}>
                    <TextField
                        label="Name"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"          
                        style={{width:"100%"}}
                        color="secondary"
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
                    <div style={{width:"35px"}}></div>
                    <div style={{width:"40%",height:"80px"}}>
                    <TextField
                        label="Phone Number"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        color="secondary"
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
                    <div style={{width:"40%",height:"40px"}}>
                    <TextField
                        label="Pincode"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        color="secondary"
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
                    <div style={{width:"35px"}}></div>
                    <div style={{width:"40%",height:"40px"}}>
                    <TextField
                        label="Locality"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        color="secondary"
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
                    <div style={{width:"40%",height:"40px"}}>
                    <TextField
                        label="City"
                        id="outlined-start-adornment"
                        variant="outlined"
                        color="secondary"
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
                    <div style={{width:"35px"}}></div>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Country"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        color="secondary"
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
                        color="secondary"
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
                    <div style={{width:"35px"}}></div>
                    <div style={{width:"40%",height:"80px"}}>
                    <TextField
                        label="Email"
                        id="outlined-start-adornment"
                        variant="outlined"
                        color="secondary"
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
                <div style={{height:"30px"}}></div>
                
                <div style={{width:"800px",display:"flex",justifyContent:"flex-end",paddingBottom:"2%",marginRight:"5%"}}>
                    <div style={{width:"800px"}}>
                    <FormControl component="fieldset">
                        <FormLabel  color="secondary" component="legend">Type</FormLabel>
                        <RadioGroup   row aria-label="position" name="position" defaultValue="home">
                            <FormControlLabel value="home"
                            control={<Radio color="secondary" />}
                            label="Home"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="work"
                            control={<Radio color="secondary" />}
                            label="Work"
                            labelPlacement="end"
                            />
                            <FormControlLabel
                            value="other"
                            control={<Radio color="secondary" />}
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