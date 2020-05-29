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
        const data={
            body:"Thank you for shopping with us. We'll let you know once your item(s) are shipped. Your estimated delivery date 27 May.",
            recipientAddress:JSON.parse(localStorage.getItem("mail")),
            subject:"Order Confirmation "         
        };

        Service.sendMail(data).then((response)=>{
            console.log(response);
            
        }).catch((error)=>{
        console.log(error)
        });

        this.props.cartItem.map(item=>{
            const bookdata={
                quantity:item.maxquantity-item.quantity,
                isbn:item.isbn
            }
            Service.updateQuantity(bookdata);    

        });
        localStorage.clear();
        
    }
    

    render(){
        let calPrice=0;
        let book=this.props.cartItem.map(item=>{
            calPrice+=item.price*item.quantity;
            return (
            <div className="cart-item">
                <div className="cart-item-content">
                    <div className="shoppingcart_image">                        
                            <img src={item.bookcover} alt="" className="shopped_image"/>
                    </div>
                    <div className="cart-item-content-details">

                        <span className="shopped_book_name">{item.name}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_author">{item.authorname}</span>
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
                    <p style={{paddingLeft:"3%",fontSize:"17px"}}><b>Total Price: &nbsp;&nbsp;Rs.&nbsp; {calPrice}</b> </p>
                    <Button style={{background:"maroon",color:"white",padding:"10px 30px"}} variant="filled"
                    onClick={()=>{history.push('/ordersuccessful');this.handleConfirmation()}}>Place Order</Button>
                    
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