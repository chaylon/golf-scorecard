import React, {Component} from 'react';
import Score from './Score';
import ScoreForm from './ScoreForm';

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
        holes: body.holes
      });
    })
  }

  handleChange(num) {
    let newTotal = this.state.total + Number(num);
    this.setState({total: newTotal});
  }

  render() {
    let holes;
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

    let onChange = (event) => {
      event.preventDefault();
      this.handleChange(event.target.value);
    }

    return(
      <div>
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
