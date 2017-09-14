import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class BookDetails extends Component {

    constructor(props) {
        super(props)
        console.log(this.props.teste)
    }

    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
    }


    update = (book, shelf) => {
        book.shelf = shelf
        this.props.onUpdateBook(book)
    }


    render() {
        const {book} = this.props;

        return (
            <div className="c_BookDetails text-center">
                <div>
                    <img src={book.imageLinks === undefined ? '#' : book.imageLinks.thumbnail} className="img-thumbnail" alt=""/>
                    <a href={book.previewLink} target='_blank'><h5><small> {book.title} </small></h5></a>

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
