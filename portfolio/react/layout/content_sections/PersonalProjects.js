import React from 'react';
import Section from './general/Section';
import ProjectList from './general/ProjectList';
import Project from './general/Project';
import {connect} from 'react-redux';


class PersonalProjects extends React.Component
{
	render()
	{
		let projects = this.props.projects.map((x)=> <Project
			key={x.id} 
			title={x.title}
			course ={""}
			description={x.description}
			languages={x.languages}
			libraries={x.libraries}
			repositoryUrl={x.repositoryUrl}/>
		);
		
		return (
			<Section 
					id="personal-projects" 
			 iconType="sunglasses"
			 title="Personal Projects">
				<ProjectList>
						{projects}
				</ProjectList>
			</Section>
		)
	}
}

function mapStateToProps(state) {
  return { projects: state.personalProjects.projects };
}
export default connect(mapStateToProps)(PersonalProjects)