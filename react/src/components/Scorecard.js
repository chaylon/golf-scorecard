import React, {Component} from 'react';
import Score from './Score';
import ScoreForm from './ScoreForm';

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      holes: [],
      total: 0,
      score: null
    }
    this.getCourseInfo = this.getCourseInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getCourseInfo();
  }

  getCourseInfo() {
    fetch(`/api/v1/courses/${this.props.params["id"]}`,
      {credentials: "same-origin"}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        holes: body.holes,
        course: body.course
      });
    })
  }

  handleChange(num) {
    let newTotal = this.state.total + Number(num);
    this.setState({total: newTotal});
  }

  render() {
    let holes;
    let course;
    let par;
    let yardage;
    if (this.state.holes.length != 0) {
      holes = this.state.holes.map((hole) => {
        return(
          <Score
            key = {hole.id}
            hole = {hole}
          />
        )
      });
    }

    if (this.state.course !== null) {
      debugger
      course = this.state.course.name;
      par = this.state.course.par;
      yardage = this.state.course.yardage;
    }

    let onChange = (event) => {
      event.preventDefault();
      this.handleChange(event.target.value);
    }

    return(
      <div>
        {course}
        {par}
        {yardage}
        {holes}
        <ScoreForm
          onChange = {onChange}
        />
        <p>Total: {this.state.total}</p>
        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}

export default Scorecard;
