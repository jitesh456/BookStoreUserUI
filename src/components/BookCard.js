import React, { Component } from 'react';
import '../css/BookCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import MuiCardContent from "@material-ui/core/CardContent";

const HtmlTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.97)",
        width: 250,
        height:300,
        marginTop:-20,
        position:"absolute",
        float:"right",
        
        fontSize: theme.typography.pxToRem(12),
        color: "grey",
        border: "1px solid #dadde9"
    }
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
            data: []
        }
    }
    displayImage() {

        if (this.props.bookDetails.quantity === 0) {
            return (
                <figure>
                    <img src={this.props.bookDetails.bookcover} className="image" alt="" />
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
                <Button type="submit" variant="contained"  disabled={ !this.props.bookDetails.quantity} size="50%" style={{ width:"90%", backgroundColor:'silver', color: "black" }} >ADD TO CART</Button>
            );
        } else {
            return (
                <Button type="submit" variant="contained"  disabled={ !this.props.bookDetails.quantity} size="50%" style={{ width:"90%", backgroundColor:'maroon', color: "white" }} >ADD TO CART</Button>
            );
        }
    }
    render() {
        return (
            <div className="cardofbook" >
                <Card className="card">
                    <NestedCardContent>
                        <div className="tooltip_content">
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        <Typography color="black"><b>Book Details</b></Typography>
                                        <em>{this.props.bookDetails.bookDetails}</em>
                                    </React.Fragment>
                                }
                            >
                                <span style={{ fontWeight: "bold" }}>ⓘ</span>
                            </HtmlTooltip>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div id="container" class="book_image">
                                { this.displayImage()}
                            </div>                         
                            <div className="book_detail">
                                <span className="book_name">{this.props.bookDetails.name}</span>
                            </div>    
                            <div className="book_detail">
                                <span className="book_author">{this.props.bookDetails.authername}</span>
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