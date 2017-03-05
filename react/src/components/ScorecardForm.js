import React, {Component} from 'react';
import {browserHistory} from 'react-router';

class ScorecardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      selected: null
    };
    this.getCourses = this.getCourses.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.getCourses();
  }

  getCourses() {
    fetch("/api/v1/courses",
      {credentials: "same-origin"}
    )
    .then(response => response.json())
    .then(body => {
      let newCourses = [];
      body.courses.forEach((course) => {
        newCourses.push(course);
      })
      this.setState({courses: newCourses});
    });
  }

  handleSubmit(course) {
    browserHistory.push(`/scorecards/${course}`);
  }

  render() {
    let onSubmit = (event) => {
      event.preventDefault();
      this.handleSubmit(event.target.elements[0].selectedOptions[0].id)
    }

    let dropdownItems = [];
    this.state.courses.forEach((course) => {
        dropdownItems.push(<option id={`${course.id}`} key={`${course.id}`}>{course.name}</option>);
    });

    let dropdown = (
      <form onSubmit={onSubmit}>
        <select>
          {dropdownItems}
        </select>
        <button type="submit">Go</button>
      </form>
    );


    return(
      <div>
        Choose a course:
        {dropdown}
      </div>
    );
  }
}

export default ScorecardForm;
