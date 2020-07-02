import React from 'react';
import Button from '@material-ui/core/Button';
import booklogo from '../booklogo.png';
import Customer from './Customer';
import OrderSummary from './OrderSummary';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Service from '../service/Service';
import history from "./history";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

const theme = createMuiTheme({
    palette: {
        primary: {
            
            main: purple[500],
        },
        secondary: {
            
            main: '#B0002A',

        },
    },
});

export default class ShoppingCart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemquantity: 1,
            customer: false,
            customersummary: false,
            placebutton: 'block',
            removeButton:false,
            editbutton: 'none',
            disableform: false,
            ordersummary: 'block',
            cartItem: [],
        }

        this.handleCustomer = this.handleCustomer.bind(this);
        this.handleEditCustomer = this.handleEditCustomer.bind(this);
        this.handleCustomerSummary = this.handleCustomerSummary.bind(this);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    }

    handleCustomer = (e) => {

        this.setState({
            customer: true,
            removeButton: true,
            placebutton: 'none'
        })

        this.state.cartItem.map((item) => {
            const cart = {
                bookId: item.id,
                quantity: item.quantity
            }
            Service.addtoCart(cart).then((response) => {
                console.log(response);
            }).catch((error) => {
                console.log(error)
            })
            return "";
        });

    }
    handleRemove(object) {
        
        Service.removeBook(object.id).then((response) => {
            console.log(response.data);
            this.getCartData();

        }).catch((error) => {
            console.log(error);
        })
    }

    handleEditCustomer = (e) => {
        this.setState({
            customersummary: false,
            editbutton: 'none',
            disableform: false,
            ordersummary: 'block'
        })
    }

    componentDidMount() {
        this.getCartData();
    }

    getCartData() {
        Service.getCartBook().then((response) => {
            console.log(response);
            this.setState({
                cartItem: response.data.body
            })
            console.log(response.data);
        }).catch((error) => {
            console.log(error)
        })

    }

    handleCustomerSummary = (e) => {
        this.setState({
            customersummary: true,
            editbutton: 'block',
            disableform: true,
            ordersummary: 'none'
        })


    }

    handlePlus = (book) => {
        let items = this.state.cartItem;
        
        if (book.quantity < 5) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].isbn === book.isbn && book.quantity > 0) {
                    items[i].quantity += 1;
                }
            }
            this.setState({
                cartItem: items,
            })

        }
    }

    changePage = () => {
        history.push("/");
    }

    handleMinus = (book) => {
        let items = this.state.cartItem;
        let number = localStorage.getItem("count");
        console.log(number);
        if (book.quantity > 1) {
            for (var i = 0; i < items.length; i++) {
                if (items[i].isbn === book.isbn) {
                    console.log(items[i].quantity)
                    items[i].quantity -= 1;
                }
            }
            this.setState({
                cartItem: items,
            })
        }

    }

    render() {
        let increase = []
        let decrease = []


        let book = this.state.cartItem.map(item => {
            if (item.quantity === 1) {
                increase = <AddCircleOutlineIcon onClick={() => { this.handlePlus(item) }} style={{ color: "maroon" }} />
                decrease = <RemoveCircleOutlineIcon disabled={true} />
            } else {
                increase = <AddCircleOutlineIcon onClick={() => { this.handlePlus(item) }} style={{ color: "maroon" }} />
                decrease = <RemoveCircleOutlineIcon onClick={() => { this.handleMinus(item) }} style={{ color: "maroon" }} />
            }
            if (item.quantity > item.maxquantity - 1) {
                increase = <AddCircleOutlineIcon disabled={true} />
            }
            let remove=
                <Button style={{ padding: "8px", background: "maroon", color: "white" }} disabled={this.state.removeButton} 
                onClick={() => { this.handleRemove(item) }}>Remove</Button>
     
            
            return (
                <div className="cart-item">
                    <div className="cart-item-content1">
                        <div className="shoppingcart_image">
                            <img src={`http://localhost:8090/admin/downloadfile/${item.bookCover}`} alt="" className="shopped_image" />
                        </div>
                        <div className="cart-item-content-details">
                            <span className="shopped_book_name">{item.name}</span>
                            <div style={{ height: "5%" }}></div>
                            <span className="shopped_book_author">{item.authorName}</span>
                            <div style={{ height: "5%" }}></div>
                            <span className="shopped_book_price">Rs.{item.price * item.quantity}</span>
                            <div className="shopped_item_quantity">

                                <div style={{ display: "flex", width: "100px" }}>
                                    {decrease}&nbsp;
                        <div style={{ textAlign: "center", border: "1px solid silver", width: "28%", height: "25%" }}>
                                        <label for="test" >{item.quantity}</label>
                                    </div>&nbsp;
                            {increase}
                                </div>
                                <div>
                                </div>
                                <div>
                                </div>
                                {remove}
                                  </div>

                        </div>

                    </div>

                </div>
            );
        });

        const im = <div className="shopping_cart">

            <AppBar id="app-header">

                <div className="admin1_header">
                    <img src={booklogo} alt="asd" className="bk_image" />
                    <a href="/" style={{ color: "white", textDecoration: "none" }}>
                        <span className="admin1">BB Store</span></a>
                </div >

            </AppBar>

            <div className="cart_content">
                <div className="cart" >

                    <Breadcrumbs aria-label="breadcrumb">

                        <Typography color="inherit" href="/" style={{cursor:"pointer"}}  onClick={this.changePage}> home </Typography>
                        <Typography color="textPrimary">MyCart ({this.state.cartItem.length })</Typography>
                    </Breadcrumbs>
                        <div style={{ height: "25px" }}></div>

                    <div className="shoppingcart1_details">
                        <div className="book_details">
                            {book}
                        </div>
                        <div className="customer_button">
                            <Button style={{
                                display: this.state.placebutton, padding: "10px 30px",
                                background: "maroon", color: "white"
                            }} variant="contained"
                                onClick={this.handleCustomer}>Continue</Button>
                        </div>
                    </div>
                    <div style={{ height: "25px" }}></div>

                    <div style={{ width: "100%", height: "auto" }}>
                        <ThemeProvider theme={theme} >

                            < div color="secondary" className="customer_detail">
                                <div className="customer_header">
                                    <div style={{ fontSize: "15px", width: "87%", paddingBottom: "10px", paddingTop: "10px" }}>Customer Details</div>
                                    <div className="editButton">
                                        <Button style={{ margin: "5%", padding: "2px", display: this.state.editbutton, background: "maroon", color: "white" }} variant="contained"
                                        onClick={this.handleEditCustomer}>Edit</Button>
                                    </div>
                                </div>
                                <div className="customer_info">
                                    <div className="customer_info_detail">
                                        <Customer show={this.state.customer}
                                            ordersummary={this.state.ordersummary}
                                            disableform={this.state.disableform}
                                            onClick={this.handleCustomerSummary} />
                                    </div>
                                </div>
                            </div>
                        </ThemeProvider>
                    </div>
                    <div style={{ height: "25px" }}></div>

                    <div style={{ width: "100%", height: "auto" }}>
                        <div className="placeOrder_detail">
                            <div className="customer_header">
                                <span style={{ fontSize: "15px", paddingBottom: "10px", paddingTop: "10px" }}>Order Summary</span>
                            </div>
                            <div className="customer_info">
                                <div className="customer_info_detail">
                                    <OrderSummary show={this.state.customersummary}
                                        cartItem={this.state.cartItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='app34_footer'>
                <div className='admin_footer'>
                    <p> © Online Book Store.All Rights Reserved.</p>
                </div>
            </footer>
        </div>

        if (this.state.cartItem.length === 0) {
            return (
                <div className="shopping_cart">
                    <AppBar id="app-header">
                        <div className="admin_header">
                            <img src={booklogo} alt="asd" className="bk_image" />
                            <a href="/" style={{ color: "white", textDecoration: "none" }}> <span className="admin">BB Store</span></a>
                        </div >

                    </AppBar>
                    <div className="cart_content">
                        <div className="cart" >
                            <h1> Please Add book Into Cart</h1>
                        </div>
                    </div>
                    <footer className='app_footer'>
                        <div className='admin_footer'>
                            <p> © Bug Busters Store.All Rights Reserved.</p>
                        </div>
                    </footer>
                </div>
            )
        }
        else {
            return (im);
        }
    }
}