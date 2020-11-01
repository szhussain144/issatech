import React, { Component } from 'react';
import {withRouter, Switch, Route, BrowserRouter} from 'react-router-dom';

import Home from "./components/pages/Home";
import Login from './components/pages/Login';
import Profile from './components/pages/Profile';
import SMS from './components/pages/SMS';
import EPost from './components/pages/Epost';
import BedRiften from './components/pages/bedriften';
import DetailsPage from './components/pages/detailspage';

class App extends Component {
    render() {
        return (
              <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/profile" component={Profile}/>
                    <Route exact path="/SMS" component={SMS}/>
                    <Route exact path="/e-post" component={EPost}/>
                    <Route exact path="/bedriften" component={BedRiften}/>
                    <Route exact path="/DetailsPage" component={DetailsPage}/>

                </Switch>
              </BrowserRouter>
        );
    }
}

export default App;
