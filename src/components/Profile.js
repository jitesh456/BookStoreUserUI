import React, { Component } from 'react';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
  } from '@material/react-dialog';
import '../css/UserLogin.css';
import LoginBox from "./LoginBox";
import '../css/Main.css';

export default class profile extends React.Component {

    constructor(props){
        super(props);
        this.state={
            isDialogOpen: false
        }
      
    }

    openDialog = () =>{ this.setState({ isDialogOpen: true })
    }
 
    handleClose = () => this.setState({ isDialogOpen: false })
 

    render() {
        return (
            <div className="showProfile">
                <div className="profileContaint">
                    <span style={{ color: "black", marginTop: "-5%", marginLeft: "-3%" }}> <h5>Welcome</h5> </span>
                    <span style={{ color: "gray", display: "flex", width: "100%", fontSize: "12px", marginLeft: "-3%", marginTop: "-9%" }}> Access account</span>

                </div>
                <div>
                    <button type="button" onClick={this.openDialog} 
                    style={{ width: "54%", fontSize: "14px",backgroundColor: 'grey', border: "maroon", color: "maroon", marginLeft: "5%", marginTop: "7%" }}>Login/Signup</button>
                {   
                    this.state.isDialogOpen &&
                    <Dialog open={this.state.isDialogOpen} onClose={this.handleClose}>
                    <DialogContent style={{backgroundColor:"transparent",width:"200%",height:"200%", marginLeft:"-320%",marginTop:"20%"}}>
                    <LoginBox/>
                    </DialogContent>
                    </Dialog>
                 }
                </div>
            </div>
        );
    }
} 