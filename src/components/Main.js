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
import axios from 'axios';


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
            perPage: 8,
            currentPage: 0,
			selectedPage:1,
            search: '',
            booklist: [],
            bookName: [],
            price: '',
            bookDetails: '',
            sorting: '',
            search: '',
            sort:'',
            cartItem: [],
            counter: 0,
            profile: false,
            height:window.innerHeight,
            width:window.innerWidth,
            show:false
           
        }
        this.handleShowProfile = this.handleShowProfile.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this)
        this.handlePageClick = this.handlePageClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateDimensions=this.updateDimensions.bind(this);
        this.showSearchBar=this.showSearchBar.bind(this);
    }



    componentDidMount() {
        let statusCode=0
        if(localStorage.getItem("token") !== null){
        Service.getCartBook().then((response) => {
        this.setState({
        cartItem: response.data.body,
        counter: response.data.body.length,
        });
        this.addBookName(response.data.body);
        statusCode= response.status;
        if (statusCode == 200) {
        this.getBookData() }
        }).catch((error) => {
        console.log(error);
        
        })
        }
        {this.getBookData()}
        }  
        



    receivedData() {
        const data = this.state.booklist;
        const postData = data.map(book => {
            return <BookCard
                price={book.price}
                bookDetails={book}
                addFunction={this.handleAddCart.bind(this)}
            />;
        })
        this.setState({
            pageCount: Math.ceil(this.state.count / this.state.perPage),
            postData
        })
    }

    getBookData = () => {
        console.log(this.state.sort);
        console.log(this.state.search);
		Service.getBookData(this.state.search,this.state.sort,(this.state.selectedPage-1)).then(response=>{
                this.state.booklist=response.data.body.books;
				this.state.count=response.data.body.count;
                this.receivedData();
			}).catch(error=>{
				console.log(error);
            });
    }

    addBookName(object) {
        let name;
        for (var i = 0; i < object.length; i++) {
            name = object[i].name;
            this.state.bookName.push(name);
        }
        localStorage.setItem("bookName", JSON.stringify(this.state.bookName));
    }

    handleAddCart(object) {
        this.setState({
            counter: this.state.counter + 1,
            bookName: object.bookName,
        });
    }

    updateDimensions() {
        this.setState({
          height: window.innerHeight, 
          width: window.innerWidth
        });
    }

    showSearchBar=()=>{
        if(this.state.show){
            document.getElementById("ser").className="search_nav";
        }else{
            document.getElementById("ser").className="responsive_search";
        }
        this.setState({show:!this.state.show});
    }

    handlePageClick = (e, page) => {
		this.state.selectedPage = page;
		this.setState({ currentPage: this.state.selectedPage}, () => { this.getBookData();});
	}
    
	handleChange(event) {
        this.state.sort=event.target.value;
        this.getBookData();
    }

    handleTextChange = (e) => {
        this.state.search = e.target.value;
        this.getBookData();
        e.preventDefault();
    }

    onPageChange(pageIndex) {
        alert(pageIndex);
    }

    openDialog = () => {
        this.setState({ isDialogOpen: true })
    }

    handleClose = () => this.setState({ isDialogOpen: false })

    displayCartIcon() {
        if (localStorage.getItem("token") == null) {
            return (
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
        window.addEventListener("resize", this.updateDimensions);
        let search=[];
        if(this.state.width<375){
            search=<div id="ser" className="search_nav">
                <div className="searchIcon">
                    <SearchIcon id="button" className="searchIcon" onClick={()=>{this.showSearchBar()}} />
                </div>
                <InputBase placeholder="Search" className="inputbase" onChange={this.handleTextChange}/>
            </div>
        }
        else{
            search=<div id="ser" className="search">
            <div className="searchIcon">
                <SearchIcon id="button" />
            </div>
            <InputBase placeholder="Search" className="inputbase" onChange={this.handleTextChange}/>
        </div>
        }
        
        return (
            <div >
                <AppBar id="app-header">

                    <div className="admin_header">
                        <img src={booklogo} alt="asd" className="bk_image" />
                        <span className="admin">BB Store</span>
                    </div >
                    {search}
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
                            <PersonOutlineIcon style={{ color: "white", cursor: "pointer" }} onClick={this.handleShowProfile} />
                        </div>
                        <div className="profile-div">
                            {this.state.profile && <Profile />}
                        </div>
                    </div>
                </AppBar>
                <div className="main1">
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
                                            <MenuItem value="authorName">Authorname(A-Z)</MenuItem>
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

