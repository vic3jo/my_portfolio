/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the ListGroup component.
 */
import ListGroupItem from './ListGroupItem';
import React from 'react';

const ListGroup = (props) => {
  return (
    <ul className="list-group">
        {props.children}
    </ul>
  );
};

ListGroup.propTypes = {
  children: React.PropTypes.oneOfType([
    ListGroupItem,
    React.PropTypes.arrayOf(
        ListGroupItem
    ),
  ]),
};

export default ListGroup;
