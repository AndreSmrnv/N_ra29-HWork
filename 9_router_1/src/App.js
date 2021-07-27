import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import './bootstrap.min.css';
import './App.css';

import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import Page404 from './components/Page404';


function App() {
  return (
    <Router>
      <div>
        <Menu />
        <div className="page">
          <Switch>  
            <Route path="/" exact component={HomePage} />
            <Route path="/drift" component={DriftPage} />
            <Route path="/timeattack" component={TimeAttackPage} />
            <Route path="/forza" component={ForzaPage} />
            <Route path="*" component={Page404} />
          </Switch>     
        </div>
      </div>
    </Router>
  );
}

export default App;
