import React, {Component} from 'react';
import Course from './Course';

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state = {courses: []}
    this.getCourses = this.getCourses.bind(this)
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

  render() {
    let courses = this.state.courses.map((course) => {
      return(
        <Course
          key = {course.id}
          course = {course}
        />
      )
    })
    return(
      <div className="courses">
        {courses}
        {this.props.children}
      </div>
    )
  }
}

export default CourseList;
