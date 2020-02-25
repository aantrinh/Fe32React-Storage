import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// link to: giup khong phai load lai page khi nhan vao 
export default class Navbar extends Component {
    render() {
        return (

            <nav className="navbar navbar-expand-lg bg-light">
                {/* Navbar */}
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item ">
                        <NavLink activeClassName="active" exact className="nav-link" to="/">HOME </NavLink>
                    </li>
                    <li className="nav-item ">
                        <NavLink activeClassName="active" className="nav-link" to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/list-movie">ListMovie</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/hoc">HOC</NavLink>
                    </li>
                </ul>
            </nav>


        )
    }
}
