/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the NavigatorLink component.
 */
import React from 'react';

const NavigatorLink = (props) => {
  return (
    <li className="nav">
      <a href={props.href}>
        {props.children}
      </a>
    </li>
  );
};

NavigatorLink.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.arrayOf(
      React.PropTypes.node
    ),
  ]),
  href: React.PropTypes.string.isRequired,
};

export default NavigatorLink;
