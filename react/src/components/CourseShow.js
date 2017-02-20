import React, {Component} from 'react';
import HoleForm from './HoleForm';

class CourseShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      selected: false
    };
    this.getCourses = this.getCourse.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  handleClick() {
    this.setState({selected: true});
  }

  render() {
    if (this.state.course) {
      let course = this.state.course;
      let onClick = () => {
        this.handleClick();
      }
      return(
        <div>
          <p>{course.name}</p>
          <p>{course.address}</p>
          <p>{course.city}, {course.state}, {course.zip}</p>
          <p><a href="javascript:;" onClick={onClick}>Add Holes</a></p>
          <HoleForm
            selected = {this.state.selected}
          />
        </div>
      );
    } else {
      return(<div/>);
    }
  }
}

export default CourseShow;
