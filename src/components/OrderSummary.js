import React from 'react';
import Button from '@material-ui/core/Button';

export default class OrderSummary extends React.Component{
    constructor(props){
        super(props);
        this.handleConfirmation=this.handleConfirmation.bind(this);
        this.state={
            totalPrice:0,
        }
    }

    handleConfirmation=(e)=>{
    }

    render(){
        let calPrice=0;
        let book=this.props.cartItem.map(item=>{
            calPrice+=item.price*item.quantity;
            return (
            <div style={{height:"fit-content",paddingBottom:"40px"}}>
                <div style={{display:"flex",flexDirection:"row",height:"100px",paddingBottom:"20px"}}>
                    <div className="shoppingcart_image">
                        <div style={{width:"100%",height:"80%",paddingTop:"10%"}}>
                            <img src={item.bookcover} alt="" className="shopped_image"/>
                        </div>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",paddingTop:"40px",justifyContent:"flex-start",height:"200px"}}>

                        <span className="shopped_book_name">{item.name}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_author">{item.authorname}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="shopped_book_price">RS. {item.price}</span>
                        <div style={{height:"5%"}}></div>
                        <span className="">Quantity: {item.quantity}</span>
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
                <div style={{height:"300px",overflowY:"scroll"}}>
                    {book}
                </div>
                <p style={{paddingLeft:"175px",fontSize:"15px"}}><b>Total Price:</b> RS {calPrice}</p>
                <div style={{height:"auto",display:"flex",justifyContent:"flex-end"}}>
                    <Button style={{background:"maroon",color:"white",padding:"8px"}} variant="contained" 
                        onClick={this.handleConfirmation}>Confirm</Button>
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