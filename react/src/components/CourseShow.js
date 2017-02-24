import React, {Component} from 'react';
import HoleForm from './HoleForm';

class CourseShow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      selected: false,
      holes: []
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
      this.setState({
        course: body.course,
        holes: body.holes
      });
    })
  }

  handleClick() {
    this.setState({selected: !this.state.selected});
  }

  handleSubmit(info) {
    let courseInfo = []
    for (let i=0; i<53; i+=3) {
      courseInfo.push({
        hole: info[i].value,
        par: info[i+1].value,
        yardage: info[i+2].value
      })
    }
    let data = {courseData: courseInfo}
    let json = JSON.stringify(data);
    fetch(`/api/v1/courses/${this.props.params["id"]}/holes`, {
      credentials: "same-origin",
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: json
    })
  }

  render() {
    if (this.state.course) {
      let course = this.state.course;

      let onClick = () => {
        this.handleClick();
      }

      let onSubmit = (event) => {
        event.preventDefault();
        let data = event.target.elements
        this.handleSubmit(data);
      }

      let showHoles;
      if (this.state.holes.length > 0) {
        showHoles = <p>{this.state.holes[0].par}</p>
      } else {

        let button;
        if (!this.state.selected) {
          button = <p><a href="javascript:;" onClick={onClick}>Add Holes</a></p>
        } else {
          button = <p><a href="javascript:;" onClick={onClick}>Cancel</a></p>
        }

        showHoles = <div>
                      {button}
                      <HoleForm
                      selected = {this.state.selected}
                      onSubmit = {onSubmit}
                      />
                    </div>
      }
      return(
        <div>
          <p>{course.name}</p>
          <p>{course.address}</p>
          <p>{course.city}, {course.state}, {course.zip}</p>
          {showHoles}
        </div>
      );
    } else {
      return(<div/>);
    }
  }
}

export default CourseShow;
