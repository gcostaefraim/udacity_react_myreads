import React, {Component} from 'react'
import {Link} from 'react-router-dom'


class NavTopBar extends Component {
    render() {
        return (
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">My Reads</a>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/"className="nav-item nav-link active">Home</Link></li>
                                <li><Link to="/search" className="nav-item nav-link">Search Page</Link></li>
                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#">About</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
        )
    }
}

export default NavTopBar;