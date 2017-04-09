import React from 'react';
import './App.css';
import { Router, Route, browserHistory} from 'react-router';
//components
import Home from './Components/Home';
import Create from './Components/Create';
import Article from './Components/Article';
import About from './Components/About';
import NotFound from './Components/NotFound';
import Building from './Components/Building';



const routes = (
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="create" component={Create}/>
        <Route path="about" component={About}></Route>
        <Route path="articles/:_id" component={Article}/>
        <Route path="page-under-construction" component={Building}/>
        <Route path="*" component={NotFound}></Route>
      </Router>
    );

export default routes;
