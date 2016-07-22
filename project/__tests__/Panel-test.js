/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the Panel Component.
 */

jest.unmock('../react/layout/content_sections/general/Panel');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Panel from '../react/layout/content_sections/general/Panel';

describe('Panel', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'div';
  const CLASS_NAME = 'panel panel-default';
  const ID = 'TEST_ID';
  const TITLE = 'TEST_TITLE';
  const BADGE_TEXT = 'TEST_BADGE';
  const HEADING_ID = `heading-${ID}`;
  const BADGE_CLASS = 'badge danger';
  const COLLAPSE_ID = `collapse-${ID}`;
  const COLLAPSE_CLASS = 'panel-collapse collapse in';

  it('should successfully create a panel element with no children', () => {
    
    shallowRenderer.render(
      <Panel id={ID} badgeText={BADGE_TEXT} title={TITLE}/>
    );
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.className).toEqual(CLASS_NAME);
    expect(element.props.children).toEqual([
        <div className="panel-heading" id={HEADING_ID} >
          <span className={BADGE_CLASS}>
            {BADGE_TEXT}
          </span>
          <h4 className="panel-title">
            {TITLE}
          </h4>
        </div>,
        <div id={COLLAPSE_ID} className={COLLAPSE_CLASS} >
          <div className="panel-body"></div>
        </div>
    ]);
  });


  it('should successfully create a panel element with children', () => {
    const CONTENT = 'TEST_CONTENT';
    
    shallowRenderer.render(
      <Panel id={ID} badgeText={BADGE_TEXT} title={TITLE}>
        {CONTENT}
      </Panel>
    );
    
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.className).toEqual(CLASS_NAME);
    expect(element.props.children).toEqual([
        <div className="panel-heading" id={HEADING_ID} >
          <span className={BADGE_CLASS}>
            {BADGE_TEXT}
          </span>
          <h4 className="panel-title">
            {TITLE}
          </h4>
        </div>,
        <div id={COLLAPSE_ID} className={COLLAPSE_CLASS} >
          <div className="panel-body">
            {CONTENT}
          </div>
        </div>
    ]);
  });
});
