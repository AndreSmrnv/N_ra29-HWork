import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import './bootstrap.min.css';
import './App.css';

import ServiceAdd from './components/ServiceAdd';
import ServiceList from './components/ServiceList';
import Page404 from './components/Page404';


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route path="/services" component={ServiceList} exact/>
          <Route path="/services/:id([0-9]+)?" component={ServiceAdd} />
          <Redirect from='/' to='/services'/>
            <Route component={Page404} />
        </Switch>
      </Router>

      
      
    </Fragment>
  );
}

export default App;
