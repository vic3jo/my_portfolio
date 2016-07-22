/**
 * Author: Victor Trejo
 * Description: This file contains all the tests related to the Footer Component.
 */

jest.unmock('../react/layout/Footer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Footer from '../react/layout/Footer';

describe('Footer', () => {
  
  const AUTHOR = 'test author';
  const YEAR = 1999;

  var footer = TestUtils.renderIntoDocument(
    <div>
      <Footer author={AUTHOR} year={YEAR} />
    </div>
  );
   
  var footerNode = ReactDOM.findDOMNode(footer);

  it('should contain the author name and creation year', () => {
    expect(footerNode.textContent).toEqual(`By ${AUTHOR}, ${YEAR}`);
  });
 
});