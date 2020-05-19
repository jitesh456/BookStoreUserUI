import React from 'react';

import Button from '@material-ui/core/Button';
import booklogo from '../booklogo.png';
import Customer from './Customer';
import OrderSummary from './OrderSummary';
import Card from '@material-ui/core/Card';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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

export default class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            itemquantity:0,
            customer:false,
            customersummary:false,
            placebutton:'block',
            editbutton:'none',
            disableform:false,
            ordersummary:'block'
        }

        this.handleCustomer=this.handleCustomer.bind(this);
        this.handleEditCustomer=this.handleEditCustomer.bind(this);
        this.handleCustomerSummary=this.handleCustomerSummary.bind(this);
        this.handlePlus=this.handlePlus.bind(this);
        this.handleMinus=this.handleMinus.bind(this);
    }

    handleCustomer=(e)=>{
        this.setState({
            customer:true,
            placebutton:'none'
        })
    }

    handleEditCustomer=(e)=>{
        this.setState({
            customersummary:false,
            editbutton:'none',
            disableform:false,
            ordersummary:'block'
        })
    }

    handleCustomerSummary=(e)=>{
        this.setState({
            customersummary:true,
            editbutton:'block',
            disableform:true,
            ordersummary:'none'
        })
    }

    handlePlus=(e)=>{
        this.setState({
            itemquantity:this.state.itemquantity+1
        })
        console.log(this.state.itemquantity);
    }

    handleMinus=(e)=>{
        this.setState({
            itemquantity:this.state.itemquantity-1
        })
        console.log(this.state.itemquantity);
    }

    render(){
        let increase=[]
        let decrease=[]
        if (this.state.itemquantity==0){
            increase=<AddCircleOutlineIcon onClick={this.handlePlus} style={{color:"maroon"}}/>
            decrease=<RemoveCircleOutlineIcon disabled={true} />
        }else{
            increase=<AddCircleOutlineIcon onClick={this.handlePlus} style={{color:"maroon"}}/>
            decrease=<RemoveCircleOutlineIcon onClick={this.handleMinus} style={{color:"maroon"}}/>
        }
        if(this.state.itemquantity>4){
            increase=<AddCircleOutlineIcon disabled={true}/>
        }
        const   im=<div className="shopping_cart">
            <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>  
                    </div >
                    <div className="search">
                    <div className="searchIcon" >
                    <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder=" Search"
                        disabled="true"
                        onChange={this.handleTextChange}
                    />
                  </div>
            </header>

            <div className="cart_content">
            <div className="cart" >
                <Card className="shoppingcart_details">
                    <div className="shoppingcart_image">
                        <div style={{width:"100%",display:"flex",justifyContent:"flex-start",fontWeight:"bold",height:"20%"}}>
                            <p>My Cart (  )</p>
                        </div>
                        <div style={{width:"100%",height:"80%",paddingTop:"10%"}}>
                            <img src='https://i.ibb.co/ZS5dTnb/Harry-Potter.jpg' alt="" className="shopped_image"/>
                        </div>
                    </div>
                    <div className="shopped_details">
                        <div style={{height:"60%",display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
                        <span className="shopped_book_name">Harry Potter</span>
                            <div style={{height:"5%"}}></div>
                            <span className="shopped_book_author">B.S God</span>
                            <div style={{height:"5%"}}></div>
                            <span className="shopped_book_price">RS. 150000</span>
                        </div>
                        <div className="shopped_item_quantity">               
                            {decrease}&nbsp;
                            <div style={{textAlign:"center",border:"1px solid silver",width:"10%",height:"25%"}}>
                                <label for="test" >{this.state.itemquantity}</label>
                            </div>&nbsp;
                            {increase}                          
                        </div>
                    </div>
                    <div className="customer_button">
                        <Button style={{display:this.state.placebutton,background:"maroon",color:"white"}} variant="contained" 
                        onClick={this.handleCustomer}>Place Order</Button>
                    </div>
                </Card>
                <div style={{height:"2%"}}></div>
            
                <div style={{width:"100%",height:"auto"}}>
                <ThemeProvider theme={theme} >

                    <Card color="secondary" className="customer_detail">
                        <div className="customer_header">
                            <div style={{width:"87%",height:"50px"}}>Customer Details</div>
                            <div><Button style={{margin:"5%",display:this.state.editbutton,background:"maroon",color:"white"}} variant="contained" 
                        onClick={this.handleEditCustomer}>Edit</Button></div>
                        </div>
                        <div className="customer_info">
                            <div className="customer_info_detail">
                                <Customer show={this.state.customer} 
                                ordersummary={this.state.ordersummary}
                                disableform={this.state.disableform}
                                onClick={this.handleCustomerSummary}/>
                            </div>
                        </div>
                    </Card>
                    </ThemeProvider>
                </div>
                <div style={{height:"2%"}}></div>

                <div style={{width:"100%",height:"auto"}}>
                    <Card className="customer_detail">
                        <div className="customer_header">
                            <span>Order Summary</span>
                        </div>
                        <div className="customer_info">
                            <div className="customer_info_detail">
                                <OrderSummary show={this.state.customersummary}/>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            </div>
            <footer className='app_footer'>
            <div className='admin_footer'>
                        <p> © Online Book Store.All Rights Reserved.</p>
                </div>
                </footer>
        </div>
        
        return( im );
    }
}