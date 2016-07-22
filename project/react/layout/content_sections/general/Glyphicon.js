/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Glyphicon component.
 */
import React from 'react';

const Glyphicon = (props) => {
  const className = `glyphicon glyphicon-${props.iconType}`;
  return (
    <span className={className}>
      {props.children}
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

Glyphicon.defaultProps = {
  children: []
}
export default Glyphicon;
