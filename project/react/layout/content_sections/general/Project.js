/**
* Author: Victor Trejo.
*
* Description: This file contains the Project component.
*/
import React from 'react';
import Utilties from '../../../core/Utilities';

const DESCRIPTION_MAX_LENGTH = 105;
const COURSE_MAX_LENGTH = 25;

const Project = (
  course,
  description,
  languages,
  libraries,
  repositoryUrl,
  title
) => {
  const courseLabelClass = course ? '' : 'hide';
  const descriptionText = Utilties.shortenIfLengthLarger(
      description,
      DESCRIPTION_MAX_LENGTH
  );
  const courseText = Utilties.shortenIfLengthLarger(
      course,
      COURSE_MAX_LENGTH
  );

  return (
    <div className="col-sm-6 col-md-4 project-box">
      <div className="thumbnail yellow">
        <div className="caption">
          <h3>{title}</h3>
          <h4 className={courseLabelClass}>
            Course: {courseText}
          </h4>
          <div className="description">
            <p>{descriptionText}</p>
          </div>
          <p>
            Languages: {languages}.
          </p>
          <p>
            Libraries: {libraries}.
          </p>
          <p>
            <a href={repositoryUrl} className="btn btn-default" role="button">
              Go to repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};


Project.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.arrayOf(
      React.PropTypes.node
    ),
  ]),
  course: React.PropTypes.string,
  description: React.PropTypes.string.isRequired,
  languages: React.PropTypes.string.isRequired,
  libraries: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  repositoryUrl: React.PropTypes.string.isRequired,
};

Project.defaultProps = { course: '' };

export default Project;
