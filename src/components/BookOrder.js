import React from 'react';
import '../css/MyOrder.css';
import '../css/Main.css';

export default class BookOrder extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

       let  book = this.props.order.map(list => {
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
                            <span style={{ marginTop: "5px" }} >{this.props.date.orderPlacedDate}</span>
                        </div>
                    </div>
                </div>
            );})

        return (  {book}  );
            }
        }