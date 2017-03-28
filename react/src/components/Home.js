import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {user: {id: 0}};
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  getUser() {
    fetch("/api/v1/users",
      {credentials: "same-origin"}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({user: body.user});
    });
  }

  render() {
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/new">New Course</Link>
        <Link to="/scorecards">Scorecards</Link>
        <Link to={`/users/${this.state.user.id}`}>Profile</Link>
        <a href="/users/sign_out" data-method="delete">Sign Out</a>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
