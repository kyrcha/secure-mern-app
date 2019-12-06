import React from 'react';
import SignupForm from '../components/SignupForm'

class Signup extends React.Component {

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Sign Up</h1>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <SignupForm {...this.props}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Signup;
