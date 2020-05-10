import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import image0 from '../assets/images/image0.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';
import BookCard from "./BookCard";
import booklogo from '../booklogo.png';

//import service from 'C:\Users\user\online_bookstore\src\service\Service.js';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booklist: [
                { id: 0, src: image0, Auther: 'foo', price: 150 ,
                Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 1, src: image1, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 2, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 3, src: image3, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 4, src: image4, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 5, src: image5, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 6, src: image6, Auther: 'foo', price: 150, Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 7, src: image7, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 8, src: image1, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 9, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 10, src: image3, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 11, src: image4, Auther: 'foo', price: 150,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE." },

            ]
        }
    }

    // componentDidMount(){
    //     Service.getBookData().then((responce)=>{
    //         console.log(responce);
    //         this.setState({
    //             booklist : responce.data
    //         })  
    //     }).catch((error)=>{
    //     console.log(error)
    //     }) 
    // }   


    render() {

        return (
            <div className="main">
                <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" width="55px" height="55px" /><span className="admin">Online Book Store</span>
                    </div>
                    <div className="admin_header">  </div>
                    <div className="admin_header">  </div>

                </header>
                <main style={{ marginTop: '4rem' }}>
                    <div className="container">

                        <div className="row">
                            {
                                this.state.booklist.map(book => {
                                    return <BookCard

                                        price={book.src}
                                        bookDetails={book}
                                    />;
                                })
                            }
                        </div>
                    </div>
                </main>
                <footer className='app_footer'>
                    <div className='admin_footer'>
                        <p> Online Book Store.All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main;

