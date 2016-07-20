/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the ListGroup component.
 */
import ListGroupItem from './ListGroupItem';
import React from 'react';

export default class ListGroup extends React.Component
{

    render ()
    {

        return (
            <ul className="list-group">
                {this.props.children}
            </ul>
        );

    }

}

ListGroup.propTypes = {
    children: React.PropTypes.oneOfType([
        ListGroupItem,
        React.PropTypes.arrayOf(
            ListGroupItem
        )
    ])
};
