import React, { Component } from 'react';
import Navbar from './Components/Layout/Navbar';
import Index from './Components/Layout/Index';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navbar></Navbar>
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
            </Switch>
          </div>
        </>
      </Router>
    );
  }
}

export default App;
