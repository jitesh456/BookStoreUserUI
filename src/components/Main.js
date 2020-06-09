import React, { Component } from 'react';
import '../css/BookCard.css';
import '../css/Main.css';
import '../css/Pagination.css';
import '../css/Profile.css'
import Profile from "./Profile";
import BookCard from "./BookCard";
import booklogo from '../booklogo.png';
import Service from '../service/Service';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple } from '@material-ui/core/colors';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import Pagination from '@material-ui/lab/Pagination';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AppBar from '@material-ui/core/AppBar';
import DialogBox from "./DialogBox";

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

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDialogOpen: false,
            offset: 0,
            perPage: 8,
            currentPage: 0,
            search: '',
            booklist: [],
            bookName: [],
            price: '',
            bookDetails: '',
            sorting: '',
            input: '',
            cartItem: [],
            counter: 0,
            profile: false,
        }
        this.handleShowProfile = this.handleShowProfile.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }


    componentDidMount() {

        Service.getBookData().then((response) => {
            console.log(response);
            this.setState({
                booklist: response.data.body
            })
            this.receivedData();
            console.log(this.state.booklist)
        }).catch((error) => {
            console.log(error)
        })

        Service.getCartBook().then((response)=>{
            this.setState({cartItem:response.data.body,
            counter:response.data.body.length
        
            });
            this.addBookName(response.data.body);
            console.log(response.data.body);
           

        }).catch((error)=>{
            console.log(error);
            
        })            
    }

    addBookName(object){
        let name;
        for(var i=0;i<object.length;i++){
            name=object[i].name;
            this.state.bookName.push(name);
    }
    console.log("Book Names");
    localStorage.setItem("bookName", JSON.stringify(this.state.bookName));
    }

    sortedData(input) {
        const sortingValue = input;
        console.log("Sorted Data");
        Service.getSortedBook(sortingValue).then((response) => {
            console.log(response);
            this.setState({
                booklist: response.data.body
            })
            this.state.input.length > 0 ? this.filterData() : this.receivedData();
            console.log(this.state.booklist)
        }).catch((error) => {
            console.log(error)
        })
    }

    receivedData() {

        var data = this.state.booklist;

        this.setState({ count: data.length });
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(book => {
            return <BookCard
                price={book.price}
                bookDetails={book}
                addFunction={this.handleAddCart}
            />;
        })
        console.log(this.data)
        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })

    }

    handlePageClick = (e, page) => {
        const selectedPage = page;
        const offset = selectedPage * this.state.perPage / 2;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.state.input.length > 0 ? this.filterData() : this.receivedData();
        });
        console.log(page);
        console.log(offset);
    }

    handleAddCart(object) {
        this.setState({ counter: this.state.counter+1
        });
        console.log(this.state.cartItem);
    }
    

    handleChange(field, event) {
        this.setState({ [event.target.name]: event.target.value })
        console.log(this.state.sorting)
        this.sortedData()
    }

    filterData = () => {
        console.log(this.state.input);
        const data = this.state.booklist
            .filter(x => x.authorname.toLowerCase().indexOf(this.state.input.trim().toLowerCase()) !== -1 ||
                x.name.toLowerCase().indexOf(this.state.input.trim().toLowerCase()) !== -1);
        this.setState({ count: data.length });
        console.log(data);
        const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
        const postData = slice.map(book => {
            return <BookCard
                price={book.price}
                bookDetails={book}
            />;
        })

        this.setState({
            pageCount: Math.ceil(data.length / this.state.perPage),
            postData
        })
    }

    handleTextChange = (e) => {
        this.state.input = e.target.value;
        this.filterData();
        e.preventDefault();
    }

    handleChange(event) {
        this.sortedData(event.target.value)
    }

    onPageChange(pageIndex) {
        alert(pageIndex);
    }

    openDialog = () => {
        this.setState({ isDialogOpen: true })
        console.log(this.state.isDialogOpen);
    }

    handleClose = () => this.setState({ isDialogOpen: false })


    displayCartIcon() {
        if (localStorage.getItem("token") == null) {
            return (
                // <a href="/">
                //     <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                // </a>
                <ShoppingCartOutlinedIcon style={{ color: "white" }} onClick={this.openDialog} />

            );
        }
        return (
            <a href="/cart">
                <ShoppingCartOutlinedIcon style={{ color: "white" }} />
            </a>
        );
    }

    handleShowProfile(e) {
        let show = this.state.profile;
        this.setState({
            profile: !show
        })

    }

    render() {
        return (
            <div >

                <AppBar id="app-header">

                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>
                    </div >
                    <div className="search">
                        <div className="searchIcon">
                            <SearchIcon />

                        </div>
                        <InputBase
                            placeholder=" Search"
                            onChange={this.handleTextChange}
                        />
                    </div>
                    <div className="shoppingcart">
                        <div className="shooping_carticon" >
                            {this.displayCartIcon()}
                            <DialogBox DialogOpen={this.state.isDialogOpen}
                                DialogClose={this.handleClose} />
                        </div>
                        <div className="cart_itemcount">
                            {this.state.counter}
                        </div>
                    </div>
                    <div className="profile">
                        <div className="profile-Icon">
                            <PersonOutlineIcon style={{ color: "white" }} onClick={this.handleShowProfile} />
                        </div>
                        <div className="profile-div">
                            {this.state.profile && <Profile />}
                        </div>
                    </div>


                </AppBar>
                <div className="main">
                    <div className="book_cont">
                        <div className="book">
                            <div className="book_count" >
                                <h2>Books <span className="count"> ({this.state.count} items)</span></h2>
                            </div>
                            <div className="book_sort">
                                <ThemeProvider>
                                    <FormControl variant="outlined" color="secondary" >
                                        <InputLabel id="demo-simple-select-outlined-label" ></InputLabel>
                                        <Select
                                            labelId="demo-simple-select-outlined-label"
                                            onChange={this.handleChange}
                                            id="demo-simple-select-outlined"
                                            name="sorting"
                                            placeholder="Sort By"
                                            className="card_content"
                                            defaultValue="category"
                                        >
                                            <MenuItem value="authorname">Authorname(A-Z)</MenuItem>
                                            <MenuItem value="price">Price:Low to High</MenuItem>
                                            <MenuItem value="category">Category(A-Z)</MenuItem>
                                        </Select>
                                    </FormControl>
                                </ThemeProvider>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <div className="row">
                            {this.state.postData}
                        </div>
                    </div>
                </div>
                <footer className='app_footer'>
                    <div className="pagination">
                        <Pagination
                            activePage={this.state.currentPage}

                            itemsCountPerPage={this.state.perPage}

                            count={this.state.pageCount}

                            onChange={this.handlePageClick}
                            ariant="outlined" shape="rounded" />
                    </div>
                    <div className='admin_footer'>
                        <p> © Bug Busters Store.All Rights Reserved.</p>
                    </div>
                </footer>
            </div>

        );
    }
}
