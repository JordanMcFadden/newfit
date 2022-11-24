import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import '../navigation/Nav.css';

class Nav extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    } 

    render() {
        return(
        <div className="sum">
            <div className ="logo">
                FitForYou
            </div>
            <nav className="item">
            <ul className = "nav-ul">
                <li>
                    <Link className="nav-link" to="/login">Login</Link>
                </li>  
                <li>
                    <Link className="nav-link" to="/journey">Journey</Link>
                </li>  
                <li>
                    <Link className="nav-logo" to="/">Home</Link>
                </li>
            </ul>  
            </nav>
        </div>
        )
    }
}

export default Nav;