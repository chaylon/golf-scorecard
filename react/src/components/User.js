import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: 0,
      average: 0
    };
    this.getInfo = this.getInfo.bind(this);
  }

  componentDidMount() {
    this.getInfo();
  }

  getInfo() {
    fetch(`/api/v1/users/${this.props.params.id}`,
      {credentials: "same-origin"}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
        rounds: body.rounds,
        average: body.average
      })
    });
  }

  render() {

    return(
      <div>
        <p>Rounds: {this.state.rounds}</p>
        <p>Average Score: {this.state.average}</p>
      </div>
    );
  }
}

export default User;