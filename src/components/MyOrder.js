import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import booklogo from '../booklogo.png';
import '../css/MyOrder.css';
import '../css/Main.css';

// import Button from '@material-ui/core/Button';
import history from "./history";
import Service from '../service/Service';
// import image0 from '../assets/images/image0.jpg';

let baseBook = '';
export default class MyOrder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            order: [],
            date: '',
            orderDetails: [],
        }
    }


    componentDidMount() {
        Service.getMyOrder().then((response) => {
            console.log(response);
            console.log(response.data.body[0].bookList);
            console.log(response.data.body[0].cart);
            this.setState({
                orderDetails: response.data.body
            })
            console.log(this.state.orderDetails);
        }).catch((error) => {
            console.log(error)
        })
    }


    changePage = () => {
        history.push("/");
    }

    render() {
        let book;
        if (this.state.orderDetails.length === 0) {
            book = <h4 >Please Order something to see MyOrder</h4>
            return (
                book
            )
        }
        else {
            book = this.state.orderDetails.map(item => {
                let order = item.bookList;
                let date = item.cart.orderPlacedDate;
                console.log(this.order);
                return (
                    <div>
                        <div className="Myorder-summary">
                            {order.map(list => {
                                return (
                                    <div className="cart-item">
                                        <div className="cart-item-content">
                                            <div className="shoppingcart_image">
                                                <img src={`http://localhost:8090/admin/downloadFile/${list.bookcover}`} alt="" className="shopped_image" />
                                            </div>
                                            <div className="MyOrder-details">
                                                <span className="shopped_book_name">{list.name}</span>
                                                <div style={{ height: "5%" }}></div>
                                                <span className="shopped_book_author">{list.authorname}</span>
                                                <div style={{ height: "5%" }}></div>
                                                <span className="shopped_book_price">Rs. {list.price * list.quantity}</span>
                                                <div style={{ height: "5%" }}></div>
                                                <span className="shopped_book_name">QTY: {list.quantity}</span>
                                            </div>
                                            <div style={{ marginLeft: "10%" }}>
                                                <h4 style={{ marginTop: "35px", marginBottom: "15px" }}>Order Placed on</h4>
                                                <span style={{ marginTop: "5px" }} >{date.orderPlacedDate}</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })
                            }
                        </div>
                        <div style={{ height: "35px" }}></div>
                    </div>
                );
            });
        }
        return (
            <div>
                <AppBar id="app-header">

                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>
                    </div >
                </AppBar>
                <div>
                    <h4 className="orderTitle" onClick={this.changePage} >home/MyOrder</h4>
                </div>
                <div className="MainClass">
                    <div ClassName="MyOrderBox" >
                        {book}
                        <div style={{ height: "35px" }}></div>
                    </div>

                </div>
            </div>
        );
    }
}