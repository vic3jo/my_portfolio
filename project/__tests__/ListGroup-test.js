/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the ListGroup Component.
 */
jest.unmock('../react/layout/content_sections/general/ListGroup');
jest.mock('../react/layout/content_sections/general/ListGroupItem');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ListGroup from '../react/layout/content_sections/general/ListGroup';
import ListGroupItem from '../react/layout/content_sections/general/ListGroupItem';

describe('ListGroup', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'ul';
  const CLASS_NAME = 'list-group';


  it('should successfully create a list group bootstrap element with no children', () => {
    shallowRenderer.render(
      <ListGroup></ListGroup>
    );
    const listGroup = shallowRenderer.getRenderOutput();

    expect(listGroup.type).toEqual(TAG_NAME);
    expect(listGroup.props.children).toEqual(undefined);
    expect(listGroup.props.className).toEqual(CLASS_NAME);
  });


  it('should successfully create a list group bootstrap element with the given children', () => {
    shallowRenderer.render(
      <ListGroup>
        <ListGroupItem />
        <ListGroupItem />
        <ListGroupItem />
      </ListGroup>
    );
    const listGroup = shallowRenderer.getRenderOutput();

    expect(listGroup.type).toEqual(TAG_NAME);
    expect(listGroup.props.className).toEqual(CLASS_NAME);
    expect(listGroup.props.children).toEqual([
      <ListGroupItem />,
      <ListGroupItem />,
      <ListGroupItem />
    ]);
  });

  
 
});