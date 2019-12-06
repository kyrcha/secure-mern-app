import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Home from './screens/Home';
import About from './screens/About';
import Users from './screens/Users';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Forgot from './screens/Forgot';
import Reset from './screens/Reset';
import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute'

 // Call it once in your app. At the root of your app is the best place
 toast.configure()

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header/>
            <div className="section">
              <Switch>
                <Route exact path="/" component={Home} />
                <ProtectedRoute path="/users" component={Users} />
                <Route path="/about" component={About} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/forgot" component={Forgot} />
                <Route path="/reset" component={Reset} />
              </Switch>
            </div>
        </div>
      </Router>
    );
  }

}

export default App;
