import React, {Component} from 'react';
import Score from './Score';

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      holes: []
    }
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

  render() {
    let holes;
    if (this.state.holes) {
      holes = this.state.holes.map((hole) => {
        return(
          <Score
            key = {hole.id}
            hole = {hole}
          />
        )
      });
    }

    return(
      <div>
        {holes}
      </div>
    );
  }
}

export default Scorecard;
