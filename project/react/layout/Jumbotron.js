/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Jumbotron component of the page.
 */
import Glyphicon from './content_sections/general/Glyphicon';
import ListGroup from './content_sections/general/ListGroup';
import ListGroupItem from './content_sections/general/ListGroupItem';
import React from 'react';
import { connect } from 'react-redux';

const Link = (url, label) => {
  return (
    <a href={url} >
      {label}
    </a>
  );
};

const Jumbotron = (props) => {
  const { description, phone, email, linkedIn, github, title, imageUrl } = props;
  const infoItems = [
    {
      id: 1,
      title: phone,
      badge: 'earphone',
      isBadgeIcon: true,
    },
    {
      id: 2,
      title: email,
      badge: 'envelope',
      isBadgeIcon: true,
    },
    {
      id: 3,
      title: Link(linkedIn, 'Linked-in'),
      badge: 'info-sign',
      isBadgeIcon: true,
    },
    {
      id: 4,
      title: Link(github, 'Github'),
      badge: 'inbox',
      isBadgeIcon: true,
    },
  ];
  const groupItems = infoItems.map((item) => (
    <ListGroupItem
      key={item.id}
      title={item.title}
      badge={item.badge}
      isBadgeIcon={item.isBadgeIcon}
    />
  ));

  return (
    <div className="jumbotron">
      <div className="container">
        <div className="thumbnail col-md-2 col-xs-4">
          <img src={imageUrl} alt="my profile"  />
        </div>
        <div className="col-md-6 col-xs-8">
          <h1 className="cursive-style">
            <Glyphicon iconType="glass" />
            {title}
          </h1>
          <h2>
            <p>{description}</p>
          </h2>
          <ListGroup>
            {groupItems}
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

Jumbotron.propTypes = {
  description: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  email: React.PropTypes.string.isRequired,
  phone: React.PropTypes.string.isRequired,
  imageUrl: React.PropTypes.string.isRequired,
  linkedIn: React.PropTypes.string.isRequired,
  github: React.PropTypes.string.isRequired,
};

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps(state)
{
  const jumbotron = state.jumbotron;

  return {
    email: jumbotron.email,
    phone: jumbotron.phone,
    title: jumbotron.title,
    description: jumbotron.description,
    imageUrl: jumbotron.imageUrl,
    linkedIn: jumbotron.linkedIn,
    github: jumbotron.github,
  };
}

export default connect(mapStateToProps)(Jumbotron);
