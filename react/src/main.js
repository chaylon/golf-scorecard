import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './components/Home';
import CourseForm from './components/CourseForm';

$(function() {
  if (document.getElementById('app')){
    ReactDOM.render(
      <Router history={browserHistory}>
        <Route path="/" component={Home}/>
        <Route path="/courses/new" component={CourseForm}/>
      </Router>,
      document.getElementById('app')
    );
  }
});
