import React, { Component } from 'react';
// import '../css/BookCard.css';
// import '../css/Main.css';
// import '../css/Pagination.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import "../css/cartstyle.css";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Service from '../service/Service';

let nameError = '';
let phoneNumberError = '';
let pincodeError = '';
let cityError = '';
let localityError='';
let countryError='';


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
            cityError: "",
            validateform: false,
            ordersummarybutton:'block',
            customerDetail:[]

        }

        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.displayButton=this.displayButton.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this);

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
      var cityPattern=/[A-Z]{1}[A-Za-z]{2,}$/;
      var localityPattern=/^[A-Za-z0-9]{2,}$/;
     

      switch (type) {
  
        case 'name':
          if (number.test(this.state.name)) {
            nameError=" Only letters allowed";
          }
          if (this.state.name.length<3 && this.state.name.length>1) {
              nameError=" Min 3 characters";
            }
          if( this.state.name.slice(0,1)===" ")
          {
              nameError =" Name should not start with space";
          }
          if(this.state.name.slice(0,1)!==this.state.name.slice(0,1).toUpperCase())
          {
              nameError ="First letter must be capital";
          }
          if (namePattern.test(this.state.name)) {
              nameError="";
            }
          break;
        case 'pincode':
          if ( this.state.pincode.slice(0,1)===" " ) {
              pincodeError = " Pincode should not start with space";
          }
          else{
            if (!pincodePattern.test(this.state.pincode) && this.state.pincode.length>1) {
              pincodeError = " Pincode must be of 6 digits";
            }
          }
          if (this.state.pincode.length===1 && this.state.pincode==='0' ) {
              pincodeError = " Pincode should not start with zero";
            }
          
          if (pincodePattern.test(this.state.pincode)) {
              pincodeError = "";
            }
          break;
        case 'phoneNumber':
          
            if (this.state.phoneNumber==='0' && this.state.phoneNumber.length===1) {
              phoneNumberError = " Number should not start with zero";
            }
            if (this.state.phoneNumber.slice(0,1)<7) {
              phoneNumberError = " Number should start with 7,8 or 9";
            }else{
              if (this.state.phoneNumber.length<10 && this.state.phoneNumber.length>0) {
                  phoneNumberError = " Number must be of 10 digits";
                }
            }
            if (this.state.phoneNumber.length>9) {
              phoneNumberError = " Number must be of 10 digits";
            }    
          if (name.test(this.state.phoneNumber) && this.state.phoneNumber.length>0) {
            phoneNumberError = " Only number allowed";
          }
          if (this.state.phoneNumber===" " && this.state.phoneNumber.length===1) {
              phoneNumberError = " Number should not start with space";
            }
            if (phonePattern.test(this.state.phoneNumber) && this.state.phoneNumber.length===10) {
              phoneNumberError = "";
            }
          break;
        case 'city':
            if (number.test(this.state.city)) {
              cityError=" Only letters allowed";
            }  
            if (this.state.city.slice(0,1)===" ") {
              cityError = "City name should not start with space";
            }
            else
            {
              if (this.state.city.slice(0,1)===this.state.city.slice(0,1).toUpperCase()) {
                cityError = "First letter must be capital";
              }
  
            }
            if (!cityPattern.test(this.state.city) && this.state.city.length>1) {
            cityError = "Enter valid city name";
          }
          if (cityPattern.test(this.state.city)) {
              cityError = "";
            }
          break;

       case 'locality':
          if (this.state.locality===" " && this.state.localityError.length===1) {
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
              countryError = "Only Letter is Allowed";
              }
          if (name.test(this.state.country)) {
              countryError = "";
            }
          break;
        default:
          break;
      }
  
  
      if (nameError || phoneNumberError || pincodeError || cityError ||  localityError || countryError) {
        this.setState({
          nameError: nameError,
          phoneNumberError: phoneNumberError,
          pincodeError: pincodeError,
          cityError: cityError,
          localityError:localityError,
          countryError:countryError,
          validateform:false
        })
        return false;
      }else{
        this.setState({
          validateform:true
        })
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
        cityError: '', 
        countryError:'',
        localityError:'',
        validateform:false
      });
    }

    handleSubmit(event){
      localStorage.setItem("mail",JSON.stringify(this.state.emailId));
      const address={
        addressType :"Home",
        pincode: this.state.pincode,
        locality:this.state.locality,
        address :this.state.address,
        city :this.state.city,
        country :this.state.country
      }

      Service.addUserDetails(address).then((response)=>{
          console.log(response.data.body);
      }).catch((error)=>{
        console.log(error);
      });
      
    }
    
    displayButton(){
      if(this.state.validateform && this.state.name!=="" && this.state.phoneNumber!=="" && this.state.pincode!=="" && 
      this.state.locality!=="" && this.state.address!=="" && this.state.city!=="" && this.state.country!=="" ){
        return(
            <Button style={{display:this.props.ordersummary,background:"maroon",color:"white",padding:"10px 30px"}} variant="filled"
            onClick={()=>{ this.props.onClick();this.handleSubmit()}}>Continue</Button>
          )
      }
        else{
          return(
            <Button disabled="true" style={{display:this.props.ordersummary,background:"silver",color:"white",padding:"10px 30px"}} variant="filled"
            >Continue</Button>
            )
        }
      
    }
    
    componentDidMount() {
      this.setState({
        nameError: '',
        phoneNumberError: '',
        pincodeError: '',
        cityError: '', 
        countryError:'',
        localityError:'',
      });

      Service.getCustomerDetail().then((response)=>{
        console.log(response.data.body);
        
        this.setState({customerDetail:response.data.body,
          name:response.data.body.name,
          phoneNumber:response.data.body.number,
          validateform:false
          
        });
        
        if(response.data.body.userDetail.length>0)
        {
          this.setState({
            address:response.data.body.userDetail[0].address,
            locality:response.data.body.userDetail[0].locality,
            pincode:response.data.body.userDetail[0].pincode,
            city:response.data.body.userDetail[0].city,
            country:response.data.body.userDetail[0].country,
            validateform:true
          });
        }
        console.log(this.state.name);
          }).catch((error)=>{
                  console.log(error);
          });
        }

    render() {
        let im=[]
        if(this.props.show) {                 
        im=<div style={{paddingLeft:"2%",marginTop:"6px"}}>
              <div className="customerDetailesBox">
                  <div className="customer_content">
                      <div className="customer_sub_content" >
                        <TextField
                            label="Name"
                            id="outlined-start-adornment"
                            variant="outlined"
                            className="info"          
                            style={{width:"100%"}}
                            color="secondary"
                            name="name"      
                            value={this.state.name}                
                            onChange={this.handleChange.bind(this, 'name')}
                            disabled="true"
                            />
                            <p
                                style={{
                                    color: "red",
                                    fontSize: "12px",
                                    marginTop: "1%",
                                    marginBottom: "-3em",
                                    
                                }}
                            >
                              <div style={{ marginTop: "5px" }} > {this.state.nameError}</div>
                            </p>
                        </div>
                        
                        <div className="customer_sub_content">
                        <TextField
                            label="Phone Number"
                            value={this.state.phoneNumber}
                            id="outlined-start-adornment"
                            variant="outlined"
                            className="info"
                            color="secondary"
                            name="phoneNumber"
                            style={{width:"100%"}}
                            onChange={this.handleChange.bind(this, 'phoneNumber')}
                            disabled="true"
                        />
                        <p
                          style={{
                            color: "red",
                                fontSize: "12px",
                                marginTop: "1%",
                                marginBottom: "-3em",
                                
                            }}
                        >
                          <div style={{ marginTop: "5px" }} >{this.state.phoneNumberError}</div>
                        </p>
                        </div>
                  </div>
                  <div>

                  <div className="customer_content">
                    <div className="customer_sub_content">
                    <TextField
                        label="Pincode"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        color="secondary"
                        value={this.state.pincode}
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
                            
                        }}
                    >
                       <div style={{ marginTop: "5px" }} > {this.state.pincodeError} </div>
                    </p>
                    </div>
                    <div className="customer_sub_content">
                    <TextField
                        label="Locality"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        value={this.state.locality}
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
                          
                      }}
                  >      
                  <div style={{ marginTop: "5px" }} >{this.state.localityError}</div>
                  </p>
                  </div>
                </div>
                </div>
                <div >
                <div className="address">
                    <TextField
                        label="Address"
                        id="outlined-start-adornment"
                        variant="outlined"
                        style={{width:"100%"}}
                        value={this.state.address}
                        className="info" 
                        multiline
                        rows={2}
                        color="secondary"
                        name="address"
                        onChange={this.handleChange.bind(this, 'address')}
                        disabled={this.props.disableform}
                        />
                        <p
                            style={{
                              color: "red",
                              fontSize: "12px",
                              marginTop: "1%",
                              marginBottom: "-3em",
                              
                          }}
                      >
                      </p>
                    </div>
                </div>
                
                <div className="customer_content1" >
                    <div className="customer_sub_content">
                    <TextField
                        label="City"
                        id="outlined-start-adornment"
                        variant="outlined"
                        value={this.state.city}
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
                              
                          }}
                      >
                        <div style={{ marginTop: "5px" }} > {this.state.cityError} </div>
                      </p>
                    </div>
                    
                    <div className="customer_sub_content">
                    <TextField
                        label="Country"
                        id="outlined-start-adornment"
                        variant="outlined"
                        className="info"
                        value={this.state.country}
                        style={{width:"100%"}}
                        color="secondary"
                        name="country"  
                        onChange={this.handleChange.bind(this, 'country')}
                        disabled={this.props.disableform}
                    />
                    <p
                        style={{
                          color: "red",
                          fontSize: "12px",
                          marginTop: "1%",
                          marginBottom: "-3em",
                          
                      }}
                  >
                    <div style={{ marginTop: "5px" }} > {this.state.countryError} </div>
                  </p>
                    </div>
                </div>
                
                <div className="address_type">
                    <div className="address_type_content">
                    <FormControl component="fieldset"   disabled={this.props.disableform}>
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
                    <div className="customerButton">
                   {this.displayButton()}
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