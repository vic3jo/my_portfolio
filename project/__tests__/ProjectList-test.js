/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the ProjectList Component.
 */

jest.unmock('../react/layout/content_sections/general/ProjectList');
jest.mock('../react/layout/content_sections/general/Project');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import ProjectList from '../react/layout/content_sections/general/ProjectList';
import Project from '../react/layout/content_sections/general/Project';

describe('ProjectList', () => {
  const shallowRenderer = TestUtils.createRenderer(); 
  const TAG_NAME = 'div';

  it('should successfully create a project list bootstrap element with no children', () => {
    shallowRenderer.render( <ProjectList /> );
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.children).toEqual(undefined);
  });

  it('should successfully create a project list bootstrap element with the given children', () => {
    shallowRenderer.render(
      <ProjectList>
        <Project />
      </ProjectList>
    );
   
    const element = shallowRenderer.getRenderOutput();

    expect(element.type).toEqual(TAG_NAME);
    expect(element.props.children).toEqual(
      <Project />
    );
  });
});
