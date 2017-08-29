import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import BookList from '../components/BookList'
import * as BooksAPI from '../utils/BooksAPI'
import BookFind from "../components/BookFind";
import Header from "./Header";

class App extends Component {

    constructor(){
        super();

        this.state = {
            myBooks: [],
            allkBooks: []
        }
    }

    componentDidMount() {
        BooksAPI.getAll().then((books) => {
            this.setState({myBooks: books})
        })
    }

    updateBook = (book) => {
        this.setState((prevBooks) => {
            myBooks: () => prevBooks.map((mapBook) => mapBook.id === book.id ? mapBook : book)
        })
        BooksAPI.update(book, book.shelf)
    }

    render() {
        return (
            <div className="app">
                <Header/>
                <Route exact path='/' render={() => (
                    <BookList
                        books={this.state.myBooks}
                        onUpdateBook={this.updateBook}
                    />
                )}
                />
                <Route exact path='/find' render={() => (
                    <BookFind
                         onBooksRefresh={this.booksRefresh}
                        // onUpdateBook={this.updateBook}
                    />
                )}
                />
            </div>
        )
    }
}

export default App;