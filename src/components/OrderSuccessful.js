import React, {Component} from 'react';
import OrderSuccess from '../assets/images/OrderSuccess.png';
import Button from "@material-ui/core/Button";
import '../css/OrderSuccessful.css';
import siteinfo from '../data/siteinfo.json';
import booklogo from '../booklogo.png';
import Tooltip from "@material-ui/core/Tooltip";

import { withStyles } from "@material-ui/core/styles";

const TableTooltip = withStyles((theme) => ({
    tooltip: {
      color: 'FCF2F2',
      maxWidth: 265,
      fontSize: theme.typography.pxToRem(12),
    },
  }))(Tooltip);
class OrderSuccessful extends Component {
    
    handleChange=()=>{
        window.location.replace("/");
    }

    render() {
        var min = 100000000;
        var max = 199999999;
        var orderId =  Math.round(min + (Math.random() * (max-min)));
        return (
            <div>
             <header className="app_header">
                    <div className="admin2_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin2">BB Store</span>  
                    </div >
                   
            </header>
            <div className="mainformorder">
                <img className={'successfulimage'} src={OrderSuccess} alt="asd"/>
                <div className='messageorder'>
                    <p className="firstLine">Congratulations!!... Your order is confirmed.
                    </p>
                        <p>Your order id is {orderId}</p>
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
                                
                                <td id="address" >
                                    <TableTooltip title={ <React.Fragment>
                                                <p>{info.Address}</p>
                                        </React.Fragment>
                                    } placement="right" arrow><div className="address-content" >{info.Address}</div></TableTooltip></td>
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
            <footer className='app4_footer'>
            <div className='admin_footer'>
                        <p> © Bug Busters Store.All Rights Reserved.</p>
                </div>
                </footer>
            </div>
        );
    }
}

export default OrderSuccessful;