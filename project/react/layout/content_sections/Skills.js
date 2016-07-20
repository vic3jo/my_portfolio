/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the component for the Skills section.
 */
import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

class SkillsList extends React.Component
{

    render ()
    {

        const {categoryName, skills} = this.props;
        const items = skills.map( (skill) => {

            return (
                <li
                    className="skill"
                          key={skill.id}
                >
                    <a href={skill.url}>
                        <span className="btn btn-info">{skill.label}</span>
                    </a>
                    <div className="skill-description">
                        <span className="up-triangle">&#9650;</span>
                        {skill.description}
                    </div>
                </li>
            );

        });

        return (
            <div className="skills-list-container">
                <h4>{categoryName}</h4>
                <ul className="list-unstyled list-inline skills-list">
                    {items}
                </ul>
            </div>
        );
    }
}


class Skills extends React.Component
{

    render ()
    {
        const {groupedSkills} = this.props;
        const lists = Object.keys(groupedSkills).map( (key) => {

            return (
               <SkillsList 
                         key={key}
                    categoryName={key} 
                      skills={groupedSkills[key]}
               />
            );

        });

        return (
            <Section
                    id="skills"
              iconType="plus-sign"
                 title="Skills"
            >
                {lists}
            </Section>
        );

    }

}

Skills.propTypes = {groupedSkills: React.PropTypes.object.isRequired};

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps (state)
{

    return {groupedSkills: state.skills};

}

export default connect(mapStateToProps)(Skills);
