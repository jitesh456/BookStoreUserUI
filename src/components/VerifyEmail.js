import React from 'react';
import booklogo from '../booklogo.png';
import tickmark from '../tickmark.png';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import '../css/VerifyEmail.css';

import Service from '../service/Service';

export default class VerifyEmail extends React.Component {

    componentDidMount() {
        Service.verifymail( (this.props.location.search).substring(1)).then(
            (response) => {
                console.log(response)
            }
        ).catch(error => {
            console.log(error.data);
        })



    }


    changePage(){
       
            window.location.replace("/user/login");
        
    }

    render() {
        return (

            <div>
                <AppBar id="app-header">
                    <div className="admin1_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin1">BB Store</span>
                    </div >
                </AppBar>
                <div className="Maintick">
                <div className="verifyEmail">
                    <h2 style={{marginLeft:"-10%"}}>Account Activated Successully</h2>
                    <div className="tick">                 
                           <img src={tickmark} alt="asd" className="tick_image" />
                    </div>

                    <div className="loginButton">
                        <Button type="submit" variant="contained"
                            onClick={this.changePage}
                            style={{ width: "30%", backgroundColor: 'maroon', fontSize: '15px', color: "white" }} >Login</Button>
                    </div>
                </div>
                </div>
                <footer className='app1_footer'>
                    <div className='admin_footer'>
                        <p> © Bug Busters Store.All Rights Reserved.</p>
                    </div>
                </footer>

            </div>
        );
    }

}