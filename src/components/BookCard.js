import React, { Component } from 'react';
// import '../css/BookCard.css';
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
            <div className="cardofbook" style={{ marginTop: '20px' }}>

                <Card className="baseCard" >
                    <CardContent className="cardData">
                        <div>
                            <div id= "container">
                                <img  src={this.props.bookDetails.src} className="image" />
                            </div>
                            <div className="book_Detail">
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
                </Card>
            </div>
        )
    }

}