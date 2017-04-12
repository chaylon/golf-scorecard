import React, {Component} from 'react';
import Course from './Course';
import StateDropdown from './StateDropdown';

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: [],
      selected: ""
    }
    this.getCourses = this.getCourses.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCourses();
  }

  handleChange(selection) {
    this.setState({selected: selection}, () => {
      this.getCourses();
    });
  }

  getCourses() {
    let selectedState = this.state.selected;
    fetch(`/api/v1/courses/filter?state=${selectedState}`,
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

  render() {
    let onChange = (event) => {
      event.preventDefault();
      this.handleChange(event.target.value)
    }

    let courses = this.state.courses.map((course) => {
      return(
        <Course
          key = {course.id}
          course = {course}
        />
      )
    })
    return(
      <div>
        Filter by state: <StateDropdown onChange={onChange}/>
        {courses}
        {this.props.children}
      </div>
    )
  }
}

export default CourseList;
