import React from 'react';
import Button from '@material-ui/core/Button';

export default class OrderSummary extends React.Component{
    constructor(props){
        super(props);
        this.handleConfirmation=this.handleConfirmation.bind(this);
    }

    handleConfirmation=(e)=>{
    }

    render(){
        let book=this.props.cartItem.map(item=>{
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
                        <span className="">{item.quantity}</span>
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
                <div>
                    {book}
                </div>
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