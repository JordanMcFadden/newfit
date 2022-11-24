import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import { NavItems } from './NavItems';

class Nav extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    } 

    render() {
        return(
            <nav className="NavbarItems">
                <Link className="navbar-logo" to="/">FitForYou<i className="fab fa-foursquare"></i></Link>
                <div className="nav-icon"></div>
                 <ul className ={this.state.clicked ? 'nav-icon active' : 'nav-icon'}>
                    {NavItems.map((item, index) => {
                     return (
                        <li key ={index}>
                             <Link className={item.cName} to = {item.url}>
                                {item.title} 
                            </Link>
                         </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Nav;