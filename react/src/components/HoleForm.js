import React from 'react';

const HoleForm = props => {

  let form;
  if (props.selected) {
    form = <div>This will be a form</div>;
  }

  return(
    <div>
      {form}
    </div>
  )
}


export default HoleForm;
