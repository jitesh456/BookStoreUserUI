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
                <div style={{height:"auto",display:"flex",justifyContent:"center",paddingBottom:"2%"}}>
                <Button color="primary" variant="contained" 
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