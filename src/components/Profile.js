import React, { Component } from 'react';

import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
import LoginBox from "./LoginBox";
import '../css/Main.css'
import button from '@material-ui/core/Button';
import DialogBox from "./DialogBox";

export default class profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            login:'', logOut:true,
        }

    }
   

    openDialog = () => {
        this.setState({ isDialogOpen: true,
                        
        })
    }

    handleClose = () => this.setState({ isDialogOpen: false })
    
    diaplayButton(){
        
        if(localStorage.getItem("token")== null  && this.state.logOut){
            return(
            <button type="button" onClick={this.openDialog}
            style={{ width: "65%", fontSize: "14px", backgroundColor: 'white', border: "maroon 1px solid", color: "maroon", marginLeft: "5%", marginTop: "5%" }}>
            Login/Signup</button>);
        }
        else{
            return(
            <button type="button" onClick={this.DoLogOut}
            style={{ width: "65%", fontSize: "14px", backgroundColor: 'white', border: "maroon 1px solid", color: "maroon", marginLeft: "5%", marginTop: "5%" }}>
            LogOut</button>
            
            );
        }
    
    }

    DoLogOut = ()=>{
        localStorage.clear();
        this.setState({
            logOut:true,
        })
        window.location.replace("/books");
    }
    render() {
        return (
            <div className="showProfile">
                <div className="profileContaint">
                    <span style={{ color: "black", marginTop: "-5%", marginLeft: "-3%" }}> <h5>Welcome</h5> </span>
                    <span style={{ color: "gray", display: "flex", width: "100%", fontSize: "12px", marginLeft: "-3%", marginTop: "-9%" }}> Access account</span>

                </div>
                <div>
                   {this.diaplayButton()}
                    
                    <div>
{/* 
                        <Dialog maxWidth="md" className="main-dialog" open={this.state.isDialogOpen} onClose={this.handleClose}>
                            <DialogContent className="dialog-content">
                                <div className="dialogBox">
                                    <div className="pageSet">
                                        <LoginBox 
                                            
                                        />
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog> */}
                        <DialogBox DialogOpen={this.state.isDialogOpen}
                        DialogClose={this.handleClose} />

                    </div>

                </div>
            </div>
        );
    }
} 