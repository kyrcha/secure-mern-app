
import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons'

class Home extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <FontAwesomeIcon icon={faShieldAlt} size="9x"/>
            <h1 className="title">Secure Web Application</h1>
            <h2 className="subtitle">Node.js, React, Express, MongoDB demo app</h2>
            <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
