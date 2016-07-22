/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the ListGroupItem Component.
 */

jest.unmock('../react/layout/content_sections/general/ListGroupItem');
jest.mock('../react/layout/content_sections/general/Glyphicon');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ListGroupItem from '../react/layout/content_sections/general/ListGroupItem';
import Glyphicon from '../react/layout/content_sections/general/Glyphicon';

describe('ListGroupItem', () => {
  const TITLE = 'test title';
  const BADGE = 'phone';
  const shallowRenderer = TestUtils.createRenderer(); 

  it('should successfully create a list group item bootstrap element with no badge icon', () => {
    shallowRenderer.render(
      <ListGroupItem title={TITLE} badge={BADGE} isBadgeIcon={false}/>
    );
    const item = shallowRenderer.getRenderOutput();

    expect(item.type).toEqual('li');
    expect(item.props.className).toEqual('list-group-item');
    expect(item.props.children).toEqual([
      <span className="badge">{BADGE}</span>,
      TITLE
    ]);
  });

  it('should successfully create a list group item bootstrap element with badge icon', () => {
    shallowRenderer.render(
      <ListGroupItem title={TITLE} badge={BADGE} isBadgeIcon={true}/>
    );
    const item = shallowRenderer.getRenderOutput();
    
    expect(item.type).toEqual('li');
    expect(item.props.className).toEqual('list-group-item');
    expect(item.props.children).toEqual([
      <span className="badge">
        <Glyphicon iconType={BADGE} />
      </span>,
      TITLE
    ]);
  });

  
 
});