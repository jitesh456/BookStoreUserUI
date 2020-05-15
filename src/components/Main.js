import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import BookCard from "./BookCard";
import booklogo from '../booklogo.png';
import ReactPaginate from 'react-paginate';
import Service from '../service/Service';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

export default class Main extends Component {
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
            count:0,
            sorting:'',
        }
        this.handleTextChange=this.handleTextChange.bind(this)
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

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

    sortedData(input){
        const sortingValue=input
        Service.getSortedBook(sortingValue).then((response)=>{
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

    handleChange(field, event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.sorting)
        this.sortedData()
        }

    filterData=()=>{
        console.log(this.state.input);
        const data = this.state.booklist
                .filter(x=>x.authorname.toLowerCase().indexOf(this.state.input.trim().toLowerCase())!==-1);
        this.setState({count:data.length});
        console.log(data);
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map( book =>{
                          return <BookCard
                           price = {book.price}
                           bookDetails = {book}
                           />;
                      })
    
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })
      }

    handleTextChange=(e)=>{
        this.state.input=e.target.value;
        this.filterData();
    }

    handleChange(event) {
        this.sortedData(event.target.value)
        }

    render() {
        return (
            <div className="main">
                <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">Online</span>
                        <span className="admin">Book</span>
                        <span className="admin">Store</span>
                        <input type="text" className="search" placeholder="  Search ..." onChange={this.handleTextChange}/>
                    </div>
                </header>
                
                <main> 
                    <div>
                        <div className="book_cont">
                            <div className="book">
                                <div  className="book_count" >
                                    <h2>Books <span className="count"> ({this.state.count} items)</span></h2>
                                </div>
                                <div className="book_sort">
                                        <FormControl variant="outlined"  >
                                        <InputLabel id="demo-simple-select-outlined-label" ></InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            onChange={this.handleChange}
                                            id="demo-simple-select-outlined"
                                            name="sorting"
                                            placeholder="Sort By"
                                            className="card_content category"
                                        >
                                        <MenuItem value=""><em>None</em></MenuItem>
                                        <MenuItem value="authorname">Authorname</MenuItem>
                                        <MenuItem value="price">Price:Low to High</MenuItem>
                                        <MenuItem value="category">Category</MenuItem>
                                        </Select>
                                    </FormControl>
                                </div>
                            </div> 
                        </div>
                        <div style={{display:"flex",justifyContent:"center"}}>
                            <div className="row">
                                    {this.state.postData}
                            </div>
                        </div>
                    </div>
                </main>
                <footer className='app_footer'>
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
                <div className='admin_footer'>
                        <p> © Online Book Store.All Rights Reserved.</p>
                </div>
                </footer>
            </div>
        );
    }
}


