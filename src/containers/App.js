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
            myBooks: []
        }

    }

    _myBookFindById = (id) => this.state.myBooks.find((element) => element.id === id);

    _myBookReload = () => BooksAPI.getAll().then((books) => {
        this.setState({
            myBooks: books
        })
    });

    _myBookUpdate = (book) => {
        BooksAPI.update(book, book.shelf).then(() => this._myBookReload());
    }


    componentDidMount() {
        this._myBookReload();
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
                                books={this.state.myBooks}
                                onUpdateBook={this._myBookUpdate}
                            />
                        )}
                    />

                    <Route
                        exact
                        path="/search"
                        render={() => (
                            <BookSearch onReload={this._myBookReload} onFindById={this._myBookFindById} />
                        )}

                    />
                </div>
            </div>
        )
    }
}