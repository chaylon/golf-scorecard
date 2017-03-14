import React from 'react';

const ScoreForm = props => {
  let scores = [];
  for (let i=1; i<19; i++) {
    scores.push(<input key={i} id={i} type="text" onChange={props.onChange}/>);
  }
  scores.push(<button key="submit" type="submit">Submit</button>);

  return(
    <div>
      <form onSubmit={props.onSubmit}>
        {scores}
      </form>
    </div>
  );
};

export default ScoreForm;
