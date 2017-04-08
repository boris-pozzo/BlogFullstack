import React from 'react';
import './App.css';
import { Router, Route, browserHistory} from 'react-router';
//components
import Home from './Components/Home';
import HomeConnected from './Components/HomeConnected';
import Create from './Components/Create';
import Article from './Components/Article';


const routes = (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="HomeConnected" component={HomeConnected}/>
        <Route path="create" component={Create}/>
        <Route path="articles/:_id" component={Article}/>
      </Router>
    );

export default routes;
