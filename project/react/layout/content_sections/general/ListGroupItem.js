/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the ListGroupItem component.
 */
import Glyphicon from './Glyphicon';
import React from 'react';

const ListGroupItem = (title, isBadgeIcon, badge) => {
  let badgeElement = badge;

  if (isBadgeIcon)
  {
    badgeElement = <Glyphicon iconType={badge} />;
  }

  return (
    <li className="list-group-item">
      <span className="badge">
          {badgeElement}
      </span>
      {title}
    </li>
  );
};

ListGroupItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  badge: React.PropTypes.string.isRequired,
  isBadgeIcon: React.PropTypes.bool,
};

export default ListGroupItem;
