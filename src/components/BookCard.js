import React, { Component } from 'react';
import '../css/BookCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import MuiCardContent from "@material-ui/core/CardContent";

const HtmlTooltip = withStyles(theme => ({
    tooltip: {
      backgroundColor: "#f5f5f9",
      color: "rgba(0, 0, 0, 0.97)",
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      color:"grey",
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
    render() {
        return (
            <div className="cardofbook" style={{ marginTop: '20px' }}>
                    <Card style={{ height:"300px" ,width:"200px",padding:"0px",backgroundColor:"Snow"}}>
                    <NestedCardContent>
                    <div style={{ height:"20px",display:"flex" ,backgroundColor:"lightGrey",justifyContent:"flex-end",margin:"0px",paddingRight:"8px"}}>
                        <HtmlTooltip 
                             title={
                                    <React.Fragment>
                                        <Typography color="black"><b>Book Details</b></Typography>
                                        <em>{this.props.bookDetails.Discription}</em>         
                                    </React.Fragment>
                                    }
                                >
                            <span style={{ fontWeight:"bold" }}>...</span>
                        </HtmlTooltip>
                        </div>
                        <div style={{ width:"100%"}}>
                            <div id= "container" style={{ backgroundColor:"lightGrey",height:"140px",display:"flex", justifyContent:"center"}}>
                                <img  src={this.props.bookDetails.src} className="image" alt=""/>
                            </div>
                            <div className="book_Detail" style={{ paddingLeft:"10px",width:"100%",paddingTop:"5px"}}>
                                <span style={{ fontSize:"14px"}}>Harry Potter The Philishoper Stone</span>
                                <span style={{ fontSize:"12px"}}>{this.props.bookDetails.Auther}</span>
                                <span style={{ fontSize:"12px", fontWeight:"bold"}}>Rs:{this.props.bookDetails.price}</span>
                            </div>
                        </div>
                        <div style={{ width:"100%", display:"flex",justifyContent:"center"}}>
                        <CardActions>
                            <Button type="submit" variant="contained" size="50%" style={{ backgroundColor: 'Maroon', color: "white" }} >
                                Add to Cart
                            </Button>
                        </CardActions>
                            </div>
                    </NestedCardContent>
                    </Card>
{/* 
                 <Card  style={{ border:"2px solid red",padding:"0px"}} >
                    <NestedCardContent>
                    <CardContent className="cardData" style={{ border:"2px solid red"}}>
                        <div style={{ width:"100%",height:"20px",display:"flex" ,justifyContent:"flex-end",border:"2px solid black",margin:"0px"}}>
                        <HtmlTooltip
                             title={
                                    <React.Fragment>
                                        <Typography color="black"><b>Book Details</b></Typography>
                                        <em>{this.props.bookDetails.Discription}</em>         
                                    </React.Fragment>
                                    }
                                >
                            <Button style={{ width:"2px", backgroundColor:"lightgrey" }}>...</Button>
                        </HtmlTooltip>
                        </div>
                        <div style={{ width:"100%",border:"2px solid blue"}}>
                            <div id= "container" style={{ marginTop:"20px",height:"100px",border:"2px solid green"}}>
                                <img  src={this.props.bookDetails.src} className="image" alt=""/>
                            </div>
                            <div className="book_Detail" style={{ border:"2px solid purple"}}>
                                <span>Book Name:Harry Potter</span>
                                <span>Auther:{this.props.bookDetails.Auther}</span>
                                <span>Price:{this.props.bookDetails.price}</span>
                            </div>
                        </div>
                      
                        <CardActions>
                            <Button type="submit" variant="contained" size="50%" style={{ backgroundColor: 'Maroon', color: "white" }} >
                                Add to Cart
                            </Button>
                        </CardActions>
                    </CardContent>
                    </NestedCardContent>
                </Card> */}
            </div> 
        )
    }

}