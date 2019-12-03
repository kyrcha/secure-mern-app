
import React from 'react';
import {Link} from 'react-router-dom';

class Users extends React.Component {
  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">User Admin Demo</h1>
            <h2 className="subtitle">React, redux and react-router demo</h2>
            <Link to='about' className='btn btn-primary btn-lg'>Learn More</Link>
          </div>
        </div>
      </section>
    );
  }
}

export default Users;
