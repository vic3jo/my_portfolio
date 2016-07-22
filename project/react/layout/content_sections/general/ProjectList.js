/**
* Author: Victor Trejo.
*
* Description: This file contains the ProjectList component.
*/
import Project from './Project';
import React from 'react';

const ProjectList = (props) => {
  return (
    <div> {props.children} </div>
  );
};

ProjectList.propTypes = {
  children: React.PropTypes.oneOfType([
    Project,
    React.PropTypes.arrayOf(
      Project
    ),
  ]),
};

export default ProjectList;
