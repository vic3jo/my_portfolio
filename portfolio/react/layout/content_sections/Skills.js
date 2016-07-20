/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the component for the Skills section.
 */
import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

class Skills extends React.Component
{

    render ()
    {

        const items = this.props.skills.list.map( (skill) => {

            return (
                <li
                    className="btn btn-success skill"
                          key={skill.id}
                >
                    {skill.label}
                </li>
            );

        });

        return (
            <Section
                    id="skills"
              iconType="plus-sign"
                 title="Skills"
            >
                <ul className="list-unstyled list-inline skills-list">
                    {items}
                </ul>
            </Section>
        );

    }

}

Skills.propTypes = {skills: React.PropTypes.shape({list: React.PropTypes.array.isRequired})};

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps (state)
{

    return {skills: state.skills};

}

export default connect(mapStateToProps)(Skills);
