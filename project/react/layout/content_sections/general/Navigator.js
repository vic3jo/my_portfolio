/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Navigator component.
 */
import NavigatorLink from './NavigatorLink';
import React from 'react';

const Navigator = (props) => {
  return (
    <nav>
      <ul className="nav navbar-nav navbar-right">
        {props.children}
      </ul>
    </nav>
  );
};

Navigator.propTypes = {
  children: React.PropTypes.oneOfType([
    NavigatorLink,
    React.PropTypes.arrayOf(
      NavigatorLink
    ),
  ]),
};

export default  Navigator;
