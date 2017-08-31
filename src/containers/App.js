import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import BookList from '../components/BookList'
import * as BooksAPI from '../utils/BooksAPI'
import BookFind from "../components/BookFind";
import NavTopBar from "./NavTopBar";
import NavSideBar from "./NavSideBar";

class App extends Component {


    constructor() {
        super();

        this.state = {
            myBooks: [],
            unlinkedBooks: []
        }

        this.MyBooks = {
            findById: (id) => this.state.myBooks.find((element) => element.id === id)
        }

    }

    myBookFindById = (id) => this.state.myBooks.find((element) => element.id === id)


    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({myBooks: books})




        });

    }

    updateBook = (book) => {
        this.setState((prevBooks) => {
            myBooks: () => prevBooks.map((mapBook) => mapBook.id === book.id ? mapBook : book)
        })
        BooksAPI.update(book, book.shelf);
    }

    render() {
        console.log("render")
        return (
            <div className="app">
                <header>
                    <NavTopBar/>
                </header>
                <div className="col-sm-3 col-md-2">
                    <NavSideBar/>
                </div>
                <div className="col-sm-9 col-md-10" style={{paddingTop: 70, paddingLeft: 30}}>
                    <Route exact path='/' render={() => (
                        <BookList
                            books={this.state.myBooks}
                            onUpdateBook={this.updateBook}
                        />
                    )}
                    />
                    <Route exact path='/find' render={() => (
                        <BookFind
                            myBooks={this.MyBooks}
                            onBooksRefresh={this.booksRefresh}
                            // onUpdateBook={this.updateBook}
                        />
                    )}
                    />
                </div>
            </div>
        )
    }
}

export default App;