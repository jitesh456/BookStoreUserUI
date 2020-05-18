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

        let im=[]
        if(this.props.show)
        {
            im=<div>
            <div>
                <div style={{color:"red"}}><p>Email</p></div>
                <div style={{color:"red"}}><p>Name</p></div>
                <div style={{color:"red"}}><p>OrderId</p></div>
                <div style={{height:"auto",display:"flex",justifyContent:"flex-end",paddingBottom:"2%",paddingRight:"3.5%"}}>
                <Button style={{background:"maroon",color:"white"}} variant="contained" 
                    onClick={this.handleConfirmation}>Confirm</Button>
                </div>
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