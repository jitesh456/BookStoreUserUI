import React, {Component} from 'react';
import OrderSuccess from '../assets/images/OrderSuccess.png';
import Button from "@material-ui/core/Button";
import '../css/OrderSuccessful.css';
import siteinfo from '../data/siteinfo.json';
import booklogo from '../booklogo.png';
import Tooltip from "@material-ui/core/Tooltip";
import HomeIcon from '@material-ui/icons/Home';

class OrderSuccessful extends Component {

    handleChange=()=>{
        this.props.history.push("/")
    }

    render() {
        return (
            <div>
             <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>  
                    </div >
                   
            </header>
            <div className="mainformorder">
                <img className={'successfulimage'} src={OrderSuccess}/>
                <div className='messageorder'>
                    <p className="firstLine">Congratulations!!... Your order is confirmed.</p>
                </div>
                <table>
                    <tbody>
                    <tr>
                        <th colSpan="1">Email Us</th>
                        <th colSpan="1">Contact Us</th>
                        <th colSpan="3">Address</th>
                    </tr>

                    {
                        siteinfo.map(info=>{
                            return <tr>
                                <td className="email">{info.EmailUs}</td>
                                <td id="number">{info.ContactUs}</td>
                                <td id="address" ><div className="address-content">{info.Address}</div></td>
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                <Button
                    onClick={this.handleChange}
                aria-controls="panel1a-content"
                id="btn" >CONTINUE SHOPPING</Button>
            </div>
            <footer className='app_footer'>
            <div className='admin_footer'>
                        <p> © Online Book Store.All Rights Reserved.</p>
                </div>
                </footer>
            </div>
        );
    }
}

export default OrderSuccessful;