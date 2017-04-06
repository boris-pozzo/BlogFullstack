import React from 'react';
import './App.css';
import { Router, Route, browserHistory} from 'react-router';

//components
import Home from './Components/Home';
import HomeConnected from './Components/HomeConnected';
import Create from './Components/Create';


const routes = (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="HomeConnected" component={HomeConnected}/>
        <Route path="create" component={Create}/>
      </Router>
    );

export default routes;
