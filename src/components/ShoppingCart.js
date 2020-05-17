import React from 'react';
import image0 from '../booklogo.png';
import '../css/Main.css';
import Button from '@material-ui/core/Button';
import booklogo from '../booklogo.png';
import Customer from './Customer';
import OrderSummary from './OrderSummary';
import Paper from '@material-ui/core/Paper';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';

export default class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            customer:false,
            customersummary:false
        }
        this.handleCustomer=this.handleCustomer.bind(this);
        this.handleCustomerSummary=this.handleCustomerSummary.bind(this);
    }

    handleCustomer=(e)=>{
        this.setState({
            customer:true,
        })
    }

    handleCustomerSummary=(e)=>{
        this.setState({
            customersummary:true,
        })
    }

    render(){
        const   im=<div className="shopping_cart">
            <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">OnlineBookStore</span>  
                    </div >
                    <div className="search">
                    <div className="searchIcon">
                    <SearchIcon/>
                    </div>
                    <InputBase
                        placeholder=" Search"
                        onChange={this.handleTextChange}
                    />
                  </div>
                </header>
                <div className="cart">
            <Paper elevation={30} className="shoppingcart_details">
                <div className="shoppingcart_image">
                    <img src={image0} alt="" className="shopped_image"/>
                </div>
                <div className="add_ons">

                </div>
                <div className="shopped_details">
                    <p>BookName</p>
                    <p>AuthorName</p>
                    <p>Price</p>
                </div>
                <div className="customer_button">
                    <Button color="primary" variant="contained" 
                    onClick={this.handleCustomer}>continue</Button>
                </div>
            </Paper>
            <div style={{height:"1%"}}></div>
            
            <div style={{width:"100%",height:"auto"}}>
                <Paper elevation={20} className="customer_detail">
                    <div className="customer_header">
                        <h3>Customer Details</h3>
                    </div>
                    <div className="customer_info">
                        <div className="customer_info_detail">
                            <Customer show={this.state.customer} onClick={this.handleCustomerSummary}/>
                        </div>
                    </div>
                </Paper>
            </div>
            <div style={{width:"100%",height:"auto"}}>
                <Paper elevation={20} className="customer_detail">
                    <div className="customer_header">
                        <h3>Order Summary</h3>
                    </div>
                    <div className="customer_info">
                        <div className="customer_info_detail">
                            <OrderSummary show={this.state.customersummary}/>
                        </div>
                    </div>
                </Paper>
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