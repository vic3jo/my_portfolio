/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the Navigator Component.
 */
jest.unmock('../react/layout/content_sections/general/Navigator');
jest.mock('../react/layout/content_sections/general/NavigatorLink');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Navigator from '../react/layout/content_sections/general/Navigator';
import NavigatorLink from '../react/layout/content_sections/general/NavigatorLink';

describe('Navigator', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'nav'; 

  it('should successfully create a navigator bootstrap element with no children', () => {
    
    shallowRenderer.render(
      <Navigator></Navigator>
    );
    
    const navigator = shallowRenderer.getRenderOutput();

    expect(navigator.type).toEqual(TAG_NAME);
    expect(navigator.props.children).toEqual(
      <ul className="nav navbar-nav navbar-right"></ul>
    );
    
  });


  it('should successfully create a navigator bootstrap element with the given children', () => {
    shallowRenderer.render(
      <Navigator>
        <NavigatorLink />
        <NavigatorLink />
      </Navigator>
    );
    const navigator = shallowRenderer.getRenderOutput();

    expect(navigator.type).toEqual(TAG_NAME);
    expect(navigator.props.children).toEqual(
       <ul className="nav navbar-nav navbar-right">
          <NavigatorLink />
          <NavigatorLink />
       </ul>
    );
  });

  
 
});