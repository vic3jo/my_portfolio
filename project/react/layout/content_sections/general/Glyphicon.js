/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Glyphicon component.
 */
import React from 'react';

const Glyphicon = (iconType, children) => {
  const className = `glyphicon glyphicon-${iconType}`;

  return (
    <span className={className}>
      {children}
    </span>
  );
};

Glyphicon.propTypes = {
  iconType: React.PropTypes.string.isRequired,
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.arrayOf(
      React.PropTypes.node
    ),
  ]),
};

export default Glyphicon;
