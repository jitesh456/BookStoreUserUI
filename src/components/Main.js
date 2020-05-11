import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import BookCard from "./BookCard";
import booklogo from '../booklogo.png';
import ReactPaginate from 'react-paginate';
import Service from '../service/Service';
import image0 from '../assets/images/image0.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
			offset: 0,
			perPage: 8,
			currentPage: 0,
            booklist:[{ id: 0, src: image0, Auther: 'foo', price: 150 ,
            Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
            { id: 1, src: image1, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
            { id: 2, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
            { id: 3, src: image3, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
            { id: 4, src: image4, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
            { id: 5, src: image5, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
            { id: 6, src: image6, Auther: 'foo', price: 150, Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."}

        ]}

        this.handlePageClick=this.handlePageClick.bind(this);
    } 

    // componentDidMount(){   
    //     Service.getBookData().then((response)=>{
    //         console.log(response);
    //         this.setState({
    //         //    booklist:response.data.body
    //         })  
    //         this.receivedData();
    //         console.log(this.state.booklist)
    //     }).catch((error)=>{
    //     console.log(error)
    //     }) 
    // }

    receivedData() {
			  const data = this.state.booklist;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map( book =>{
                                return <BookCard
                                 price = {book.price}
                                 bookDetails = {book}
                                 />;
                            })
                            console.log(this.data)
              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                  postData
              })
          
  }
	
	handlePageClick=(e)=>{
			const selectedPage = e.selected;
			const offset = selectedPage * this.state.perPage;

			  this.setState({
				  currentPage: selectedPage,
				  offset: offset
			  }, () => {
				  this.receivedData()
			  });
	}

     componentDidMount(){
         this.receivedData(); 
     }

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
						<div>
							<div className="row">
								{	this.state.postData }
						   </div>
							<div className="pagination">
								<ReactPaginate
									previousLabel={"prev"}
									nextLabel={"next"}
									breakLabel={"..."}
									breakClassName={"break-me"}
									pageCount={this.state.pageCount}
									marginPagesDisplayed={2}
									pageRangeDisplayed={5}
									onPageChange={this.handlePageClick}
									containerClassName={"pagination"}
									subContainerClassName={"pages pagination"}
									activeClassName={"active"}
								/>
							</div>
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

