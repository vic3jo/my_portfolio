import React from 'react';
import Section from './general/Section';
import ProjectList from './general/ProjectList';
import Project from './general/Project';
import {connect} from 'react-redux';

class AcademicProjects extends React.Component{

	render()
	{
		let projects = this.props.projects.map((x)=> <Project 
			key={x.id}
			title={x.title}
			course={x.course}
			description={x.description}
			languages={x.languages}
			libraries={x.libraries}
			repositoryUrl={x.repositoryUrl}/>
		);
		
		return (
			<Section 
					id="academic-projects" 
			 iconType="blackboard"
			 title="Academic Projects">
				<ProjectList>
						{projects}
				</ProjectList>
			</Section>
		)
	}
}

function mapStateToProps(state) {
  return { projects: state.academicProjects.projects };
}


export default connect(mapStateToProps)(AcademicProjects)