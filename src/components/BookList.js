import React, {Component} from 'react'
import BookShelf from './BookShelf'
import escapeRegExp from 'escape-string-regexp'

class BookList extends Component {

    state = {
        queryFilter: ''
    }


    search = (term) => this.setState({queryFilter: term})

    render() {

        let books

        if (this.state.queryFilter) {
            const match = new RegExp(escapeRegExp(this.state.queryFilter.trim()), 'i')
            books = this.props.books.filter(book => match.test(book.title))
        } else {
            books = this.props.books
        }

        const booksCurrentlyReading = books.filter(value => value.shelf === 'currentlyReading')
        const bookswantToRead = books.filter(value => value.shelf === 'wantToRead')
        const booksRead = books.filter(value => value.shelf === 'read')

        return (

            <div className="c_BookList">
                <div className="row">
                    <div className="col-sm-8"/>
                    <div className="col-sm-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={this.state.queryFilter}
                            onChange={event => this.search(event.target.value)}/>
                    </div>
                    <div className="col-sm-12">

                        <BookShelf books={booksCurrentlyReading} title="Currently Reading" onUpdateBook={this.props.onUpdateBook}/>

                        <BookShelf books={bookswantToRead} title="Want to Read" onUpdateBook={this.props.onUpdateBook}/>

                        <BookShelf books={booksRead} title="Read" onUpdateBook={this.props.onUpdateBook}/>

                    </div>
                </div>
            </div>
        )
    }
}

export default BookList;

