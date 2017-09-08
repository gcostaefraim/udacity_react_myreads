import React, {Component} from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import BookDetails from './BookDetails'
import Spinner from 'react-spinkit'
import {Debounce} from 'react-throttle'

class BookSearch extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            termSearch: '',
            loading: false,
        }
    }

    updateBook = (book) => {
        BooksAPI.update(book, book.shelf).then((result) => {
            console.log(result)
            this.props.myBooks.reload();
            console.log("Atualizou Livro")
        })
    }


    search = (e) => {
        const term = e.target.value

        this.setState({termSearch : term})
        this.setState({books: []})

        if (term.trim().length > 0) {

            this.setState({loading: true})

            BooksAPI.search(term, 50).then((books) => {
                if (books.length > 0) {

                    books = books.map((mapBook) => {
                        const myBook = this.props.myBooks.findById(mapBook.id);
                        mapBook.shelf = myBook ? myBook.shelf : undefined;
                        return mapBook
                    })

                    this.setState({books: books})

                }
                this.setState({loading: false})
            })
        }
    }

    render() {

        const noResult = !this.state.loading && this.state.termSearch.length > 0 && this.state.books.length === 0;
        const noSearch = !this.state.loading && this.state.termSearch.length === 0 && this.state.books.length === 0;

        return (
            <div className="c_BookSearch">
                <div className="row">
                    <div className="col-sm-8"/>
                    <div className="col-sm-4">
                        <Debounce time="400" handler='onChange'>
                            <input type="text" className='form-control' placeholder='Search' onChange={this.search}/>
                        </Debounce>
                    </div>
                    <div className="col-sm-12">
                        <h4 className="text-info">All Books</h4>
                        <div className="row" style={{borderTop: '1px solid #cccccc', margin: 1, paddingTop: 10}}>
                            <If condition={this.state.loading}>
                                <div className="col-sm-12" style={{marginLeft: '50%'}}>
                                    <Spinner name="cube-grid" color="#5bc0de"/>
                                </div>
                            </If>
                            <If condition={noResult}>
                                <h3><strong>OPS!</strong> No results found</h3>
                            </If>
                            <If condition={noSearch}>
                                <h3>Search for books by typing terms</h3>
                            </If>

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

        console.log('--> Renderizou BookSearch.js')
    }
}

const If = ({condition, children}) => condition && children ? children : false


// const If = ({ test, children }) => (test ? children : false);


export default BookSearch
