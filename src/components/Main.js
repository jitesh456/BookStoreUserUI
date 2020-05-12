import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import BookCard from "./BookCard";
import booklogo from '../booklogo.png';
import ReactPaginate from 'react-paginate';
import Service from '../service/Service';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 8,
            currentPage: 0,
            booklist: [],
            price: '',
            bookDetails: '',
            count:'',
        }

        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        Service.getBookData().then((response)=>{
            console.log(response);
            this.setState({
                booklist:response.data.body
            })  
        this.receivedData();
            console.log(this.state.booklist)
        }).catch((error)=>{
        console.log(error)
        }) 
    }

    receivedData() {
        const data = this.state.booklist;
        this.setState({count:data.length});
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(book => {
            return <BookCard
                price={book.price}
                bookDetails={book}
            />;
        })
        console.log(this.data)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })

    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    }

    render() {

        return (
            <div className="main">
                <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" width="55px" height="55px" /><span className="admin">Online Book Store</span>
                    </div>
                </header>
                
                <main>
                    <div>
                        <div className="container">
                        <div style={{display:"flex",justifyContent:"center"}}>
                             <div  style={{ marginTop:"5px", width:"83%",height:"60px" ,display:"flex"}} >
                             <div  style={{height:"60px" ,display:"flex",width:"50%"}} >
                             <h2>Books<span style={{fontSize:"14px",color:"grey"}}>({this.state.count} items)</span></h2>
                            </div> 
                            <div  style={{height:"0px" ,display:"flex",width:"50%"}} >
                            </div> 
                            </div> 
                            
                         </div>
                            <div className="row">
                                {this.state.postData}
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
                        <p> © Online Book Store.All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main;

