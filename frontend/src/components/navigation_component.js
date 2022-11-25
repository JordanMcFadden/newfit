import React, {Component} from 'react';

class navigation_component extends Component {
  render() {
    return(
        <nav>
          <div className="navbar">
            <section className="nav-logo">
              FitForYou
            </section>
            
            <section className="nav-menu">
              <ul className="nav-items">
                <li className="nav-links">Hello</li>
                <li className="nav-links">Hellos</li>

              </ul>
            </section>
          </div>
        </nav>
    )
  }
  
 
}

export default navigation_component