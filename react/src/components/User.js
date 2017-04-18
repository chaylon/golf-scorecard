import React, {Component} from 'react';

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rounds: 0,
      average: 0,
      favorite: null
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
        average: body.average,
        favorite: body.favorite
      })
    });
  }

  render() {
    let rounds;
    let average;
    let favorite;
    if (this.state.favorite !== null) {
      rounds = this.state.rounds;
      average = this.state.average;
      favorite = this.state.favorite;
    }

    return(
      <div>
        <p>Rounds: {rounds}</p>
        <p>Average Score: {average}</p>
        <p>Favorite Course: {favorite}</p>
      </div>
    );
  }
}

export default User;
