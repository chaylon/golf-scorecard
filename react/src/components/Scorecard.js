import React, {Component} from 'react';
import Score from './Score';
import ScoreForm from './ScoreForm';
import {browserHistory} from 'react-router';

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: null,
      holes: [],
      total: 0,
      score: null,
      holeScores: {}
    }
    this.getCourseInfo = this.getCourseInfo.bind(this);
    this.updateStrokes = this.updateStrokes.bind(this);
    this.updateScore = this.updateScore.bind(this);
    this.postScores = this.postScores.bind(this);
    this.createScorecard = this.createScorecard.bind(this);
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

  updateStrokes(num, id) {
    let updatedHoles = this.state.holeScores;
    if (num === "") {
      updatedHoles[id] = 0;
    } else {
      updatedHoles[id] = parseInt(num);
    }
    this.setState({holeScores: updatedHoles});
    this.updateScore();
  }

  updateScore() {
    let values = Object.values(this.state.holeScores);
    let sum = values.reduce((a, b) => a + b, 0);
    this.setState({total: sum});
  }

  createScorecard() {
    let data = {
      holeScores: this.state.holeScores,
      course: this.state.course
    };
    let jsonStringData = JSON.stringify(data);
    fetch('/api/v1/scorecards', {
      credentials: "same-origin",
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
    .then(response => {
      this.postScores();
    })
  }

  postScores() {
    let data = {
      holeScores: this.state.holeScores,
      course: this.state.course
    };
    let jsonStringData = JSON.stringify(data);
    fetch('/api/v1/scores', {
      credentials: "same-origin",
      method: "post",
      headers: { 'Content-Type': 'application/json' },
      body: jsonStringData
    })
    .then(response => {
      browserHistory.push("/scorecards");
    });
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
      course = this.state.course.name;
      par = this.state.course.par;
      yardage = this.state.course.yardage;
    }

    let onChange = (event) => {
      this.updateStrokes(event.target.value, event.target.id);
    }

    let onSubmit = (event) => {
      event.preventDefault();
      this.createScorecard();
    }

    return(
      <div>
        {course}
        {par}
        {yardage}
        {holes}
        <ScoreForm
          onChange = {onChange}
          onSubmit = {onSubmit}
        />
        <p>Total: {this.state.total}</p>
        <p>Score: {this.state.score}</p>
      </div>
    );
  }
}

export default Scorecard;
