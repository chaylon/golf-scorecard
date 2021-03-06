import React, {Component} from 'react';
import {Link} from 'react-router';
import ScorecardForm from './ScorecardForm';

class ScorecardList extends Component {
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
      this.setState({scorecards: body.scorecards});
    })
  }

  render() {
    let scorecards;
    if (this.state.scorecards.length > 0) {
      scorecards = this.state.scorecards.map((scorecard) => {
        return(<p>{scorecard.total}</p>)
      })
    }

    return(
      <div>
        <Link to="/scorecards/new">New</Link>
        {scorecards}
      </div>
    );
  }
}

export default ScorecardList;
