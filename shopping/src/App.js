
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { Component } from 'react';
import { routes } from './routers/routes';
import NotFound from './components/NotFound';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route path={route.path} exact={route.exact} render={() => <route.component></route.component>}>

                </Route>
              )
            })}
            <Route path="*">
                <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
