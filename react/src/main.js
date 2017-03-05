import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';
import CourseShow from './components/CourseShow';
import Scorecard from './components/Scorecard';
import ScorecardForm from './components/ScorecardForm';
import ScorecardList from './components/ScorecardList';

$(function() {
  if (document.getElementById('app')){
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={Home}>
          <Route path="/new" component={CourseForm}/>
          <Route path="/courses" component={CourseList}/>
          <Route path="/courses/:id" component={CourseShow}/>
          <Route path="/scorecards" component={ScorecardList}/>
          <Route path="/scorecards/new" component={ScorecardForm}/>
          <Route path="/scorecards/:id" component={Scorecard}/>
        </Route>
      </Router>,
      document.getElementById('app')
    );
  }
});
