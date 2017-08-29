import React, {Component} from 'react'
import BookShelf from './BookShelf'
import escapeRegExp from 'escape-string-regexp'
import {Link} from 'react-router-dom'

class BookList extends Component {

    state = {
        queryFilter: ''
    }


    search = term => this.setState({queryFilter: term})

    render() {
        // DESCOMPACTANDO OBJETOS. ISSO É UMA BOA PRÁTICA PARA PERFORMANCE
        const {queryFilter} = this.state
        const {onUpdateBook} = this.props

        let books
        if (queryFilter) {
            const match = new RegExp(escapeRegExp(queryFilter.trim()), 'i')
            books = this.props.books.filter(book => match.test(book.title))
        } else {
            books = this.props.books
        }

        const booksCurrentlyReading = books.filter(value => value.shelf === 'currentlyReading')
        const bookswantToRead = books.filter(value => value.shelf === 'wantToRead')
        const booksRead = books.filter(value => value.shelf === 'read')

        console.log(books)

        return (
            <div className="c_BookList">
                <div className="row">
                    <div className="col-sm-8"/>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={queryFilter}
                            onChange={event => this.search(event.target.value)}/>
                    </div>
                    <div className="col-sm-12">
                        <BookShelf books={booksCurrentlyReading} title="Currently Reading" onUpdateBook={onUpdateBook}/>
                        <BookShelf books={bookswantToRead} title="Want to Read" onUpdateBook={onUpdateBook}/>
                        <BookShelf books={booksRead} title="Read" onUpdateBook={onUpdateBook}/>
                        {/*<button className="btn btn-circle btn-float">+</button>*/}
                        <Link
                            to='/find'
                            className="btn btn-circle btn-float">+</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookList;

