/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the NavigatorLink Component.
 */

jest.unmock('../react/layout/content_sections/general/NavigatorLink');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import NavigatorLink from '../react/layout/content_sections/general/NavigatorLink';

describe('NavigatorLink', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'li';
  const HREF = 'example.com';


  it('should successfully create a navigator link element with no children', () => {
    
    shallowRenderer.render( <NavigatorLink href={HREF} /> );

    const link = shallowRenderer.getRenderOutput();

    expect(link.type).toEqual(TAG_NAME);
    expect(link.props.className).toEqual('nav');
    expect(link.props.children).toEqual(
      <a href={HREF}></a>      
    );
    
  });


  it('should successfully create a navigator bootstrap element with the given children', () => {
    const CONTENT = 'TEST CONTENT';
   
    shallowRenderer.render(
      <NavigatorLink href={HREF}>
        {CONTENT}
      </NavigatorLink>
    );
   
    const link = shallowRenderer.getRenderOutput();

    expect(link.type).toEqual(TAG_NAME);
    expect(link.props.className).toEqual('nav');
    expect(link.props.children).toEqual(
       <a href={HREF}>
        {CONTENT}
       </a> 
    );
  });

  
 
});
