import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Searcher from './../Searcher/Searcher';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark grey darken-4">
            <Link to="/" className="navbar-brand blockquote bq-light" >
                <h3 className="bq-title"><strong>TFS - Tutoriales Full Stack</strong></h3>
            </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#basicExampleNav"
                    aria-controls="basicExampleNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="basicExampleNav">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/History" className="nav-link">History</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Advertising" className="nav-link">Advertising Price</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">About Us</a>
                            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                <Link to="OurTeam" className="dropdown-item" href="#">Our Team</Link>
                                <Link to="asdasdasd" className="dropdown-item" href="#">asdasdasd</Link>
                                <Link to="Contact" className="dropdown-item" href="#">Contact</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline">
                        <div className="md-form my-0">
                            <input className="rounded-pill border border-light form-control mr-sm-2 text-center " type="text" placeholder="Search Brand" aria-label="Search"/>
                        </div>
                    </form>
                </div>          
            </nav>

                );
            }
        } 
        
export default Navbar;