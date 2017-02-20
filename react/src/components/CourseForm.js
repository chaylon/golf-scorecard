import React from 'react';
import {browserHistory} from 'react-router';
import StateDropdown from './StateDropdown'

const CourseForm = props => {
  let handleSubmit = (event) => {
    event.preventDefault()
    let data = {
      name: event.target.elements[0].value,
      address: event.target.elements[1].value,
      city: event.target.elements[2].value,
      state: event.target.elements[3].value,
      zip: event.target.elements[4].value
    }
    let jsonStringData = JSON.stringify(data)
    fetch("/api/v1/courses", {
      credentials: "same-origin",
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
    .then(response => {
      browserHistory.push("/courses")
    });
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Address"/>
      <input type="text" placeholder="City"/>
      <StateDropdown/>
      <input type="text" placeholder="Zip"/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
