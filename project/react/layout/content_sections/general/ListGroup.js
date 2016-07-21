/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the ListGroup component.
 */
import ListGroupItem from './ListGroupItem';
import React from 'react';

const ListGroup = (children) => {
  (
    <ul className="list-group">
        {children}
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
