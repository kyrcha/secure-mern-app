
import React from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to='home' className='navbar-item'>
          <FontAwesomeIcon icon={faShieldAlt} size='2x'/>
        </Link>
        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <NavLink to="/" className="navbar-item" activeClassName='active'>Home</NavLink>
          <NavLink to="/users" className="navbar-item" activeClassName='active'>Users</NavLink>
          <NavLink to="/about" className="navbar-item" activeClassName='active'>About</NavLink>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <NavLink to="signup" className="button is-light">
                <strong>Sign up</strong>
              </NavLink>
              <NavLink to="login" className="button is-light">
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
