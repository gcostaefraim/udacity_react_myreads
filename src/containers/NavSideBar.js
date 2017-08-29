import React,{Component} from 'react'
import {Link} from 'react-router-dom'

class NavSideBar extends Component {
    render() {
        return (
            <div className="bd-sidebar">
                <form className="form-inline bd-search d-flex align-items-center">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search"
                           aria-label="Search"/>
                </form>
                <nav>
                    <ul className="nav flex-column">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/search" className="nav-link">Search Page</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Currently Reading</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Want to Read</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Read</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default NavSideBar
