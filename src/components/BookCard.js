import React, { Component } from 'react';
import '../css/BookCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import MuiCardContent from "@material-ui/core/CardContent";

const HtmlTooltip = withStyles(theme => ({
    tooltip: {
        backgroundColor: "#f5f5f9",
        color: "rgba(0, 0, 0, 0.97)",
        maxWidth: 220,
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
    render() {
        return (
            <div className="cardofbook" style={{ marginTop: '20px' }}>
                <Card style={{ height: "300px", width: "200px", padding: "0px", backgroundColor: "Snow" }}>
                    <NestedCardContent>
                        <div style={{ height: "20px", display: "flex", backgroundColor: "lightGrey", justifyContent: "flex-end", margin: "0px", paddingRight: "8px" }}>
                            <HtmlTooltip
                                title={
                                    <React.Fragment>
                                        <Typography color="black"><b>Book Details</b></Typography>
                                        <em>{this.props.bookDetails.bookdetails}</em>
                                    </React.Fragment>
                                }
                            >
                                <span style={{ fontWeight: "bold" }}>...</span>
                            </HtmlTooltip>
                        </div>
                        <div style={{ width: "100%" }}>
                            <div id="container" style={{ backgroundColor: "lightGrey", height: "140px", display: "flex", justifyContent: "center" }}>
                               { this.displayImage()}
                            </div>
                            <div className="book_Detail" style={{ paddingLeft: "10px", width: "100%", paddingTop: "5px" }}>
                                <span style={{ fontSize: "14px", fontWeight: "bold", display:"flex", width:"auto", height:"30px", justifyContent:"center" }}>{this.props.bookDetails.name}</span>
                                <div>
                                <span style={{color:"Grey", fontSize: "12px", display:"flex", width:"auto", height:"20px" }}>{this.props.bookDetails.authorname}</span>
                                <span style={{ fontSize: "12px", fontWeight: "bold" }}>Rs:{this.props.bookDetails.price}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom:"40px" }}>
                            <CardActions>
                                <Button type="submit" variant="contained"  disabled={ !this.props.bookDetails.quantity} size="50%" style={{ backgroundColor:'Maroon', color: "white" }} >
                                    Add to Cart
                            </Button>
                            </CardActions>
                        </div>
                    </NestedCardContent>
                </Card>
            </div>
        )
    }

}