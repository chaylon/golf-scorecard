import React, {Component} from 'react';
import {Link} from 'react-router';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    debugger
    return(
      <div>
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/new">New</Link>
        <Link to="/scorecards">Scorecards</Link>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
