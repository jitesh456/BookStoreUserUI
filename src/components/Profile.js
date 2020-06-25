import React from 'react';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import history from "./history";
import '../css/Main.css'

import DialogBox from "./DialogBox";

export default class profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            login: '', logOut: true,
        }

    }


    openDialog = () => {
        this.setState({
            isDialogOpen: true,

        })
    }

    handleClose = () => this.setState({ isDialogOpen: false })

    diaplayButton() {

        if (localStorage.getItem("token") == null && this.state.logOut) {
            return (
                <button type="button" onClick={this.openDialog}
                    style={{ width: "65%", fontSize: "14px", backgroundColor: 'white', cursor:'pointer', border: "maroon 1px solid", color: "maroon", marginLeft: "5%", marginTop: "5%" }}>
                    Login/Signup</button>);
        }
        else {
            return (
                <button type="button" onClick={this.DoLogOut}
                    style={{ width: "65%", fontSize: "14px", backgroundColor: 'white',cursor:'pointer', border: "maroon 1px solid", color: "maroon", marginLeft: "5%", marginTop: "5%" }}>
                    LogOut</button>

            );
        }

    }

    DoLogOut = () => {
        localStorage.clear();
        this.setState({
            logOut: true,
        })
        window.location.replace("/");
    }

    showMyorder=()=>{
        
        history.push("/myorder");
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
                    <div className = "dialogOpen">
                        <DialogBox DialogOpen={this.state.isDialogOpen}
                            DialogClose={this.handleClose} />
                    </div>
                </div>
                <hr/>
                <div>
                    <div className="Myorder-div" >  
                        <LocalMallIcon style={{ color: "gray" , marginLeft: "4%" }} fontSize="small" onClick={this.showMyorder}/>
                        <h6 style={{ color: "gray" ,marginTop:"0%", marginLeft: "3%"}}  onClick={this.showMyorder}> MyOrder</h6>
                    </div>
                </div>
            </div>
        );
    }
} 