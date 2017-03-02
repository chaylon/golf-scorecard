import React from 'react';

const HoleInput = props => {
  return(
    <div>
      <input type="text" defaultValue={props.id}/>
      <input type="text" placeholder="Par"/>
      <input type="text" placeholder="Yardage"/>
    </div>
  )
}

export default HoleInput;
