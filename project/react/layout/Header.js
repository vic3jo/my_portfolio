/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Header component of the page.
 */
import Glyphicon from './content_sections/general/Glyphicon';
import Navigator from './content_sections/general/Navigator';
import NavigatorLink from './content_sections/general/NavigatorLink';
import React from 'react';
import { connect } from 'react-redux';
import { changeMenuState } from '../core/Actions';


const LINKS_CONFIG = [
  {
    label: 'About',
    sectionId: 'about',
    icon: 'user',
  },
  {
    label: 'Experience',
    sectionId: 'experience',
    icon: 'road',
  },
  {
    label: 'Skills',
    sectionId: 'skills',
    icon: 'plus-sign',
  },
  {
    label: 'Education',
    sectionId: 'education',
    icon: 'education',
  },
  {
    label: 'Academic projects',
    sectionId: 'academic-projects',
    icon: 'blackboard',
  },
  {
    label: 'Personal projects',
    sectionId: 'personal-projects',
    icon: 'sunglasses',
  },
];




class Header extends React.Component
{
  handleToggleClick()
  {
    this.props.openMenu(!this.props.isMenuOpened);
  }

  handleLinkClick()
  {
    this.props.closeMenu();
  }

  render()
  {
    const clickToggleEvent = this.handleToggleClick.bind(this);
    const clickLinkEvent = this.handleLinkClick.bind(this);
    const {isMenuOpened} = this.props;
    let collapseClass = 'collapse navbar-collapse';

    if (isMenuOpened)
    {
      collapseClass = `${collapseClass} in`;
    }

    const links = LINKS_CONFIG.map((entry) => {
      return (
        <NavigatorLink key={entry.sectionId} href={`#${entry.sectionId}`} onClick={clickLinkEvent}>
          <Glyphicon iconType={entry.icon} /> {entry.label}
        </NavigatorLink>
      );
    });

    return (
      <header className="container">
        <div className="navbar navbar-default navbar-fixed-top">
          <div className="navbar-header col-offset-md-1">
            <button type="button" className="navbar-toggle" onClick={clickToggleEvent}>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <h1 className="cursive-style">
              <Glyphicon iconType="folder-open" /> My Portfolio
            </h1>
          </div>
          <div className={collapseClass} id="myNavbar">
            <Navigator>{links}</Navigator>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  closeMenu: React.PropTypes.func.isRequired,
  openMenu: React.PropTypes.func.isRequired,
};

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps(state)
{
  return {
    isMenuOpened: state.isMenuOpened
  };
}

/**
* Gives the object access to the dispatch function
* throught properties.
* @param  {function} dispatch the dispatch function
* @return {object}   the updated properties object.
*/
function mapDispatchToProps(dispatch)
{
  return {
    openMenu: (open) => {
      dispatch(changeMenuState(open));
    },
    closeMenu: () => {
      dispatch(changeMenuState(false));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);