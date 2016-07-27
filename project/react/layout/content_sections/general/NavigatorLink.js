/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the NavigatorLink component.
 */
import React from 'react';

class NavigatorLink extends React.Component
{
  handleClick()
  {
    this.props.onClick();
  }

  render()
  {
    const clickEvent = this.handleClick.bind(this);
    return (
      <li className="nav" onClick={clickEvent}>
        <a href={this.props.href}>
          {this.props.children}
        </a>
      </li>
    ); 
  }
}


NavigatorLink.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.node,
    React.PropTypes.arrayOf(
      React.PropTypes.node
    ),
  ]),
  href: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired,
};

export default NavigatorLink;
