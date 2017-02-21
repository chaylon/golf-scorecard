import React from 'react';
import HoleInput from './HoleInput';

const HoleForm = props => {
  let form;
  if (props.selected) {
    form = [];
    for (let i=1; i<19; i++) {
      form.push(<HoleInput key={i} />);
    }
    form.push(<button key="button" type="submit">Submit</button>)
  }

  return(
    <div>
      <form onSubmit={props.onSubmit}>
        {form}
      </form>
    </div>
  )
}


export default HoleForm;
