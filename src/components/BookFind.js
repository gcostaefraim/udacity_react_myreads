import React, {Component} from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import BookDetails from "./BookDetails";

class BookFind extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         books: [],
    //         termSearch : ''
    //     }
    // }
    state = {
        books: [],
        termSearch : ''
    }

    componentDidMount() {
        BooksAPI.search('A', 50).then(books => {
            this.setState({books})
        })
        console.log('Entrou AQUI')
    }

    updateBook = (book) => {
        this.setState((prevBooks) => {
            books: () => prevBooks.map((mBook) =>  mBook.id === book.id ? mBook : book)
        })
        BooksAPI.update(book, book.shelf)
    }

    handleChange = (term) => this.setState({termSearch: term})

    search = () => {
        BooksAPI.search(this.state.termSearch, 50).then(books => {
            this.setState({books})
        })
    }

    render() {
        return (
            <div className="c_BookFind">
                <div className="row">
                    <div className="col-sm-7"/>
                    <div className="col-sm-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search..."
                            value={this.state.termSearch}
                            onChange={event => this.handleChange(event.target.value)}
                        />
                    </div>
                    <div className="col-sm-2">
                        <button className="btn btn-success" onClick={this.search}>Buscar</button>
                    </div>
                    <div className="col-sm-12">
                        <h4 className="text-info">All Books</h4>
                        <div className="row" style={{borderTop: '1px solid #ccc', margin: 1, paddingTop: 10}}>
                            {this.state.books.map((book) => (
                                <div key={book.id} className="col-sm-3">
                                    <BookDetails book={book} onUpdateBook={this.updateBook}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default BookFind