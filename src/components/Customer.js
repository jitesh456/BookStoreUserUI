import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import TextField from '@material-ui/core/TextField';
import Paper from "@material-ui/core/Paper";
import Button from '@material-ui/core/Button';
import "../css/cartstyle.css";

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
        }
    }

    valid() {
        if (!this.state.name.match("[A-Z]{1}[a-zA-Z]")) {
            this.setState({nameError: "Invalid Name"});
            this.setState({name: " "});
            setTimeout(() => {
                this.setState({nameError: " "});
            }, 3000);

            return false;
        } else if (!this.state.phoneNumber.match("[7-9]{1}[0-9]{9}")) {
            this.setState({phoneNumberError: "Invalid Phone Number"});
            setTimeout(() => {
                this.setState({phoneNumberError: " "});
            }, 3000);
            return false;
        } else if (
            !this.state.pincode.match("^[0-9]{6}$|^[0-9]{3}\\s{1}[0-9]{3}$")
        ) {
            this.setState({pincodeError: "Invalid Pincode"});
            setTimeout(() => {
                this.setState({pincodeError: " "});
            }, 3000);
            return false;
        } else if (!this.state.city.match("[A-Z][a-z]{2,}")) {
            this.setState({cityError: "Invalid City Name"});
            setTimeout(() => {
                this.setState({cityError: " "});
            }, 3000);
            return false;
        } else if (!this.state.emailId.match("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$")) {
            this.setState({emailError: "Invalid City Name"});
            setTimeout(() => {
                this.setState({emailError: " "});
            }, 3000);
            return false;
        }
        return true;
    }
    
    handleChange(field,event) {
        this.setState({ [event.target.name]: event.target.value }
          , () => this.validate(field));
    
        // this.setState({
        //   isbnError: '',
        //   authorNameError: '',
        //   quantityError: '',
        //   priceError: '', fileError: '',
        //   bookDescrptionError: ''
        // });
      }
    
    
    componentDidMount() {
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
                        onChange={event => {
                        this.setState({name: event.target.value}, () => this.valid());
                        }}
                        name="name"
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
                        onChange={event => {                                    
                            this.setState({phoneNumber: event.target.value}, () => this.valid());
                        }}
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
                <div style={{height:"50px"}}></div>
                <div style={{display:"flex"}}>
                    <div style={{width:"40%"}}>
                    <TextField
                        label="Pincode"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        name="pincode"  
                        style={{width:"100%"}}                              
                        onChange={event => {
                        this.setState({pincode: event.target.value}, () => this.valid());
                        }}
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
                        onChange={event => {                                    
                            this.setState({locality: event.target.value}, () => this.valid());
                        }}
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
                                    {this.state.nameError}
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
                        onChange={event => {
                        this.setState({city: event.target.value}, () => this.valid());
                        }}
                                disabled={this.state.disableForm}
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
                        onChange={event => {                                    
                            this.setState({country: event.target.value}, () => this.valid());
                        }}
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
                                    {this.state.nameError}
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
                        onChange={event => {
                        this.setState({address: event.target.value}, () => this.valid());
                        }}
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
                                    {this.state.nameError}
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
                        onChange={event => {
                        this.setState({emailId: event.target.value}, () => this.valid());
                        }}
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
                    <div>
                        <Button style={{background:"maroon",color:"white"}} variant="filled"
                        onClick={this.props.onClick}>Continue</Button>
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