import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';

import '../css/UserLogin.css';
import LoginBox from "./LoginBox";
import '../css/Main.css';
// import history from './history';




export default class profile extends React.Component {

    constructor(props){
        super(props);
        this.state={
            open:false,
        }
      
    }


    handleToggle=()=>{
        this.setState({
            open:!this.state.open
        })
    }

 

    render() {
        return (
            <div className="showProfile"  >
                <div className="profileContaint">
                    <span style={{ color: "black", marginTop: "-5%", marginLeft: "-3%" }}> <h5>Welcome</h5> </span>
                    <span style={{ color: "gray", display: "flex", width: "100%", fontSize: "12px", marginLeft: "-3%", marginTop: "-9%" }}> Access account</span>

                </div>
                <div style={{ display: "flex" }}>
                    <Button type="submit"
                    onClick={this.handleToggle}
                     variant="contained" 
                    size="30%" style={{ width: "54%", fontSize: "14px", height: "45%", backgroundColor: 'white', border: "maroon", color: "maroon", marginLeft: "5%", marginTop: "7%" }} >
                        Login/Signup
                    </Button>
                   
                        
                        
                    <Dialog open={this.state.open} onClose={this.handleToggle}
                        
                    // style={{width:"200%",height:"200%", marginLeft:"-42%",marginTop:"-20%"}}
                    >
                    <div className="dialodBox">
                         <LoginBox/>
                         </div>
                    </Dialog> 
                </div>
            </div>
        );
    }
}