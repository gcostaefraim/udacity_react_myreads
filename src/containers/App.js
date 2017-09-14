import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import BookList from './BookList';
import * as BooksAPI from '../utils/BooksAPI';
import BookSearch from './BookSearch';
import NavTopBar from '../components/NavTopBar';
import NavSideBar from '../components/NavSideBar';


export default class App extends Component {

    constructor() {
        super();

        this.state = {

            myBooks: {
                list: [],
                findById: this._myBookSearchById,
                reload: this._myBookReload,
                update: this._myBookUpdate
            },
        }

    }

    _myBookSearchById = (id) => this.state.myBooks.list.find((element) => element.id === id);

    _myBookReload = () => BooksAPI.getAll().then((books) => {
        this.setState((prev) => {
            prev.myBooks.list = books;

            return {
                myBooks: prev.myBooks
            }
        })
    });

    _myBookUpdate = (book) => {
        this.forceUpdate()
        BooksAPI.update(book, book.shelf);
    }


    componentDidMount() {
        this.state.myBooks.reload();
    }


    render() {

        return (
            <div className="app">
                <header>
                    <NavTopBar/>
                </header>
                <div className="col-sm-3 col-md-2">
                    <NavSideBar/>
                </div>
                <div className="col-sm-9 col-md-10" style={{paddingTop: 70, paddingLeft: 30}}>

                    <Route
                        exact
                        path="/"
                        render={() => (
                            <BookList
                                books={this.state.myBooks.list}
                                onUpdateBook={this.state.myBooks.update}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/search"
                        render={() => (
                            <BookSearch myBooks={this.state.myBooks}/>
                        )}

                    />
                </div>
            </div>
        )
    }
}