import React from 'react';

const ScoreForm = props => {
  let scores = [];
  for (let i=1; i<19; i++) {
    scores.push(<input key={i} type="text" onChange={props.onChange}/>);
  }

  return(
    <div>
      {scores}
    </div>
  );
};

export default ScoreForm;
