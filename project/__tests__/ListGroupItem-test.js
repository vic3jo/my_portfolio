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
  const TAG_NAME = 'li';
  const CLASS_NAME = 'list-group-item';
  const shallowRenderer = TestUtils.createRenderer(); 

  it('should successfully create a list group item bootstrap element with no badge icon', () => {
    shallowRenderer.render(
      <ListGroupItem title={TITLE} badge={BADGE} isBadgeIcon={false}/>
    );
    const item = shallowRenderer.getRenderOutput();

    expect(item.type).toEqual(TAG_NAME);
    expect(item.props.className).toEqual(CLASS_NAME);
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
    
    expect(item.type).toEqual(TAG_NAME);
    expect(item.props.className).toEqual(CLASS_NAME);
    expect(item.props.children).toEqual([
      <span className="badge">
        <Glyphicon iconType={BADGE} />
      </span>,
      TITLE
    ]);
  });

  
 
});