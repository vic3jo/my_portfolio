/**
 * Author: Victor Trejo.
 *
 * Description: This file contains the component for the Academic projects section.
 */
import Project from './general/Project';
import ProjectList from './general/ProjectList';
import React from 'react';
import Section from './general/Section';
import { connect } from 'react-redux';

const AcademicProjects = (props) => {
  const projectsItems = props.projects.map((project) => {
    return (
      <Project
                    key={project.id}
                  title={project.title}
                 course={project.course}
            description={project.description}
              languages={project.languages}
              libraries={project.libraries}
          repositoryUrl={project.repositoryUrl}
      />
    );
  });

  return (
    <Section
              id="academic-projects"
        iconType="blackboard"
           title="Academic Projects"
    >
      <ProjectList>
        {projectsItems}
      </ProjectList>
    </Section>
  );
};

AcademicProjects.propTypes = { projects: React.PropTypes.array.isRequired };

/**
 * Map the store states to the corresponding properties
 * of the component when the store state changes.
 * @param  {object} state the state object
 * @return {object}       the updated properties object.
 */
function mapStateToProps(state)
{
  return { projects: state.academicProjects.projects };
}


export default connect(mapStateToProps)(AcademicProjects);
