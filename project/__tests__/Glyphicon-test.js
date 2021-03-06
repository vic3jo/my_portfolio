/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the Glyphicon Component.
 */
jest.unmock('../react/layout/content_sections/general/Glyphicon');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Glyphicon from '../react/layout/content_sections/general/Glyphicon';

describe('Glyphicon', () => {
  
  const ICON_TYPE = 'phone';
  const CONTENT = 'Phone';
  const TAG_NAME = 'span';
  const CLASS_NAME = `glyphicon glyphicon-${ICON_TYPE}`;
  const shallowRenderer = TestUtils.createRenderer(); 

  shallowRenderer.render(
      <Glyphicon iconType={ICON_TYPE}>
        {CONTENT}
      </Glyphicon>
  );

  const glyphicon = shallowRenderer.getRenderOutput();

  it('should successfully create a bootstrap glyphicon with content.', () => {
    expect(glyphicon.props.children).toEqual(CONTENT);
    expect(glyphicon.type).toEqual(TAG_NAME);
    expect(glyphicon.props.className).toEqual(CLASS_NAME);
  });
 
});