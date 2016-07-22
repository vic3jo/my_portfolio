/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the Footer component of the page.
 */
import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <div className="container">
        <div className="coder col-md-offset-4 col-md-4">
          By {props.author}, {props.year}
        </div>
      </div>
    </footer>
  );
};


// Footer.propTypes = { 
// 	author: React.PropTypes.string.isRequired,
// 	year: React.PropTypes.number.isRequired,
// };

export default Footer;