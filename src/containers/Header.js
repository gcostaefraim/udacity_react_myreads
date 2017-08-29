import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class Header extends Component {
    render() {
        return (
            <header className="bd-navbar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">My Reads</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {/*<a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>*/}
                            <Link
                                to="/"
                                className="nav-item nav-link active"
                            >Home</Link>
                            <Link
                                to="/search"
                                className="nav-item nav-link"
                            >Search Page</Link>
                        </div>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header