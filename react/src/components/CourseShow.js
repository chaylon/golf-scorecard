import React, {Component} from 'react';

class CourseShow extends Component {
  constructor(props) {
    super(props);
    this.state = {course: null};
    this.getCourses = this.getCourse.bind(this);
  }

  componentDidMount() {
    this.getCourse();
  }

  getCourse() {
    fetch(`/api/v1/courses/${this.props.params["id"]}`,
      {credentials: "same-origin"}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({course: body.course});
    })
  }

  render() {
    if (this.state.course) {
      let course = this.state.course;
      return(
        <div>
          <p>{course.name}</p>
          <p>{course.address}</p>
          <p>{course.city}, {course.state}, {course.zip}</p>
        </div>
      );
    } else {
      return(<div/>);
    }
  }
}

export default CourseShow;
