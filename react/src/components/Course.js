import React from 'react';
import {Link} from 'react-router';

const Course = props => {
  return(
    <div>
      <Link to={`/courses/${props.course.id}`}>{props.course.name}</Link>
    </div>
  )
}

export default Course;
