import React, {Component} from 'react'
import BookDetails from './BookDetails'

class BookShelf extends Component {
    render() {

        const {books, title, onUpdateBook} = this.props;

        return (
            <div className="c_BookShelf">
                <h4 className="text-info">{title}</h4>
                <div className="row" style={{borderTop: '1px solid #ccc', margin: 1, paddingTop: 10}}>
                    {books.map((book) => (
                        <div key={book.id} className="col-sm-3">
                            <BookDetails book={book} onUpdateBook={onUpdateBook}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default BookShelf;