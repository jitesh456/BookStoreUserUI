import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import BookCard from "./BookCard";
import booklogo from '../booklogo.png';
import ReactPaginate from 'react-paginate';
import TextField from '@material-ui/core/TextField';
import Service from '../service/Service';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 10,
            currentPage: 0,
            search:'',
            booklist: [ ],
            price: '',
            bookDetails: '',
            count:'',
        }
        this.handleTextChange=this.handleTextChange.bind(this)
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
        this.receivedData(); 
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

    filterData=(input)=>{
        console.log(input);
        const data = this.state.booklist
                .filter(x=>x.authorname.toLowerCase().indexOf(input.trim().toLowerCase())!==-1
                || x.name.toLowerCase().indexOf(input.trim().toLowerCase())!==-1);
        this.setState({count:data.length});
        console.log(data);
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map( book =>{
                          return <BookCard
                           price = {book.src}
                           bookDetails = {book}
                           />;
                      })
    
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })
      }

    handleTextChange=(e)=>{
        this.filterData(e.target.value);
    }

    render() {
        return (
            <div className="main" style={{border:"1px solid purple"}}>
                <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" width="55px" height="55px" /><span className="admin">Online Book Store</span>
                        <TextField style={{height:"50px",color:"maroon",marginLeft:"100px",width:"600px"}} placeholder="Search Here..." onChange={this.handleTextChange}/>
                    </div>
                </header>
                
                <main> 
                    <div>
                        <div>
                        <div style={{display:"flex",justifyContent:"center"}}>
                             <div  style={{marginTop:"5px", width:"86.5%",height:"60px" ,display:"flex"}} >
                             <div  style={{height:"60px" ,display:"flex",width:"50%"}} >
                             <h2>Books <span style={{fontSize:"14px",color:"grey"}}>({this.state.count} items)</span></h2>
                            </div> 
                            <div  style={{height:"0px" ,display:"flex",width:"50%"}} >
                            </div> 
                            </div> 
                         </div>
                            <div className="row">
                                {this.state.postData}
                            </div>
                        </div>
                    </div>
                </main>
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

