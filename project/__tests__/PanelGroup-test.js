/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the PanelGroup Component.
 */

jest.unmock('../react/layout/content_sections/general/PanelGroup');
jest.mock('../react/layout/content_sections/general/Panel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import PanelGroup from '../react/layout/content_sections/general/PanelGroup';
import Panel from '../react/layout/content_sections/general/Panel';

describe('PanelGroup', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'div';
  const ID = 'TEST_ID';
  const CLASS_NAME = 'panel-group';


  it('should successfully create a panel group bootstrap element with no children', () => {
    shallowRenderer.render( <PanelGroup id={ID} /> );
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.className).toEqual(CLASS_NAME);
    expect(element.props.children).toEqual(undefined);
    expect(element.props.id).toEqual(ID);
  });


  it('should successfully create a panel group bootstrap element with the given children', () => {
    shallowRenderer.render(
      <PanelGroup id={ID}>
        <Panel />
      </PanelGroup>
    );
   
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.className).toEqual(CLASS_NAME);
    expect(element.props.id).toEqual(ID);
    expect(element.props.children).toEqual(
       <Panel />
    );
  });
});
