import React, {Component} from 'react';
import {Link} from 'react-router';
import ScorecardForm from './ScorecardForm';

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
    return(
      <div>
        <Link to="/scorecards/new">New</Link>
        {this.state.scorecards}
      </div>
    );
  }
}

export default Scorecard;
