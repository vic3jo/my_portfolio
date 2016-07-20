/**
* Author: Victor Trejo.
*
* Description: This file contains the ProjectList component.
*/
import Project from './Project';
import React from 'react';

export default class ProjectList extends React.Component
{

    render ()
    {

        return (
            <div> {this.props.children} </div>
        );

    }

}

ProjectList.propTypes = {
    children: React.PropTypes.oneOfType([
        Project,
        React.PropTypes.arrayOf(
            Project
        )
    ])
};
