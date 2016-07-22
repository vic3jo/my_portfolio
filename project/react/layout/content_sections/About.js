/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the component for the About section.
 */
import React from 'react';
import Section from './general/Section';
import { connect } from 'react-redux';

const About = (props) => {
  return (
    <Section
           id="about"
     iconType="user"
        title="About me"
    >
      <p className="pre">
        {props.about.description}
      </p>
    </Section>
  );
};

About.propTypes = {
  about: React.PropTypes.shape(
    { description:React.PropTypes.string.isRequired }
  ),
};

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps(state)
{
  return { about: state.about };
}

export default connect(mapStateToProps)(About);
