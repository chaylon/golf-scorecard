import React from 'react';

const Score = props => {
  return(
    <div>
      {props.hole.number} | {props.hole.par} | {props.hole.yardage}
    </div>
  );
};

export default Score;
