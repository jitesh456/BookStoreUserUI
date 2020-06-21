import React, { Component } from 'react';
import LoginBox from "./LoginBox";
import '../css/UserLogin.css';
import '../css/DialogBox.css';
import DialogContent from '@material-ui/core/DialogContent';
import Dialog from '@material-ui/core/Dialog';
export default class profile extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Dialog backgroundColor="white !important" maxWidth="md" 
            className="main-dialog" open={this.props.DialogOpen}
             onClose={this.props.DialogClose} style={{overflowX:"hidden !important"}}
             >
                <DialogContent
                    className="dialog1-content">
                    <div className="dialogBox">
                        <div className="pageSet1">
                            <LoginBox />
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        );
    }
}