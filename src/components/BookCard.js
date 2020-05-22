import React, { Component } from 'react';
import '../css/BookCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import MuiCardContent from "@material-ui/core/CardContent";
import history from './history';

const ImageToolTip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: 'lightgrey',
      
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 265,
      
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
      

    },
  }))(Tooltip);
    

const NestedCardContent = withStyles(theme => ({
    root: {
        padding: 0

    }
}))(MuiCardContent);

export default class BookCard extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            count:0
        }
        
    }
    
    displayImage() {
        if (this.props.bookDetails.quantity === 0) {
            return (
                <figure>
                    <img src={this.props.bookDetails.bookcover} id="imageoutofstock" alt="" />
                    <figcaption>OUT OF STOCK</figcaption>
                </figure>
            );
        } else {
            return (
                <img src={this.props.bookDetails.bookcover} className="image" alt="" />
            );
        }
    }

    displayButton() {
        if (this.props.bookDetails.quantity === 0) {
            return (
                <Button  type="submit" variant="contained"  disabled={ !this.props.bookDetails.quantity} size="50%" style={{ width:"90%", backgroundColor:'silver', color: "black" }} >ADD TO CART</Button>
            );
        }
        const bookName=JSON.parse(localStorage.getItem("bookName"));
        if( bookName!==null && bookName.includes(this.props.bookDetails.name)){
            return(
                    <Button  type="submit" name="addButton" variant="contained" onClick={()=>{
                    history.push('/cart')
                    this.setState({
                        count:1
                    })
                }} disabled={ !this.props.bookDetails.quantity} size="50%" style={{ width:"90%", backgroundColor:'blue', color: "white" }} >ADDED TO CART</Button>
            );
        }
         else {
            return (
                <Button  
                name= "button" type="submit" variant="contained" onClick={(event)=>{
                    this.props.addFunction(this.props.bookDetails)
                    this.setState({
                        count:1,
                    })   
                }} disabled={ !this.props.bookDetails.quantity} size="50%" style={{ width:"90%", backgroundColor:'maroon', color: "white" }} >ADD TO CART</Button>
            );
        }

    }
   
    render() {
        
        return (
            <div className="cardofbook" name="cardData"  >
                <Card className="card"  >
                    <NestedCardContent>
                        <div >                            
                                <ImageToolTip
                                        title={
                                            <React.Fragment>
                                                <Typography color="black"><b>Book Details</b></Typography>
                                                <p style={{color:"black"}}>{this.props.bookDetails.bookdetails}</p>
                                            </React.Fragment>
                                        }
                                        placement="right-start"
                                    >
                                    <div id="bookimage">
                                        { this.displayImage()}
                                    </div>                         
                                    </ImageToolTip>              
                            <div className="book_detail">
                                <span className="book_name">{this.props.bookDetails.name}</span>
                            </div>
                            <div className="space-between"></div>    
                            <div className="book_detail">
                                <span className="book_author">{this.props.bookDetails.authorname}</span>
                                <span className="book_price">Rs:{this.props.bookDetails.price}</span>
                            </div>
                        </div>
                        <div style={{ marginBottom:"40px" }}>
                            <CardActions className="card_action">
                               {this.displayButton()}
                            </CardActions>
                        </div>
                    </NestedCardContent>
                </Card>
            </div>
        )
    }
}