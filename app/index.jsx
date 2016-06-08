
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import MainLayout from './layouts/mainLayout';
import Home from './content/Home';
import About from './content/About';

require('./main.css');

const root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(
    <Router history={browserHistory}>
      <Route path='/' component={MainLayout}>
        <IndexRoute component={Home} />
        <Route path='/about' component={About} />
      </Route>
    </Router>,
root);

