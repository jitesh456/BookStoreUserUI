import React, { Component } from 'react';
import '../css/BookCard.css';
import DialogBox from "./DialogBox";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import MuiCardContent from "@material-ui/core/CardContent";
import history from './history';
import Service from '../service/Service';
import InfoIcon from '@material-ui/icons/Info';


const ImageToolTip = withStyles((theme) => ({
    tooltip: {
        color: 'FCF2F2',
        maxWidth: 265,
        fontSize: theme.typography.pxToRem(12),
    }
}))(Tooltip);


const NestedCardContent = withStyles(theme => ({
    root: { padding: 0 }
}))(MuiCardContent);

export default class BookCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isDialogOpen: false,
            i:0,
        }
        this.handleBookInfo=this.handleBookInfo.bind();
    }

    displayImage = () => {
        if (this.props.bookDetails.quantity === 0) {
            return (
                <figure>
                    <img src={`http://localhost:8090/admin/downloadfile/${this.props.bookDetails.bookCover}`} id="imageoutofstock" alt="" />
                    <figcaption>OUT OF STOCK</figcaption>
                </figure>
            );
        } else {
            return (
                <img src={`http://localhost:8090/admin/downloadfile/${this.props.bookDetails.bookCover}`} className="image" alt="" />
            );
        }
    }

    openDialog = () => { this.setState({ isDialogOpen: true }) }

    handleClose = () => { this.setState({ isDialogOpen: false }) }

    addToCart = (bookDetails) =>{
        const cart = {
            bookId: bookDetails.id,
            quantity:1
        }
        Service.addtoCart(cart).then((response) => {
            console.log(response);        
        }).catch((error) => {
            console.log(error)
        })
    }

    displayButton = () => {
        if( (localStorage.getItem("token") === null) &&(this.props.bookDetails.quantity === 0) ) {
            return (
                <Button type="submit" variant="contained" disabled={!this.props.bookDetails.quantity} size="50%" style={{ width: "90%", backgroundColor: 'silver', color: "black" }} >ADD TO CART</Button>
            );
        }

        if (localStorage.getItem("token") === null) {
            return (
                
                <Button type="submit" variant="contained"
                    onClick={this.openDialog}
                    size="50%" style={{ width: "90%", backgroundColor: 'maroon', color: "white" }} >ADD TO CART</Button>
            );
        }
        if (this.props.bookDetails.quantity === 0) {
            return (
                <Button type="submit" variant="contained" disabled={!this.props.bookDetails.quantity} size="50%" style={{ width: "90%", backgroundColor: 'silver', color: "black" }} >ADD TO CART</Button>
            );
        }
        const bookName = JSON.parse(localStorage.getItem("bookName"));
        if ((bookName!==null && bookName.includes(this.props.bookDetails.name)) || this.state.i=== 1) {
            
            return (
                <Button type="submit" name="addButton" variant="contained" onClick={() => {
                    history.push('/cart')
                }} disabled={!this.props.bookDetails.quantity} size="50%" style={{ width: "90%", backgroundColor: "blue", color: "whitesmoke" }} >GO TO CART</Button>
            );
        }
        else {
           
            return (
                
                <Button
                    name="button" type="submit" variant="contained" onClick={(e) => {
                        this.props.addFunction(this.props.bookDetails);
                        this.addToCart(this.props.bookDetails);
                        this.setState({ i:1 });                        
                    }} disabled={!this.props.bookDetails.quantity} size="50%" 
                    style={{ width: "90%", backgroundColor: 'maroon', color: "white" }} >ADD TO CART</Button>
            );
        }
    }

    render() {
        let im=[]
        im= <div className="cardofbook" name="cardData"  >
        <Card className="card"  >
            <NestedCardContent>
                <div >
                    <ImageToolTip
                        title={
                            <React.Fragment>
                                <Typography ><b>Book Details</b></Typography>
                                <p>{this.props.bookDetails.bookDetails}</p>
                            </React.Fragment>
                        }
                        placement="right-start"
                        arrow
                    >
                        <div id="bookimage">
                            {this.displayImage()}
                        </div>
                    </ImageToolTip>
                    <div className="book-name">
                        <span className="book_name">{this.props.bookDetails.name}</span>
                        <Tooltip placement="down"
                        title="Read More"
                        >
                            <span  style={{marginRight:"23px"}}><InfoIcon onClick={()=>{this.handleBookInfo(this.props.bookDetails)}} style={{color:"maroon"}}/></span>
                        </Tooltip>
                    </div>
                    <div className="space-between"></div>
                    <div className="book_detail">
                        <span className="book_author">{this.props.bookDetails.authorName}</span>
                        <span className="book_price">Rs:{this.props.bookDetails.price}</span>
                    </div>
                </div>
                <div style={{ marginBottom: "40px" }}>
                    <CardActions className="card_action">
                        {this.displayButton()}
                    </CardActions>
                    <DialogBox DialogOpen={this.state.isDialogOpen}
                        DialogClose={this.handleClose} />
                </div>
            </NestedCardContent>
        </Card>
    </div>
        
    return (im);
    }
}