
import React, { Component } from 'react';
import { render } from 'react-dom';

//import react router
import { HashRouter, Router, Route, hashHistory, Link } from 'react-router-dom';


//import self defined components
import Home from './pages/home';
import Login from './pages/login';

render((
    <HashRouter>
        <div>
            <ul>
                <li><Link to='/' >Home</Link></li>
                <li><Link to='/login'>Login Page</Link></li>
            </ul>
            <Route exact path='/' component={Home} />
            <Route path='/login' component={Login} />
        </div>
    </HashRouter>
), document.getElementById('content'));


if (module.hot) {
    module.hot.accept();
}