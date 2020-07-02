import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import booklogo from '../booklogo.png';
import Service from '../service/Service';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Divider from '@material-ui/core/Divider';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import StarIcon from '@material-ui/icons/Star';
import '../css/ProductReview.css';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import history from "./history";

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
export default class ProductReview extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            rating:'',
            bookInfo:'',
            feedback:'',
            feedbacks:[],
            readMore:true,
        }
    
    }

    componentDidMount(){
        const book=JSON.parse(localStorage.getItem("bookInfo"));
        this.setState({
            bookInfo:book
        });
        this.getFeedback(book);
    }
    handleChange(field,event){
        this.setState({ [event.target.name]: event.target.value });
    }

    getFeedback(object){
        Service.getFeedback(object.isbn).then((response)=>{ 
            this.setState({
                feedbacks:response.data.body
            });
        }).catch((error)=>{
            console.log(error);
        });
    }

    changePage = () => {
        history.push("/");
    }

    addFeedback(){
        
            var data={
                rating:this.state.rating,
                feedbackMessage:this.state.feedback,
                isbn:this.state.bookInfo.isbn
            };

            Service.addFeedback(data).then((response)=>{
                console.log(response.data.body);
            }).catch((error)=>{
                console.log(error);
            })
    
            this.setState({
                rating:'',
                feedback:''
            });
            this.getFeedback(this.state.bookInfo);
    }

    handleReadMore(){
        this.setState({readMore:false});
        return(
            this.displayBookDetail()
        );
    }

    handleReadLess(){
        this.setState({readMore:true});
        return(
            this.displayBookDetail()
        );
    }

    getUserFeedback(){
        let flag=false;
        var bookId=JSON.parse(localStorage.getItem("bookInfo")).id;
        Service.getUserFeedback(bookId).then(response=>{
            console.log(response.data.body[0].feedbackMessage.length);
           if(response.data.body[0].feedbackMessage.length>0){
               console.log("inside if");
               flag =true;
           }   
        }).catch((error)=>{
            console.log(error); 
        });
        return flag
    }
    displayBookDetail(){
        let bookDiscription=[];
        if(this.state.readMore){
           var text=String(this.state.bookInfo.bookDetails);
            
           text=text.split(" ")
            
            bookDiscription=text.slice(0,40).join(" ");
            return(<p>{bookDiscription}...<span className="read-more" onClick={()=>{this.handleReadMore(this)}}>Read More</span></p>)
        }
        if(!this.state.readMore){
            bookDiscription=this.state.bookInfo.bookDetails;
            return(<p>{bookDiscription}<span className="read-more" onClick={()=>{this.handleReadLess(this)}}>Read Less</span></p>)
        }
        
    
    }
  
    render() {
        let displayFeedback;
        if(this.state.feedbacks.length>0)
        {
           displayFeedback =this.state.feedbacks.map(iteam=>{
            
                return (
                    <div className="product-feedback-container">                                        
                        <div style={{display:"flex"}}>
                            <div className="customer-profile-icon">
                            <span className="customer-profile-icon-content">{iteam.name.substr(0,1)}</span>
                            </div>
                            <div className="customer-feedback-name">
                                <span className="product-review-book-name-size">{iteam.name}</span>
                            </div>
                        </div>
                        <Rating
                            name="simple-controlled"
                            value={iteam.rating}
                            readOnly="true"
                            className="product-customer-rating"
                            />
                            <p className="product-feedback product-customer-rating">{iteam.feedbackMessage}</p>    
                    </div> 
                    
                );
            });
        }
        
        if(this.state.feedbacks.length===0){
            displayFeedback=<div className="product-feedback-container product-feedback"> <span>No Feedback available for this book</span></div>
        }
        let feedbackForm=[];
        if(localStorage.getItem("token") !== null){
            feedbackForm= 
                <div className="customer-feedback-form product-review-font">
                        <span className="product-review-bookdetail-size">Overall rating</span>
                        <Rating
                                name="rating"
                                value={this.state.rating}
                                onChange={this.handleChange.bind(this, 'rating')}
                                />
                        <ThemeProvider>
                        <TextField
                            id="outlined-multiline-static"
                            label="Feedback"
                            multiline
                            color="secondary"
                            name="feedback"
                            rows={4}
                            onChange={this.handleChange.bind(this, 'feedback')}
                            variant="outlined"
                            style={{width:"92.5%",backgroundColor:"white"}}
                            />
                        </ThemeProvider>    
                        <div className="product-feedback-button-container">
                            <Button id="productfeedbackbutton" onClick={this.addFeedback.bind(this)}>Submit</Button>
                        </div>
                </div>
            
        }
        console.log(this.getUserFeedback());
        if(this.getUserFeedback()){
            feedbackForm=[];
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

                        <Typography color="inherit" href="/" style={{cursor:"pointer"}} onClick={this.changePage}> Home </Typography>
                        <Typography color="textPrimary">Feedback</Typography>
                    </Breadcrumbs>
                </div>
                <div className="product-review-main">
                    <div className="product-review-product-info">
                        <div id="productreviewimage">
                        <img style={{height:"100%",width:"100%"}} src={`http://localhost:8090/admin/downloadfile/${this.state.bookInfo.bookCover}`} alt="book" />
                        </div>
                        <div className="product-info">
                            < div className="product-review-book-info">
                                <div style={{ height:"150px", display:"flex",justifyContent:"space-evenly",flexDirection:"column"}}>
                                    <span className="product-review-book-name product-review-font" >{this.state.bookInfo.name}</span>
                                    <span className="product-review-author-name product-review-font">by {this.state.bookInfo.authorName}</span>
                                    <div className="product-rating">
                                    <span className="product-rating-count product-review-font"> 4.4 </span>
                                    <div className="product-review-rating-icon product-review-font"> <StarIcon id="iconSize"/></div>
                                    </div>
                                    <span className="product-review-book-price product-review-font">Rs. {this.state.bookInfo.price}</span>
                                </div>    
                                <Divider/>
                                <span className="product-review-bookdetail product-review-font">Book Details:</span>
                                   <p className="product-review-bookdetail-size product-review-font">{this.displayBookDetail()}</p>    
                                <Divider/>
                                
                                <span className="customer-feedback product-review-font">Customer Feedback</span>
                                    {feedbackForm}                        
                            </div>  
                            {displayFeedback} 
                        </div>
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
