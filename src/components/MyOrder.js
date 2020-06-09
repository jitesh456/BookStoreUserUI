import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import booklogo from '../booklogo.png';
import '../css/MyOrder.css';
import '../css/Main.css';

// import Button from '@material-ui/core/Button';
import history from "./history";
import Service from '../service/Service';
// import image0 from '../assets/images/image0.jpg';
export default class MyOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            booklist: [],
            orderDetails:''

        }


    }


    componentDidMount(){
        Service.getMyOrder().then((response) => {
            console.log(response);
            this.setState({
                booklist: response.data.body.bookList,
                orderDetails:response.data.body.cart
            })
            console.log(response.data.body.cart)
        }).catch((error) => {
            console.log(error)
        })

    }


    render() {

        let book = this.state.booklist.map(item => {
            return (


                <div className="cart-item">
                    <div className="cart-item-content">
                        <div className="shoppingcart_image">
                            <img src={`http://localhost:8090/admin/downloadFile/${item.bookcover}`} alt="" className="shopped_image" />
                            
                        </div>
                        <div className="MyOrder-details">

                            <span className="shopped_book_name">{item.name}</span>
                            <div style={{ height: "5%" }}></div>
                            <span className="shopped_book_author">{item.authorname}</span>
                            <div style={{ height: "5%" }}></div>
                            <span className="shopped_book_price">Rs. {item.price * item.quantity}</span>
                            <div style={{ height: "5%" }}></div>
                            <span className="shopped_book_name">QTY: {item.quantity}</span>
                        </div>
                        <div style={{ marginLeft: "10%" }}>
                            <h4 style={{ marginTop: "35px", marginBottom: "15px" }}>Order Placed on</h4>

                            <span style={{ marginTop: "5px" }} >!12 june 2020</span>

                        </div>
                    </div>



                </div>
            );
        });

        return (
            <div>
                <AppBar id="app-header">

                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>
                    </div >
                </AppBar>
                <div className ="MainClass">
                    <h3 style={{ marginLeft: "-80%" }} >MyOrders</h3>
                    <div ClassName="MyOrderBox" >
                        <div className="Myorder-summary">
                            {book}
                        </div>

                    </div>

                </div>
            </div>

        );

    }
}