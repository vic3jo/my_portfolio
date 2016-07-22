/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Header component of the page.
 */
import Glyphicon from './content_sections/general/Glyphicon';
import Navigator from './content_sections/general/Navigator';
import NavigatorLink from './content_sections/general/NavigatorLink';
import React from 'react';

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

const links = LINKS_CONFIG.map((entry) => {
  return (
    <NavigatorLink key={entry.sectionId} href={`#${entry.sectionId}`}>
      <Glyphicon iconType={entry.icon} /> {entry.label}
    </NavigatorLink>
  );
});

const Header = () => {
  return (
    <header className="container">
      <div className="navbar navbar-default navbar-fixed-top">
        <div className="navbar-header col-offset-md-1">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <h1 className="cursive-style">
            <Glyphicon iconType="folder-open" /> My Portfolio
          </h1>
        </div>
        <div className="collapse navbar-collapse" id="myNavbar">
          <Navigator>{links}</Navigator>
        </div>
      </div>
    </header>
  );
};

export default Header;
