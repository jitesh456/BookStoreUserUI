import React, { Component } from 'react';
import '../css/Main.css'
import Button from '@material-ui/core/Button';
import DialogBox from "./DialogBox";
export default class profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            isDialogClose:false
        }

    }

    openDialog = () => {
        this.setState({ isDialogOpen: true })
        console.log(this.state.isDialogOpen);
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
                    <Button type="button" onClick={this.openDialog}
                        style={{ width: "65%", fontSize: "14px", backgroundColor: 'grey', border: "maroon", color: "maroon", marginLeft: "5%", marginTop: "5%" }}>
                        Login/Signup</Button>

                    <div>

                        <DialogBox DialogOpen = {this.state.isDialogOpen}
                            DialogClose= {this.handleClose}
                        />

                    </div>

                </div>
            </div>
        );
    }
} 