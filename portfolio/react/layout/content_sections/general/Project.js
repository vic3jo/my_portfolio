/**
* Author: Victor Trejo.
*
* Description: This file contains the Project component.
*/
import React from 'react';
import {shortenIfLengthLarger} from '../../../core/Utilities';

const DESCRIPTION_MAX_LENGTH = 105;
const COURSE_MAX_LENGTH = 25;

export default class Project extends React.Component
{

    render ()
    {

        let {course, description} = this.props;
        const {languages, libraries, repositoryUrl, title} = this.props;
        const courseLabelClass = course ? '' : 'hide';

        description = shortenIfLengthLarger(
            description,
            DESCRIPTION_MAX_LENGTH
        );

        course = shortenIfLengthLarger(
            course,
            COURSE_MAX_LENGTH
        );

        return (
            <div className="col-sm-6 col-md-4">
                <div className="thumbnail yellow">
                  <div className="caption">
                    <h3>{title}</h3>
                    <h4 className={courseLabelClass}>
                        Course: {course}
                    </h4>
                    <div className="well well-sm">
                        <p>{description}</p>
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

    }

}

Project.propTypes = {
    children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(
            React.PropTypes.node
        )
    ]),
    course: React.PropTypes.string.isRequired,
    description: React.PropTypes.string.isRequired,
    languages: React.PropTypes.string.isRequired,
    libraries: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    repositoryUrl: React.PropTypes.string.isRequired
};
