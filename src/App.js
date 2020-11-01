import React, { Component } from 'react';
import {withRouter, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';

class App extends Component {
    render() {
        return (
              <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                </Switch>
              </BrowserRouter>
        );
    }
}

export default App;
