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
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 8,
            currentPage: 0,
            search:'',
            booklist: [ ],
            bookName:[],
            price: '',
            bookDetails: '',
            count:0,
            sorting:'',
            input:'',
            cartItem:[],
            counter:0
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
        if(localStorage.getItem("count")!==null)
        {
        this.setState({
            counter:parseInt(localStorage.getItem("count")),
            cartItem:JSON.parse(localStorage.getItem("bookData")),
            bookName:JSON.parse(localStorage.getItem("bookName"))
        });
        
        }
       
    }

    sortedData(input){
        const sortingValue=input;
        console.log("Sorted Data");
        Service.getSortedBook(sortingValue).then((response)=>{
            console.log(response);
            this.setState({
                booklist:response.data.body
            })
            this.state.input.length>0?this.filterData():this.receivedData();
            console.log(this.state.booklist)
        }).catch((error)=>{
        console.log(error)
        })
    }

    receivedData() {
        
       var data = this.state.booklist;
        
        this.setState({count:data.length});
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(book => {
            return <BookCard
                price={book.price}
                bookDetails={book}
                addFunction={this.handleAddCart.bind(this)}
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
        },()=>{
            this.state.input.length>0?this.filterData():this.receivedData();
        } );
        
    }
    handleAddCart(object)
    {
        const book={
            "name":object.name,
            "authorname":object.authorname,
            "price":object.price,
            "bookcover":object.bookcover,
            "maxquantity":object.quantity,
            "quantity":1,
            "isbn":object.isbn
        }
        this.state.cartItem.push(book); 
        this.state.bookName.push(object.name);
        this.setState({counter:this.state.cartItem.length}) ;
        localStorage.setItem("count",JSON.stringify(this.state.counter+1)) ;
        localStorage.setItem("bookName",JSON.stringify(this.state.bookName));
        localStorage.setItem("bookData",JSON.stringify(this.state.cartItem));
        console.log(this.state.cartItem);
    }

    handleChange(field, event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.sorting)
        this.sortedData()
        }

    filterData=()=>{
        console.log(this.state.input);
        const data = this.state.booklist
                .filter(x=>x.authorname.toLowerCase().indexOf(this.state.input.trim().toLowerCase())!==-1 ||
                x.name.toLowerCase().indexOf(this.state.input.trim().toLowerCase())!==-1);
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
        e.preventDefault();
    }

    handleChange(event) {
        this.sortedData(event.target.value)
        }

    render() {
        return (
            <div >
                <header className="app_header">
                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>  
                    </div >
                    <div className="search">
                    <div className="searchIcon">
                    <SearchIcon/>
                    
                    </div>
                    <InputBase
                        placeholder=" Search"
                        onChange={this.handleTextChange}
                    />
                    
                  </div>
                  <div style={{marginLeft:"15%",marginTop:"1%"}}>
                  
                    <a style={{color:"white"}} link href="/cart">
                        <ShoppingCartIcon shoppingitem={this.state.cartItem}/>
                    </a>
                    {this.state.counter}
                    </div>
                </header>              
                    <div className="main">
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
                                            className="card_content"
                                            defaultValue="None"
                                        >
                                        <MenuItem value="None"><em>None</em></MenuItem>
                                        <MenuItem value="authorname">Authorname(A-Z)</MenuItem>
                                        <MenuItem value="price">Price:Low to High</MenuItem>
                                        <MenuItem value="category">Category(A-Z)</MenuItem>
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
