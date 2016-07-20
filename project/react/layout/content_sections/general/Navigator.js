/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Navigator component.
 */
import NavigatorLink from './NavigatorLink';
import React from 'react';

export default class Navigator extends React.Component
{

    render ()
    {

        return (
            <nav>
                <ul className="nav navbar-nav navbar-right">
                    {this.props.children}
                </ul>
            </nav>
        );

    }

}

Navigator.propTypes = {
    children: React.PropTypes.oneOfType([
        NavigatorLink,
        React.PropTypes.arrayOf(
            NavigatorLink
        )
    ])
};
