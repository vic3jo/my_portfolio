/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the ListGroupItem component.
 */
import Glyphicon from './Glyphicon';
import React from 'react';

export default class ListGroupItem extends React.Component
{
    render ()
    {

        const {title, isBadgeIcon} = this.props;
        let {badge} = this.props;

        if (isBadgeIcon)
        {

            badge = <Glyphicon iconType={badge} />;

        }

        return (
            <li className="list-group-item">
                <span className="badge">
                    {badge}
                </span>
                {title}
            </li>
        );

    }

}

ListGroupItem.propTypes = {
    title: React.PropTypes.string.isRequired,
    badge: React.PropTypes.string.isRequired,
    isBadgeIcon: React.PropTypes.bool.isRequired
};
