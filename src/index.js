import 'bootstrap/dist/css/bootstrap.css';
import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Main from './Main'
import Character from './Character'
import Edit from './Edit'
import Create from './Create'

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={Main} />
      <Route exact path="/Character/:id" component={Character} />
      <Route exact path="/Edit/:id" component={Edit} />
      <Route exact path="/Create" component={Create} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));