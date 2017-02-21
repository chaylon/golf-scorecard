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
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.setState({selected: !this.state.selected});
  }

  handleSubmit() {
    debugger;
  }

  render() {
    if (this.state.course) {
      let course = this.state.course;

      let onClick = () => {
        this.handleClick();
      }

      let onSubmit = (event) => {
        event.preventDefault();
        this.handleSubmit();
      }

      let button;
      if (!this.state.selected) {
        button = <p><a href="javascript:;" onClick={onClick}>Add Holes</a></p>
      } else {
        button = <p><a href="javascript:;" onClick={onClick}>Cancel</a></p>
      }

      return(
        <div>
          <p>{course.name}</p>
          <p>{course.address}</p>
          <p>{course.city}, {course.state}, {course.zip}</p>
          {button}
          <HoleForm
            selected = {this.state.selected}
            onSubmit = {onSubmit}
          />
        </div>
      );
    } else {
      return(<div/>);
    }
  }
}

export default CourseShow;
