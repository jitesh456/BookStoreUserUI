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

    componentDidMount() {
    }

    

    render() {
        let im=[]
        if(this.props.show) {                 
        im=<div style={{height:"20%",width:"100%",paddingLeft:"2%"}}>
                <div>
                <div style={{display:"flex"}}>
                    <div>
                    <TextField
                        label="Name"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"                                
                        onChange={event => {
                        this.setState({name: event.target.value});
                        }}
                        />
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div>
                    <TextField
                        label="Phone Number"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        onChange={event => {                                    
                            this.setState({phoneNumber: event.target.value});
                        }}
                    />
                    </div>
                </div>
                <div style={{height:"10px"}}></div>
                <div style={{display:"flex"}}>
                    <div>
                    <TextField
                        label="Pincode"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"                                
                        onChange={event => {
                        this.setState({pincode: event.target.value});
                        }}
                    />
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div>
                    <TextField
                        label="Locality"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        onChange={event => {                                    
                            this.setState({locality: event.target.value});
                        }}
                    />
                    </div>
                </div>
                <div style={{height:"10px"}}></div>
                <div style={{display:"flex"}}>
                    <div>
                    <TextField
                        label="City"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"                                
                        onChange={event => {
                        this.setState({city: event.target.value});
                        }}
                                disabled={this.state.disableForm}
                        />
                    </div>
                    <div style={{width:"20px"}}></div>
                    <div>
                    <TextField
                        label="Country"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        onChange={event => {                                    
                            this.setState({country: event.target.value});
                        }}
                    />
                    </div>
                </div>
                <div style={{height:"10px"}}></div>
                <div style={{display:"flex"}}>
                    <div>
                    <TextField
                        label="Complete Address"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info" 
                        onChange={event => {
                        this.setState({address: event.target.value});
                        }}
                        />
                    </div>
                </div>
                <div style={{height:"10px"}}></div>
                <div style={{display:"flex",justifyContent:"flex-end",paddingBottom:"2%",marginRight:"5%"}}>
                    <div>
                        <Button style={{background:"blue",color:"white"}} variant="filled"
                        onClick={this.props.onClick}>Place Order</Button>
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