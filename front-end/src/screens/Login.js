import React from 'react';
import {Link} from 'react-router-dom';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        password: '',
      }
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Login</h1>
            <div className="columns">
              <div className="column is-half is-offset-one-quarter">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                      <input name="email" className="input" type="email" placeholder="Email input" value=""/>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                      <input name="password" className="input" type="password" placeholder="Password" value=""/>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <label className="checkbox">
                          <Link to="/forgot">Forgot</Link> my password
                      </label>
                    </div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-link">Login</button>
                    </div>
                    <div className="control">
                      <button className="button is-link is-light">Cancel</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Login;
