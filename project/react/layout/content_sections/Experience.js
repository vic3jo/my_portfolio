/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the component for the Experience section.
 */
import Panel from './general/Panel';
import PanelGroup from './general/PanelGroup';
import React from 'react';
import Section from './general/Section';
import { connect } from 'react-redux';
import Utilties from '../../core/Utilities';

const Experience = (props) => {
  const { experience, resume } = props;
  const history = experience.history;
  const historyPanels = history.map((entry) => (
    <Panel
            id={`${entry.id}`}
           key={entry.id}
      parentId="experience-list"
         title={`${entry.position} - ${entry.company}`}
     badgeText={
          `${Utilties.formattedDate(entry.startDate)} - ${Utilties.formattedDate(entry.endDate)}`
      }
    >
      <p className="pre">{entry.description}</p>
    </Panel>
  ));

  return (
    <Section
          id="experience"
    iconType="road"
       title="Experience"
    >
      <div>
        <PanelGroup id="experience-list">
          {historyPanels}
        </PanelGroup>
        <a href={resume.file}>
          <h2 className="link-styled">
            <span className="glyphicon glyphicon-file"></span>
            See full resume
          </h2>
        </a>
      </div>
    </Section>
  );
};


Experience.propTypes = {
  experience: React.PropTypes.shape(
      { history: React.PropTypes.array.isRequired }
  ),
  resume: React.PropTypes.shape(
      { file: React.PropTypes.string.isRequired }
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
  return {
    experience: state.experience,
    resume: state.resume,
  };
}

export default connect(mapStateToProps)(Experience);
