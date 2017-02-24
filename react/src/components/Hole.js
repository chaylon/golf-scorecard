import React from 'react';

const Hole = props => {
  return(
    <div>
      {props.hole.number} | {props.hole.par} | {props.hole.yardage}
    </div>
  );
}

export default Hole;
