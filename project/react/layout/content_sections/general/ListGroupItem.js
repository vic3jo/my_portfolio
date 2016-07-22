/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the ListGroupItem component.
 */
import Glyphicon from './Glyphicon';
import React from 'react';

const ListGroupItem = (props) => {
  let badgeElement = props.badge;
  
  if (props.isBadgeIcon)
  {
    badgeElement = <Glyphicon iconType={props.badge} />;
  }

  return (
    <li className="list-group-item">
      <span className="badge">
          {badgeElement}
      </span>
      {props.title}
    </li>
  );
};

ListGroupItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  badge: React.PropTypes.string.isRequired,
  isBadgeIcon: React.PropTypes.bool,
};

export default ListGroupItem;
