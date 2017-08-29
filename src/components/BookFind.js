import React, {Component} from 'react'
import * as BooksAPI from '../utils/BooksAPI'
import BookDetails from './BookDetails'
import AutoComplete from './AutoComplete'

class BookFind extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         books: [],
    //         termSearch : ''
    //     }
    // }
    constructor(props){
        super(props)
        this.state = {
            books: [],
            termSearch : '',
        }
    }

    updateBook = (book) => {
        BooksAPI.update(book, book.shelf).then((result) => {
            console.log(result)
        })
    }


    search = (term) => {
        if(term.trim().length > 0) {
            BooksAPI.search(term, 50).then((books) => {
                this.setState({books: books.error === undefined ? books : []})
            })
        }
    }

    render() {
        return (
            <div className="c_BookFind">
                <teste />
                <div className="row">
                    <div className="col-sm-7"/>
                    <div className="col-sm-5">
                        <AutoComplete onSearch={this.search}/>
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


class teste extends Component{
    render(){
        return(
            <h1>Olá teste</h1>
        )
    }
}


export default BookFind
