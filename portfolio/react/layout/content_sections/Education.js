/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the component for the Education section.
 */
import ListGroup from './general/ListGroup';
import ListGroupItem from './general/ListGroupItem';
import React from 'react';
import Section from './general/Section';
import {connect} from 'react-redux';

class Education extends React.Component
{

    render ()
    {

        const items = this.props.education.history.map( (entry) => {

            return (
                <ListGroupItem
                      key={entry.id}
                    title={`${entry.career} - ${entry.institution}`}
                    badge={`${entry.startYear}-${entry.endYear}`}
                />
            );

        });

        return (
            <Section
                       id="education"
                 iconType="education"
                    title="Education"
            >
                <ListGroup>
                    {items}
                </ListGroup>
            </Section>
        );

    }

}

Education.propTypes = {
    education: React.PropTypes.shape(
        {history:React.PropTypes.array.isRequired}
    )
};

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps (state)
{

    return {education: state.education};

}

export default connect(mapStateToProps)(Education);
