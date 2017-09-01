import React, {Component} from 'react';

class BookDetails extends Component {


    update = (book, shelf) => {
        book.shelf = shelf
        this.props.onUpdateBook(book)
    }


    render() {
        const {book} = this.props;

        return (
            <div className="c_BookDetails text-center">
                <div>
                    <img src={book.imageLinks.thumbnail} className="img-thumbnail" alt=""/>
                    <h5><small> {book.title} </small></h5>
                    <div className="book-shelf-changer">
                        <select value={book.shelf !== undefined ? book.shelf : ''} className="form-control" onChange={event => this.update(book, event.target.value)}>
                            <option value="NULL" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="">None</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookDetails;