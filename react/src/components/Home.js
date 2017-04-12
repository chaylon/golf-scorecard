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
      <div className="background">
        <div className="topnav">
          <Link to="/">Home</Link>
          <Link activeClassName="active" to="/courses">Courses</Link>
          <Link activeClassName="active" to="/new">New Course</Link>
          <Link activeClassName="active" to="/scorecards">Scorecards</Link>
          <Link activeClassName="active" to={`/users/${this.state.user.id}`}>Profile</Link>
          <a className="signout" href="/users/sign_out" data-method="delete">Sign Out</a>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
