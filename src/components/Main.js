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
import image0 from '../assets/images/image0.jpg';
import image1 from '../assets/images/image1.jpg';
import image2 from '../assets/images/image2.jpg';
import image3 from '../assets/images/image3.jpg';
import image4 from '../assets/images/image4.jpg';
import image5 from '../assets/images/image5.jpg';
import image6 from '../assets/images/image6.jpg';
import image7 from '../assets/images/image7.jpg';



export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 10,
            currentPage: 0,
            search:'',
            booklist: [ 
                { id: 0, src: image0, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 1, src: image1, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 2, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 3, src: image3, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 4, src: image4, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 5, src: image5, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 6, src: image6, Auther: 'foj', price: 150, Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 7, src: image7, Auther: 'fog', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 8, src: image1, Auther: 'fog', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 9, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 10, src: image3, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 11, src: image4, Auther: 'fog', price: 150,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE." },
                { id: 12, src: image0, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 13, src: image1, Auther: 'goo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 14, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 15, src: image3, Auther: 'goo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 16, src: image4, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 17, src: image5, Auther: 'goo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 18, src: image6, Auther: 'foj', price: 150, Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 19, src: image7, Auther: 'fog', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 20, src: image1, Auther: 'fog', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 21, src: image2, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 22, src: image3, Auther: 'foo', price: 150 ,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE."},
                { id: 23, src: image4, Auther: 'fog', price: 150,Discription:"It is known from archaeological evidence that a highly sophisticated urbanized culture—the Indus civilization—dominated the northwestern part of the subcontinent from about 2600 to 2000 BCE." }

            ],
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
        // Service.getBookData().then((response)=>{
        //     console.log(response);
        //     this.setState({
        //         booklist:response.data.body
        //     })  
        // this.receivedData();
        //     console.log(this.state.booklist)
        // }).catch((error)=>{
        // console.log(error)
        // })
        this.receivedData();
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

    filterData=(input)=>{
        console.log(input);
        const data = this.state.booklist
                .filter(x=>x.Auther.toLowerCase().indexOf(input.trim().toLowerCase())!==-1);
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
        this.filterData(e.target.value);
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
                        <input type="text" className="search" placeholder="Search ..." onChange={this.handleTextChange}/>
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


