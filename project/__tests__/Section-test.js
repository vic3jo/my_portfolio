/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the Section Component.
 */

jest.unmock('../react/layout/content_sections/general/Section');
jest.mock('../react/layout/content_sections/general/Glyphicon');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Section from '../react/layout/content_sections/general/Section';
import Glyphicon from '../react/layout/content_sections/general/Glyphicon';

describe('Section', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'section';
  const ID = 'TEST_ID';
  const ICON_TYPE = 'TEST_ICON_TYPE';
  const TITLE = 'TEST_TITLE';

  it('should successfully create a section element with no children', () => {
    shallowRenderer.render(
      <Section id={ID} title={TITLE} iconType={ICON_TYPE}   />
    );
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.id).toEqual(ID);
    expect(element.props.children).toEqual(
      <div className="row">
        <div className="page-header col-sm-12">
          <h1 className="cursive-style">
            <Glyphicon iconType={ICON_TYPE} />
            <span className="section-title">{TITLE}</span>
          </h1>
        </div>
        <div className="content col-sm-12"></div>
      </div>
    );
  });

  it('should successfully create a project list bootstrap element with the given children', () => {
    const CONTENT = 'TEST_CONTENT';
    shallowRenderer.render(
      <Section id={ID} title={TITLE} iconType={ICON_TYPE} >
        {CONTENT}
      </Section>
    );
   
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.id).toEqual(ID);
    expect(element.props.children).toEqual(
      <div className="row">
        <div className="page-header col-sm-12">
          <h1 className="cursive-style">
            <Glyphicon iconType={ICON_TYPE} />
            <span className="section-title">{TITLE}</span>
          </h1>
        </div>
        <div className="content col-sm-12">
          {CONTENT}
        </div>
      </div>
    );
  });
});
