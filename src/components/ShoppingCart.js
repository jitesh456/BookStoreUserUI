import React from 'react';
import Button from '@material-ui/core/Button';
import booklogo from '../booklogo.png';
import Customer from './Customer';
import OrderSummary from './OrderSummary';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Service from '../service/Service';

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
            itemquantity:1,
            customer:false,
            customersummary:false,
            placebutton:'block',
            editbutton:'none',
            disableform:false,
            ordersummary:'block',
            cartItem:[]       
        }

        this.handleCustomer=this.handleCustomer.bind(this);
        this.handleEditCustomer=this.handleEditCustomer.bind(this);
        this.handleCustomerSummary=this.handleCustomerSummary.bind(this);
        this.handlePlus=this.handlePlus.bind(this);
        this.handleMinus=this.handleMinus.bind(this);
        this.handleRemove=this.handleRemove.bind(this);
    }

    handleCustomer=(e)=>{
        this.setState({
            customer:true,
            placebutton:'none'
        })
    }
    handleRemove(object){
        let items=this.state.cartItem;
    
        Service.removeBook(object.id).then((response)=>{
            console.log(response.data);
            this.getCartData();

        }).catch((error)=>{
            console.log(error);
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

    componentDidMount()
    {
        this.getCartData();
    }

    getCartData(){
        Service.getCartBook().then((response) => {
            console.log(response);
            this.setState({
                cartItem:response.data.body
            })
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
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

    handlePlus=(book)=>{
        let items=this.state.cartItem;
        let limit=5;
        if(book.quantity<book.maxquantity && book.quantity<5 )
        {
            for(var i=0;i<items.length;i++){
                if(items[i].isbn===book.isbn && book.quantity>0){
                    items[i].quantity+=1;
                }
            }
            localStorage.setItem("bookData",JSON.stringify(items));
            this.setState({
                cartItem:items,
            })
           
        }     
    }

    handleMinus=(book)=>{
        let items=this.state.cartItem;
        let number=localStorage.getItem("count");

        if(book.quantity>1)
        {
            for(var i=0;i<items.length;i++){
            if(items[i].isbn===book.isbn){
                    items[i].quantity-=1;
                }
            }

        }
        localStorage.setItem("bookData",JSON.stringify(items));
        this.setState({
            cartItem:items,
        })
    }

    render(){
            let increase=[]
            let decrease=[]
            
                       
        let book=this.state.cartItem.map(item=>{
            if (item.quantity===1){
                increase=<AddCircleOutlineIcon onClick={()=>{this.handlePlus(item)}} style={{color:"maroon"}}/>
                decrease=<RemoveCircleOutlineIcon disabled={true} />
            }else{
                increase=<AddCircleOutlineIcon onClick={()=>{this.handlePlus(item)}} style={{color:"maroon"}}/>
                decrease=<RemoveCircleOutlineIcon onClick={()=>{this.handleMinus(item)}} style={{color:"maroon"}}/>
            }
            if(item.quantity>item.maxquantity-1){
                increase=<AddCircleOutlineIcon disabled={true}/>
            }
            return (
            <div className="cart-item">
                <div className="cart-item-content">
                    <div className="shoppingcart_image">
                        <img src={`http://localhost:8090/admin/downloadFile/${item.bookcover}`} alt="" className="shopped_image"/>
                    </div>
                    <div className="cart-item-content-details">
                        <span className="shopped_book_name">{item.name}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_author">{item.authorname}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_price">Rs.{item.price*item.quantity}</span>
                        <div className="shopped_item_quantity">   

                        <div style={{display:"flex",width:"100px"}}>           
                            {decrease}&nbsp;
                        <div style={{textAlign:"center",border:"1px solid silver",width:"28%",height:"25%"}}>
                            <label for="test" >{item.quantity}</label>
                        </div>&nbsp;
                            {increase}
                        </div>
                        <div>
                        </div>
                        <div>
                        </div>
                            <Button style={{padding:"8px",background:"maroon",color:"white" }} onClick={()=>{this.handleRemove(item)}}>Remove</Button>                        
                        </div>
                        
                    </div>
                   
                </div>
                
            </div>
            );
        });
    
        const   im=<div className="shopping_cart">

             <AppBar id="app-header">
                    
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <a href="/" style={{color:"white" ,textDecoration:"none"}}> <span className="admin">BB Store</span></a>  
                    </div >
                        
             </AppBar>

            <div className="cart_content">
            <div className="cart" >
                
                <div className="shoppingcart_details">
                    <span style={{fontSize:"18px",marginTop:"2%",marginLeft:"2.5%",marginBottom:"2%"}}><b>My Cart( {this.state.cartItem.length } )</b></span>
                    <div className="book_details">
                        {book}
                    </div>
                    <div className="customer_button">
                        <Button style={{display:this.state.placebutton,padding:"10px 30px",background:"maroon",color:"white"}} variant="contained" 
                                onClick={this.handleCustomer}>Continue</Button>
                </div>
                </div>
                <div style={{height:"25px"}}></div>
               
                <div style={{width:"100%",height:"auto"}}>
                <ThemeProvider theme={theme} >

                    < div color="secondary" className="customer_detail">
                        <div className="customer_header">
                            <div style={{fontSize:"15px",width:"87%",paddingBottom:"10px" ,paddingTop:"10px"}}>Customer Details</div>
                            <div><Button style={{margin:"5%",padding:"2px",display:this.state.editbutton,background:"maroon",color:"white"}} variant="contained" 
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
                    </div>
                    </ThemeProvider>
                </div>
                <div style={{height:"25px"}}></div>

                <div style={{width:"100%",height:"auto"}}>
                    <div className="customer_detail">
                        <div className="customer_header">
                            <span style={{fontSize:"15px",paddingBottom:"10px" ,paddingTop:"10px"}}>Order Summary</span>
                        </div>
                        <div className="customer_info">
                            <div className="customer_info_detail">
                                <OrderSummary show={this.state.customersummary}
                                cartItem={this.state.cartItem}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <footer className='app_footer'>
            <div className='admin_footer'>
                        <p> © Online Book Store.All Rights Reserved.</p>
                </div>
                </footer>
        </div>

        if(this.state.cartItem.length==0){
            return(
                <div className="shopping_cart">
                    <AppBar id="app-header">
                        <div className="admin_header">
                            <img src={booklogo} alt="asd" className="bk_image" />
                        <a href="/" style={{color:"white" ,textDecoration:"none"}}> <span className="admin">BB Store</span></a>  
                        </div >
                            
                    </AppBar>
                    <div className="cart_content">
                        <div className="cart" >
                            <h1> Please Add book Into Cart</h1>
                        </div>
                    </div>
                    <footer className='app_footer'>
                        <div className='admin_footer'>
                            <p> © Bug Busters Store.All Rights Reserved.</p>
                        </div>
                    </footer>
                </div>
            )
        }
        else
        {
            return(  im );
        }    
    }
    
}