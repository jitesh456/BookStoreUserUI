import React, { Component } from 'react';
import '../css/BookCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';

export default class BookCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }



    render() {
        return (
            <div className="cardofbook" style={{ marginTop: '25px' }}>

                <Card className="baseCard" >
                    <CardContent className="cardData">
                        <div className="firstPart">

                            <img src={this.props.bookDetails.bookcover} className="image" />
                        </div>
                        <div ClassName="secondPart">
                            <div className="book_Detail">
                                <div style={{ fontSize: 17 },{fontWeight: 600}}>{this.props.bookDetails.name}</div>
                                <div style={{ fontSize: 12 }}> By,{this.props.bookDetails.auther}</div>
                                <div style={{ fontSize: 13 }} classNme="price">Price:{this.props.bookDetails.price}</div>
                            </div>
                            <CardActions>
                                <div className="buttonArea">
                                    <Button type="submit" variant="contained" size="45%" style={{ backgroundColor: 'Maroon', color: "white" }} >
                                        Add to Cart
                                 </Button>
                                </div>
                            </CardActions>

                        </div>

                    </CardContent>
                </Card>
            </div>
        )
    }

}