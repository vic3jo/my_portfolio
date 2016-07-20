/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Glyphicon component.
 */
import React from 'react';

export default class Glyphicon extends React.Component
{

    render ()
    {

        const className = `glyphicon glyphicon-${this.props.iconType}`;

        return (
            <span className={className}>
                {this.props.children}
            </span>
        );

    }

}

Glyphicon.propTypes = {
    iconType: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([
        React.PropTypes.node,
        React.PropTypes.arrayOf(
            React.PropTypes.node
        )
    ])
};

