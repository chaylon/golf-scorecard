import React from 'react';
import StateDropdown from './StateDropdown'

const CourseForm = props => {
  return(
    <form>
      <input type="text" placeholder="Name"/>
      <input type="text" placeholder="Address"/>
      <input type="text" placeholder="City"/>
      <StateDropdown/>
      <input type="text" placeholder="Zip"/>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CourseForm;
