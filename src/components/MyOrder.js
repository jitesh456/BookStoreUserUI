import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import booklogo from '../booklogo.png';
import '../css/MyOrder.css';
import '../css/Main.css';
import history from "./history";
import Service from '../service/Service';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

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
        if(localStorage.getItem("token") !== null){
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
    else{
        history.push("/user/login");
    }
}


    changePage = () => {
        history.push("/");
    }

    render() {
        let book;
        if (this.state.orderDetails.length === 0) {   
            book= <h2 >Please Order something to see MyOrder......</h2>
        }
        else {
            book = this.state.orderDetails.map(item => {
                let order = item.bookList;
                var date = new Date(item.cart.orderPlacedDate).toString().substring(0, 15);

                console.log(item.cart.orderPlacedDate);
                return (
                    <div>
                        <div className="Myorder-summary">
                            {order.map(list => {
                                return (
                                    <div className="myorder-item">
                                        <div className="cart-item-content">
                                            <div className="order_image">
                                                <img src={`http://localhost:8090/admin/downloadfile/${list.bookCover}`} alt="" className="shopped_image" />
                                            </div>
                                            <div className="MyOrder-details">
                                                <span className="myorder_book_name">{list.name}</span>
                                                <div style={{ height: "5%" }}></div>
                                                <span className="myorder_book_author">{list.authorname}</span>
                                                <div style={{ height: "5%" }}></div>
                                                <span className="myorder_book_price">Rs. {list.price * list.quantity}</span>
                                                <div style={{ height: "5%" }}></div>
                                                <span className="myorder_book_name">QTY: {list.quantity}</span>
                                            </div>
                                            <div className="orderDate">
                                                <h4 style={{ marginTop: "35px", marginBottom: "15px" }}>Order Placed on</h4>
                                                <span  className="date" >{date}</span>
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

                    <div className="admin1_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin1">BB Store</span>
                    </div >
                </AppBar>
                <div className="orderTitle">
                <div style={{ height: "25px" }}></div>
              
                    <Breadcrumbs aria-label="breadcrumb">

                        <Typography color="inherit" href="/" style={{cursor:"pointer"}} onClick={this.changePage}> home </Typography>
                        <Typography color="textPrimary">MyOrder</Typography>
                    </Breadcrumbs>
                </div>
                <div className="MainClass">
                    <div ClassName="MyOrderBox" >
                        {book}
                        <div style={{ height: "35px" }}></div>
                    </div>

                </div>
                <footer className='appOrder_footer'>
                    <div className='adminorder_footer'>
                        <p> © Bug Busters Store.All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}