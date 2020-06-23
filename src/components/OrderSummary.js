import React from 'react';
import Button from '@material-ui/core/Button';
import history from "./history";
import Service from '../service/Service';

export default class OrderSummary extends React.Component{
    constructor(props){
        super(props);
        this.handleConfirmation=this.handleConfirmation.bind(this);
        this.state={
            totalPrice:0,
        }
    }
    
    handleConfirmation=(e)=>{
        
        Service.placeOrder().then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
        
    }
    

    render(){
        let calPrice=0;
        let book=this.props.cartItem.map(item=>{
            calPrice+=item.price*item.quantity;
            return (
            <div className="cart-item">
                <div className="order-item-content">
                    <div className="shoppingcart_image">                        
                            <img src={`http://localhost:8090/admin/downloadfile/${item.bookCover}`} alt="" className="shopped_image"/>
                    </div>
                    <div className="order1-item-content-details">

                        <span className="shopped_book_name">{item.name}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_author">{item.authorName}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_price">Rs. {item.price*item.quantity}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="">QTY: {item.quantity}</span>
                    </div>
                   
                </div>
            </div>
            );
        });
       
        let im=[]
        if(this.props.show)
        {
            im=
            <div>
                <div className="order-summary">
                    {book}
                </div>
               
                <div style={{height:"auto",display:"flex",justifyContent:"space-between",paddingRight:"3%",paddingBottom:"2%"}}>
                    <p className="totalPrice"><b>Total Price: &nbsp;Rs. {calPrice}</b> </p>
                    <Button className= "buttonName"  style={{background:"maroon",color:"white",padding:"10px 30px",marginTop:"13px", height:"42px"}} variant="filled"
                    onClick={()=>{history.push('/order/successful');this.handleConfirmation()}}>Place Order</Button>  
                </div>
            </div>
        }else{
            im=<div></div>
        }
        return(
            im
        );

    }
}