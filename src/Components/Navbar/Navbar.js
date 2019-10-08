import React from 'react';
import './Navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark primary-color">
            <a className="navbar-brand blockquote bq-light" href="">
                <h3 className="bq-title"><strong>TFC - The Future of Cars</strong></h3>
            </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home
                                <span className="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Advertising Price</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">About Us</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Our Team</a>
                                <a className="dropdown-item" href="#">asdasdasd</a>
                                <a className="dropdown-item" href="#">Contact</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search Brand" aria-label="Search"/>
                        </div>
                    </form>
                </div>          
            </nav>

                );
            }
        } 
        
export default Navbar;