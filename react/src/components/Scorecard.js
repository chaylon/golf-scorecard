import React, {Component} from 'react';

class Scorecard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scorecards: []
    };
    this.getScorecards = this.getScorecards.bind(this);
  }

  componentDidMount() {
    this.getScorecards();
  }

  getScorecards() {
    fetch("api/v1/scorecards",
      {credentials: "same-origin"}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({scorecards: body.scorecards})
    })
  }

  render() {
    debugger
    return(
      <div>
        {this.state.scorecards}
      </div>
    );
  }
}

export default Scorecard;
